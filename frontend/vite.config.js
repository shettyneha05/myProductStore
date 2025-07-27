import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dotenv from 'dotenv'
dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  server:{
    proxy:{
      "/api":{
        target:process.env.API_URL
      },
    },
    port:process.env.PORT || 4000,
    host:'0.0.0.0'
  },
  preview:{
    allowedHosts:"myproductstore-frontend-2wg5.onrender.com"
  }
});
