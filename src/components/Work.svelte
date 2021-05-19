<script>
    import {workArray} from '../stores/store.js';
    function add() {
        $workArray = [...$workArray, {        
            title: '',
            organization: '',
            start: '',
            end: '',
            ongoing: false,
            editable: false,
            editButton: 'save'
        }];
    };
    function remove(i) {
        $workArray.splice(i, 1);
        $workArray = [...$workArray];
    };
</script>
<section>
    <div class="inputs-header">
        <h3>Work Experience</h3>
        <button on:click={add}>+</button>
    </div>
    {#each $workArray as work, i}
    <div class="inputs-wrapper">
        <label for="position">Position:</label>
        <input type="text" name="position" bind:value={work.title} placeholder="Position Title"  disabled={work.editable}>
        <label for="company">Company:</label>
        <input type="text" name="company" bind:value={work.organization} placeholder="Company / Organization" disabled={work.editable}>
        <label for="start">Date started:</label>
        <input type="month" name="start" bind:value={work.start} placeholder="from" disabled={work.editable}>
        {#if work.ongoing === false}
            <label for="to">Date ended:</label>
            <input type="month" name="to" bind:value={work.end} placeholder="to" disabled={work.editable}>
        {/if}
        <div class="ongoing">
            <label for="activeEd">Ongoing?</label>
            <input type="checkbox" name="activeEd" bind:checked={work.ongoing} disabled={work.editable}>
        </div>
        <div class="options">
            <button class="delete" on:click={() => remove(i)} disabled={work.editable}>remove</button>
            <button class="save" on:click={() => {
                work.editable = !work.editable;
                (work.editButton === 'save') ? work.editButton = 'edit' : work.editButton = 'save'}}>{work.editButton}</button>
        </div>
    </div>
    {:else}
    <div>
        <p>Add Work Experience</p>
    </div>
    {/each}
</section>
<style>
    h3 {
        text-align: left;
    }
    button {
        width: 8rem;
        height: 1.66rem;
        font-size: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button,
    h3,
    input,
    section,
    .inputs-wrapper  {
        margin: 3% auto;
    }
    section,
    .inputs-wrapper {
        box-shadow: 0px 8px 10px -2px rgba(0, 0, 0, 0.46);
        border: none;
        border-radius: 3px;
    }
    section {
        background-color: #464E5D;
        width: 100%;
        padding: .5rem;
    }
    .inputs-wrapper {
        background: #7F8A9F;
        width: 100%;
        padding: .66rem;
        display: grid;
        grid-template-columns: 30% 70%;
        align-items: center;
        text-align: left;
    }
    label {
        grid-column: 1;
    }
    input {
        grid-column: 2;
        width: 90%;
    }
    input[type="checkbox"] {
        width: 3rem;
        height: 1.25rem;
    }
    .options,
    .ongoing {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        grid-column: 1 / 3;
    }
    .delete {
        background-color: #e06656;
    }
    .save {
        background-color: #61afef;
    }
    @media screen and (min-width: 600px) {
    .inputs-wrapper {
        padding: .75rem;
        grid-template-columns: 1fr;
    }
    section {
        padding: 1rem;
    }
    label,
    input {
        grid-column: 1;
    }
}
</style>

