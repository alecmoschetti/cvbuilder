<script>
    import {edArray} from '../stores/store.js';
    function add() {
        $edArray = [...$edArray, {        
            school: '',
            focus: '',
            start: '',
            end: '',
            ongoing: false,
            editable: false,
            editButton: 'save',
        }];
    };
    function remove(i) {
        $edArray.splice(i, 1);
        $edArray = [...$edArray];
    };
</script>
<section>
    <div class="inputs-header">
        <h3>Education and Training</h3>
        <button class="add" on:click={add}>+</button>
    </div>
    {#each $edArray as ed, i}
    <div class="inputs-wrapper">
        <label for="position">School / Training:</label>
        <input type="text" name="position" bind:value={ed.school} placeholder="School" disabled={ed.editable}>
        <label for="company">Focus / Program:</label>
        <input type="text" name="company" bind:value={ed.focus} placeholder="Degree / Certification" disabled={ed.editable}>
        <label for="start">Date started:</label>
        <input type="month" name="start" bind:value={ed.start} placeholder="from" disabled={ed.editable}>
    {#if ed.ongoing === false}
        <label for="to">Date ended:</label>
        <input type="month" name="to" bind:value={ed.end} placeholder="to" disabled={ed.editable}>
    {/if}
        <div class="ongoing">
            <label for="activeEd">Ongoing?</label>
            <input type="checkbox" name="activeEd" bind:checked={ed.ongoing} disabled={ed.editable}>
        </div>
        <div class="options">
            <button class="delete" on:click={() => remove(i)} disabled={ed.editable}>remove</button>
            <button class="save" on:click={() => {
                ed.editable = !ed.editable;
                (ed.editButton === 'save') ? ed.editButton = 'edit' : ed.editButton = 'save'}}>{ed.editButton}</button>
        </div>
    </div>
    {:else}
    <div>
        <p>Add Educational or Training Experience</p>
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