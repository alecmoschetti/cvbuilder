<script>
    import {general} from '../stores/store.js';
</script>
<section>
        <div>
            <h3>Personal Info</h3>
        </div>
        <div>
            <input type="text" bind:value={$general.name} placeholder="Your full name">
            <input type="text" bind:value={$general.title} placeholder="Your current title here">
            <input type="email" bind:value={$general.email} placeholder="Your email here">
            <input type="phone" bind:value={$general.phone} placeholder="Your phone number here">
        </div>
</section>
<style>
    section {
        background-color: #61AFEF;
        box-shadow: 0px 8px 10px -2px rgba(0, 0, 0, 0.46);
        border: none;
        border-radius: 3px;
        margin: 1% auto;
        padding: 1rem;
        width: fit-content;
    }
</style>