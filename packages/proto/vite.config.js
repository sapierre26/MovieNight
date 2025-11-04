import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // sub: resolve(__dirname, 'movies-out-now.html'),
        sub: resolve(__dirname, 'movies-out-now-item.html'),
        sub: resolve(__dirname, 'movie-library.html'),
        // sub: resolve(__dirname, 'movie-library-item.html'),
        // sub: resolve(__dirname, 'theaters.html'),
        // sub: resolve(__dirname, 'theaters-item.html'),
        sub: resolve(__dirname, "soundtrack-library.html"),
        // sub: resolve(__dirname, 'soundtrack-library-item.html'),
        sub: resolve(__dirname, 'artifacts-library.html'),
        // sub: resolve(__dirname, 'film-locations.html')
      },
    },
  },
});
