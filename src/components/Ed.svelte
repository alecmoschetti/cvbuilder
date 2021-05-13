<script>
    import {edArray} from '../stores/store.js';
    function add() {
        $edArray = [...$edArray, {        
            school: '',
            focus: '',
            start: '',
            end: '',
            ongoing: false,
        }];
    };
    function remove(i) {
        $edArray.splice(i, 1);
        $edArray = [...$edArray];
    };
</script>
<section>
    <div>
        <h3>Education and Training</h3>
        <button on:click={add}>+</button>
    </div>
    {#each $edArray as ed, i}
        <div>
            <input type="text" bind:value={ed.school}>
            <input type="text" bind:value={ed.focus}>
            <input type="month" bind:value={ed.start}>
            {#if ed.ongoing === false}
            <input type="month" bind:value={ed.end}>
            {/if}
            <input type="checkbox" bind:checked={ed.ongoing}>
            <button on:click={() => remove(i)}>x</button>
        </div>
        {:else}
        <div>
            <p>Add Educational or Training Experience</p>
        </div>
    {/each}
</section>
<style>
    section {
        background-color: #C678DD;
        box-shadow: 0px 8px 10px -2px rgba(0, 0, 0, 0.46);
        border: none;
        border-radius: 3px;
        margin: 1% auto;
        padding: 1rem;
        width: fit-content;
    }
</style>