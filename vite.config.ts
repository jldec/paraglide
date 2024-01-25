import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { paraglide } from '@inlang/paraglide-js-adapter-vite';

export default defineConfig({
  plugins: [
    paraglide({
      project: './pursiny-sveltekit.inlang', //Path to your inlang project
      outdir: './src/paraglide', //Where you want the generated files to be placed
    }),
    sveltekit(),
  ],
});
