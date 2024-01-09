import { readable } from 'svelte/store';
import { onSetLanguageTag, languageTag } from '../paraglide/runtime';

export const lang = readable<string>('en', (set) => {
  onSetLanguageTag(() => set(languageTag()));
});
