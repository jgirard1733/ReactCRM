import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 80,
        proxy: {
          '/api' : 'https://kusj4pfexk.execute-api.us-east-1.amazonaws.com/'
        }
      },
      rollupOptions: {
        external: [ 'react', 'react-dom' ]
      },
})
