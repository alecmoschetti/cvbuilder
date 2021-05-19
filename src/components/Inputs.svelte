<script>
    import Personal from './Personal.svelte';
    import Ed from './Ed.svelte';
    import Work from './Work.svelte';
</script>
<div class="inputs-wrapper">
    <Personal />
    <Ed />
    <Work />
</div>
<style>
    .inputs-wrapper {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        overflow: auto;
        width: 90%;
        margin: 0 auto;
    }
</style>