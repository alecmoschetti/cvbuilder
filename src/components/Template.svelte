<script>
    import {general, workArray, edArray} from '../stores/store.js';
</script>
    
<div class="outer__template">
    <div class="hero">
        <div>
            <h2>{$general.name}</h2>
            <h3>{$general.title}</h3>
        </div>
        <aside>
            <p>{$general.email}</p>
            <p>{$general.phone}</p>
        </aside>
    </div>
    <section>
        <div class="education">
            <div class="subhead">
                <h4>Education</h4>
            </div>
            {#each $edArray as ed}
            <div class="info">
                <p>{ed.school}</p>
                <p>{ed.focus}</p>
                <p>From: {ed.start}            
                {#if ed.ongoing === false}
                    To: {ed.end}
                    {:else}
                    - Present
                    {/if}</p>
            </div>
            {/each}
        </div>
        <div class="work">
            <div class="subhead">
                <h4>Work Experience</h4>
            </div>
            {#each $workArray as work}
            <div class="info">
                <p>{work.title}</p>
                <p>{work.organization}</p>
                <p>From : {work.start}            
                {#if work.ongoing === false}
                    To: {work.end}
                    {:else}
                    - Present
                    {/if}</p>
            </div>
            {/each}
        </div>
    </section>
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
    .hero {
        background-color: #61afef;
    }
    .hero,
    section {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        text-align: center;
        align-items: center;
        padding: .25rem;
    }
    .info,
    .subhead {
        margin: 2% 0;
        padding: .333rem;
    }
    @media screen and (min-width: 900px) {
        .outer__template {
            width: 88%;
        }
        .hero {
            flex-flow: row wrap;
            justify-content: space-around;
            padding: .5rem;
        }
        section {
            text-align: left;
            flex-flow: row wrap;
            justify-content: space-evenly;
            align-items: self-start;
        }
    }
</style>