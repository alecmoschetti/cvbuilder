<script>
	import Grid from './components/Grid.svelte'
	import Template from './components/Template.svelte';
	import Modal from './components/Modal.svelte';
	let open = false;
</script>

<Grid>
	<header>
		<h1>CV Builder</h1>
	</header>
	<section>
		<button class="modal-button" on:click={() => open = true}>Add / Edit Information</button>
		{#if open === true}
			<Modal on:click={() => open = false}/>
		{/if}
	</section>
	<main>
		<Template />
	</main>
</Grid>

<style>
	h1 {
		font-family: 'Raleway', sans-serif;
		font-weight: 700;
		font-size: 4.5rem;
		color: rgb(224, 102, 86);
	}
	main {
		width: 100%;
		height: 100%;
		padding: .1rem;
	}
	button {
		background-color: #E5C07B;
		outline: none;
		border: none;
		border-radius: 4px;
		padding: 1rem;
	}
</style>