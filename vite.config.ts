import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig(({ mode }) => ({
  root: mode === 'development' ? 'demo' : undefined,
  plugins: [
    react(),
    dts({ include: ['src'] }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: mode === 'development' ? undefined : {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'CameraPlanner',
      formats: ['es', 'umd'],
      fileName: 'camera-planner',
    },
    rollupOptions: mode === 'development' ? undefined : {
      external: ['react', 'react-dom', 'three'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          three: 'THREE',
        },
      },
    },
  },
}))
