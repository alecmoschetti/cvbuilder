<script>
    import {general, workArray, edArray} from '../stores/store.js';
</script>
    
<div class="outer__template">
    <div class="hero">
        <h2>{$general.name}</h2>
        <h3>{$general.title}</h3>
        <p>{$general.email}</p>
        <p>{$general.phone}</p>
    </div>
    <div class="education">
        {#each $edArray as ed}
        <p>{ed.school}</p>
        <p>{ed.focus}</p>
        <p>{ed.start} -            
        {#if ed.ongoing === false}
            {ed.end}
            {:else}
            Present
            {/if}</p>
        {/each}
    </div>
    <div class="work">
        {#each $workArray as work}
        <p>{work.title}</p>
        <p>{work.organization}</p>
        <p>{work.start} -            
        {#if work.ongoing === false}
            {work.end}
            {:else}
            Present
            {/if}</p>
        {/each}
    </div>
</div>

<style>
    .outer__template {
        box-shadow: 0px 8px 10px -2px rgba(0, 0, 0, 0.46);
        border: none;
        border-radius: 3px;
        margin: 1% auto;
        padding: .25rem;
        width: 95%;
        background: whitesmoke;
    }

    @media screen and (min-width: 900px) {
        .outer__template {
            width: 75%;
        }
    }
</style>