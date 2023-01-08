import { writable, type Writable } from 'svelte/store';

export const selectedImage: Writable<string | null> = writable(null);
