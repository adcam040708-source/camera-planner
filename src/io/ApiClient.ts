/**
 * ApiClient — REST client for Muraguchi backend.
 *
 * Provides methods to sync project data with the Muraguchi backend API.
 * The host project provides the apiUrl and auth token.
 */

export interface ApiClientOptions {
  baseUrl: string              // e.g. '/api/camera-planner'
  token?: string               // JWT token for auth
  headers?: Record<string, string>
}

export class ApiClient {
  private baseUrl: string
  private token: string
  private headers: Record<string, string>

  constructor(options: ApiClientOptions) {
    this.baseUrl = options.baseUrl.replace(/\/$/, '')
    this.token = options.token || ''
    this.headers = options.headers || {}
  }

  /** Set auth token */
  setToken(token: string): void {
    this.token = token
  }

  /** GET request */
  async get<T>(path: string): Promise<T> {
    return this.request<T>('GET', path)
  }

  /** POST request */
  async post<T>(path: string, body: unknown): Promise<T> {
    return this.request<T>('POST', path, body)
  }

  /** PUT request */
  async put<T>(path: string, body: unknown): Promise<T> {
    return this.request<T>('PUT', path, body)
  }

  /** DELETE request */
  async delete<T>(path: string): Promise<T> {
    return this.request<T>('DELETE', path)
  }

  // --- Convenience methods ---

  async getProject(projectId: string) {
    return this.get(`/projects/${projectId}`)
  }

  async saveProject(projectId: string, data: unknown) {
    return this.put(`/projects/${projectId}`, data)
  }

  async saveCamera(projectId: string, cameraId: string, data: unknown) {
    return this.put(`/projects/${projectId}/cameras/${cameraId}`, data)
  }

  async deleteCamera(projectId: string, cameraId: string) {
    return this.delete(`/projects/${projectId}/cameras/${cameraId}`)
  }

  async saveScene(projectId: string, data: unknown) {
    return this.put(`/projects/${projectId}/scene`, data)
  }

  // --- Private ---

  private async request<T>(method: string, path: string, body?: unknown): Promise<T> {
    const url = `${this.baseUrl}${path}`
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...this.headers,
    }
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`
    }

    const res = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    })

    if (!res.ok) {
      throw new Error(`API ${method} ${path} failed: ${res.status} ${res.statusText}`)
    }

    return res.json() as Promise<T>
  }
}
