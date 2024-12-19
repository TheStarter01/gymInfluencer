import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allow access from any IP address on the network
    port: 5173,        // Make sure this matches the port you're using
    strictPort: true,  // Ensures the port is not automatically changed
  },
})
