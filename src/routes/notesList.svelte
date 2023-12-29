<script>
    //@ts-nocheck
    import NoteComponent from './noteComponent.svelte';
    import { selectedCourse } from '$lib/store';
    import { notes } from '$lib/notesStore';
    let courseId;

    $: {
        courseId = $selectedCourse;
        notes.fetch();
    }
</script>

{#each $notes as note (note.id)}
    {#if note.course.id === courseId || courseId === 'all'}
        <NoteComponent {note} {courseId} />
    {/if}
{/each}

{#if !$notes.some(note => note.course.id === courseId || courseId === 'all')}
    <p>No notes available for the selected course.</p>
{/if}
