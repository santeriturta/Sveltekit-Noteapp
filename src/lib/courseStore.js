// @ts-nocheck
import { writable } from 'svelte/store';

function createCourseStore() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        set,
        update,
        fetch: async () => {
            try {
                let currentCourses;
                const unsubscribe = courses.subscribe(value => {
                    currentCourses = value;
                });
                unsubscribe();
        
                if (currentCourses.length === 0) {
                    const response = await fetch('https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses');
                    const coursesData = await response.json();
                    set(coursesData);
                }
            } catch (error) {
                console.error('Something went wrong:', error);
            }
        },
    };
}

export const courses = createCourseStore();