import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [".trycloudflare.com"],
  },
  build: {
    target: "es2019",
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-motion": ["framer-motion"],
          "vendor-router": ["react-router-dom"],
          "vendor-styled": ["styled-components"],
        },
      },
    },
  },
})
