<script>
    import Inputs from './Inputs.svelte';
</script>

<div class="modal-overlay" id="open-modal" >
    <div class="modal-content">
    <a href={"#"} on:click >Close</a>
    <Inputs />
    </div>
</div>

<style>
    .modal-overlay {
        position: fixed;
        /* more modal stuff */
    }
</style>

