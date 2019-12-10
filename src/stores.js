import { writable } from "svelte/store";

export const beers = writable({ keyIncrementor: 0, beers: []});
