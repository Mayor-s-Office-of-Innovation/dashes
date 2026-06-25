import { defineConfig } from 'vite';

export default defineConfig({
  // Relative base so the build works under a GitHub Pages project subpath
  // (https://<org>.github.io/dashes/) without hardcoding the repo name —
  // and still works locally and if the repo is ever renamed/moved.
  base: './',
});
