<script>
    import {workArray} from '../stores/store.js';
    function add() {
        $workArray = [...$workArray, {        
            title: '',
            organization: '',
            start: '',
            end: '',
            ongoing: false,
            tasks: []
        }];
    };
    function remove(i) {
        $workArray.splice(i, 1);
        $workArray = [...$workArray];
    };
</script>
<section>
    <div>
        <h3>Work Experience</h3>
        <button on:click={add}>+</button>
    </div>
    {#each $workArray as work, i}
        <div>
            <input type="text" bind:value={work.title}>
            <input type="text" bind:value={work.organization}>
            <input type="month" bind:value={work.start}>
            {#if work.ongoing === false}
            <input type="month" bind:value={work.end}>
            {/if}
            <input type="checkbox" bind:checked={work.ongoing}>
            <button on:click={() => remove(i)}>x</button>
        </div>
        {:else}
        <div>
            <p>Add Work Experience</p>
        </div>
    {/each}
</section>
<style>
    section {
        background-color: #E06656;
        box-shadow: 0px 8px 10px -2px rgba(0, 0, 0, 0.46);
        border: none;
        border-radius: 3px;
        margin: 1% auto;
        padding: 1rem;
        width: fit-content;
    }
</style>

