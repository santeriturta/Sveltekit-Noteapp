<script>
//@ts-nocheck
	import Header from "./header.svelte";
	import { notes } from "$lib/notesStore";
	import { courses } from "$lib/courseStore";
    notes.fetch()
    courses.fetch()
</script>

<svelte:head> 
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kalam&display=swap" rel="stylesheet">
</svelte:head>

<div id="container">
    <Header />

    <nav>
        <a href="/create-notes">Create notes for class</a>
        <a href="/list-notes">List notes</a>
        <a href="/add-courses">Add courses</a>
    </nav>

</div>

<style>
    :global(*) {
        font-family: 'Kalam', cursive;
    }
    :global(#container) {
    width: 800px;
    margin: 0 auto;
    border: 1px solid black;
    padding: 40px;
    }
    :global(a) {
       text-decoration: none;
       color: inherit;
       border: 3px solid;
       border-color: black;
       
       border-radius: 15px;
       padding: 10px;
   }
</style>

