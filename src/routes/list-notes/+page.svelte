<script>
// @ts-nocheck
	import CourseSelect from "../courseSelect.svelte";
    import Header from "../header.svelte";
	import NotesList from "../notesList.svelte";

</script>

<svelte:head> 
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kalam&display=swap" rel="stylesheet">
</svelte:head>

<div id="container">
    <Header />
    <CourseSelect showAll={true} />
    <NotesList/>
</div>