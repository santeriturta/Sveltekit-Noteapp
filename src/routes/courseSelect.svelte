<script>
    //@ts-nocheck
        import { onMount } from 'svelte';
        import { courses } from '$lib/courseStore';
        import { selectedCourse } from '$lib/store';
        
        export let showAll = false;
        export let disabled = false;
    
        onMount(() => {
            courses.fetch();
        });
    </script>
    
    {#await $courses}
        <p class="samerow">Loading courses...</p>
    {:then $courses}
        <div>
            <p class="samerow">Course: </p>
            <select bind:value={$selectedCourse} class="samerow" {disabled}>
                {#if showAll}
                    <option value="all">All</option>
                {/if}
                {#each $courses as course (course.id)}
                    <option value={course.id}>{course.name}</option>
                {/each}
            </select>
        </div>
    {:catch error}
        <p>Something went wrong: {error.message}</p>
    {/await}
    
    <style>
        .samerow{
            display: inline-block;
        }
        p{
        font-size: 1.2em;
        font-weight: 600;
        }
        option{
            font-size: 1.2em;
        }
    </style>
    