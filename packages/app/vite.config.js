import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000",
      "/auth": "http://localhost:3000",
      "/images": "http://localhost:3000"
      // "/login": "http://localhost:3000",
      // "/register": "http://localhost:3000"
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        sub0: resolve(__dirname, "login.html"),
        sub1: resolve(__dirname, "movies-out-now.html"),
        sub2: resolve(__dirname, "movies-out-now-item.html"),
        sub3: resolve(__dirname, "movie-library.html"),
        // sub4: resolve(__dirname, 'movie-library-item.html'),
        sub4: resolve(__dirname, "theaters.html"),
        sub5: resolve(__dirname, 'theaters-item.html'),
        sub6: resolve(__dirname, "soundtrack-library.html"),
        sub7: resolve(__dirname, 'soundtrack-item.html'),
        sub8: resolve(__dirname, "artifacts.html"),
        // sub9: resolve(__dirname, 'film-locations.html')
      },
    },
  },
});