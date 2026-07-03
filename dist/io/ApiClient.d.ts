/**
 * ApiClient — REST client for Muraguchi backend.
 *
 * Provides methods to sync project data with the Muraguchi backend API.
 * The host project provides the apiUrl and auth token.
 */
export interface ApiClientOptions {
    baseUrl: string;
    token?: string;
    headers?: Record<string, string>;
}
export declare class ApiClient {
    private baseUrl;
    private token;
    private headers;
    constructor(options: ApiClientOptions);
    /** Set auth token */
    setToken(token: string): void;
    /** GET request */
    get<T>(path: string): Promise<T>;
    /** POST request */
    post<T>(path: string, body: unknown): Promise<T>;
    /** PUT request */
    put<T>(path: string, body: unknown): Promise<T>;
    /** DELETE request */
    delete<T>(path: string): Promise<T>;
    getProject(projectId: string): Promise<unknown>;
    saveProject(projectId: string, data: unknown): Promise<unknown>;
    saveCamera(projectId: string, cameraId: string, data: unknown): Promise<unknown>;
    deleteCamera(projectId: string, cameraId: string): Promise<unknown>;
    saveScene(projectId: string, data: unknown): Promise<unknown>;
    private request;
}
