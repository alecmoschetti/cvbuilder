<script>
    import {general} from '../stores/store.js';
</script>
<section>
    <div>
        <h3>Personal Info</h3>
    </div>
    <div class="inputs-wrapper">
        <label for="name">Name: </label>
        <input type="text" name="name" bind:value={$general.name} placeholder="Your full name">
        <label for="title">Title: </label>
        <input type="text" name="title" bind:value={$general.title} placeholder="Your current title here">
        <label for="email">Email: </label>
        <input type="email" name="email" bind:value={$general.email} placeholder="Your email here">
        <label for="phone">Phone: </label>
        <input type="phone" name="phone" bind:value={$general.phone} placeholder="Your phone number here">
    </div>
</section>
<style>
    h3 {
        margin: 2% auto;
        text-align: left;
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
        margin: 1% auto;
        padding: .5rem;
    }
    .inputs-wrapper {
        background: #7F8A9F;
        width: 100%;
        padding: .2rem;
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
        margin: 2% auto;
        width: 90%;
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