<script>
    //@ts-nocheck
	import { notes } from "$lib/notesStore";

    export let note;
    export let courseId;

    function DeleteNote(){
        console.log(note)
        notes.remove(note.id)
    }

</script>

{#if note.course.id === courseId || courseId === 'all'}
    <div id="container">
        <div class="samerow">
            <p id="meta">{note.timestamp} {note.course.name} (id:{note.course.id})</p>
            <button on:click={DeleteNote}>
                <img src="/trashicon.png" alt="Delete">
            </button>  
        </div>      
        <p>{note.text}</p>
    </div>
{/if}

<style>
    #container{
        padding: 5px;
        margin: 10px;
        border: 2px solid black;
    }
    .samerow{
        display: flex;
    }
    button img{
        height: 24px;
        width: 24px;
    }
    button{
        margin-left: auto;
        height: 30px;
    }
    p{
        font-size: 1.1em;
        font-weight: 500;
    }
    #meta{
        font-weight: 600;
    }
</style>