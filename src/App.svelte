<script>
	import Grid from './components/Grid.svelte'
	import Template from './components/Template.svelte';
	import Modal from './components/Modal.svelte';
	import Inputs from './components/Inputs.svelte'
	let open = false;
</script>

<Grid>
	<header>
		<h1>CV Builder</h1>
	</header>
	<section>
		<button class="modal-button" on:click={() => open = true}>Add / Edit Information</button>
		{#if open === true}
			<Modal on:click={() => open = false}>
				<div slot="content" class="slot-content">
					<Inputs />
				</div>
			</Modal>
		{/if}
	</section>
	<main>
		<Template />
	</main>
</Grid>

<style>
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
		font-size: 1.1rem;
	}
	.slot-content {
		width: 100%;
	}
</style>