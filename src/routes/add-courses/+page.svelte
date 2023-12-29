<script>
//@ts-nocheck
    import Header from "../header.svelte";
    import { goto } from '$app/navigation';
	import { courses } from "$lib/courseStore";

    let course
    let createdCourses = []
    courses.fetch()

    function CreateNewCourse(){
        
        if (course === undefined || course.length <= 0) {
            alert('Please provide the courses name.');
            return;
        }

        let createdCourse = {
            "name" : course
        }

        courses.update(n => {
            createdCourse.id = n.length
            return [...n, createdCourse]
        })

        courses.subscribe(value => {
            console.log(value);
        });

        createdCourses = [...createdCourses, createdCourse]
        course = ''
    }

</script>

<svelte:head> 
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kalam&display=swap" rel="stylesheet">
</svelte:head>

<div id=container>
    <Header />

    <p>Enter course name and press 'Save'</p>

    <input type="text" bind:value={course} name="newCourseInput" id="newCourseInput">
    <button on:click={CreateNewCourse}>
        Save
    </button>
    <button type="button" on:click={() => goto('/')}>Back</button>

    {#each createdCourses as createdCourse (createdCourse.id)}
    <div id="note">
        <p>Opintojakso {createdCourse.name} lisätty id:llä {createdCourse.id}</p>
    </div>
    {/each}

</div>