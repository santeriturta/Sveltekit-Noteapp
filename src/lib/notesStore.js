// @ts-nocheck
import { writable } from 'svelte/store';

function createNotes() {
    const { subscribe, set, update } = writable([]);
    let fetched = false;

    return {
        subscribe,
        set,
        update,
        fetch: async () => {
            if (!fetched) {
                try {
                    const response = await fetch('https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes');
                    const notesData = await response.json();
                    set(notesData);
                    fetched = true;
                } catch (error) {
                    console.error('Something went wrong:', error);
                }
            }
        },
        remove: (id) => {
            update(notes => notes.filter(note => note.id !== id));
        }
    };
}

export const notes = createNotes();