<script>
    //@ts-nocheck
    import { goto } from '$app/navigation';
    import CourseSelect from "../courseSelect.svelte";
    import Header from "../header.svelte";
    import { courses } from "$lib/courseStore";
	import { selectedCourse } from "$lib/store";
	import { notes } from "$lib/notesStore";

    let newNote = '';
    let createdNotes = []
    let course = {}
    let timeStamp
    let sessionActive = false

    function createNewNote() {
        if ($selectedCourse === 'all') {
            alert('Please select a course before creating a note.');
            return;
        }
        if (newNote.length <= 0) {
            alert('Please write something into the note.');
            return;
        }
        timeStamp = new Date();
        course = $courses[$selectedCourse]
        let createdNote = {
            "text" : newNote,
            "course" : course,
            "timestamp" : formatDate()
        }

        notes.update(n => {
            createdNote.id = n.length
            return [...n, createdNote]
        })

        notes.subscribe(n => {
            console.log(n)
        })
        sessionActive = true

        createdNotes = [...createdNotes, createdNote]
        newNote = ''
}

    function formatDate(){
        let year = timeStamp.getFullYear();
        let month = ('0' + (timeStamp.getMonth() + 1)).slice(-2);
        let day = ('0' + timeStamp.getDate()).slice(-2);
        let hours = ('0' + timeStamp.getHours()).slice(-2);
        let minutes = ('0' + timeStamp.getMinutes()).slice(-2);
        let seconds = ('0' + timeStamp.getSeconds()).slice(-2);

        let formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

        return formattedDate
    }
</script>

<svelte:head> 
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kalam&display=swap" rel="stylesheet">
</svelte:head>

<div id=container>
    <Header />
    <p>Add new notes for the course</p>
    <CourseSelect showAll={false}
    disabled={sessionActive}/>
    
    <div id="innercontainer">
        <textarea bind:value={newNote} name="newNoteInput" id="newNoteInput"></textarea>
        <button on:click={createNewNote}>
            Save
        </button>
        <button type="button" on:click={() => goto('/')}>Back</button>
    </div>

    {#each createdNotes as createdNote (createdNote.id)}
    <div id="note">
        <p>{createdNote.text}</p>
    </div>
    {/each}

</div>

<style>
    #note{
        padding: 5px;
        margin: 10px;
        border: 2px solid black;
    }
    #innercontainer{
        display: flex;
        margin: 10px;
    }
    button{
        margin: 10px;
    }
</style>
