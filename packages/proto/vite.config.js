import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        sub1: resolve(__dirname, "movies-out-now.html"),
        // sub1a: resolve(__dirname, "movies-out-now-item.html"),
        sub2: resolve(__dirname, "movie-library.html"),
        // sub2a: resolve(__dirname, 'movie-library-item.html'),
        sub3: resolve(__dirname, "theaters.html"),
        // sub3a: resolve(__dirname, 'theaters-item.html'),
        sub4: resolve(__dirname, "soundtrack-library.html"),
        sub5: resolve(__dirname, 'soundtrack-item.html'),
        sub6: resolve(__dirname, "artifacts.html"),
        // sub6: resolve(__dirname, 'film-locations.html')
      },
    },
  },
});
