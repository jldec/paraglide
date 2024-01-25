import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import ViteRestart from 'vite-plugin-restart';
import { paraglide } from '@inlang/paraglide-js-adapter-vite';
import UnoCSS from 'unocss/vite';

export default defineConfig({
  plugins: [
    UnoCSS(),
    sveltekit(),
    paraglide({
      project: './pursiny-sveltekit.inlang',
      outdir: './src/paraglide',
    }),
    ViteRestart({ restart: 'mdsvex.config.js' }),
  ],
});
