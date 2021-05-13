<div class="wrapper">
    <slot></slot>
</div>

<style>
    .wrapper {
		background-color: rgb(33, 37, 43);
		width: 100%;
		height: 100%;
		max-width: 100%;
		max-height: 100%;
		margin: 0 auto;
		box-shadow: 0px 8px 10px -2px rgba(0, 0, 0, 0.46);
        border: none;
		border-radius: 3px;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: .5fr .5fr 3fr;
		gap: .5rem;
		place-items: center;
		text-align: center;
		overflow-y: scroll;
	}

	::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}

@media screen and (min-width: 900px) {
	.wrapper {
		width: 75%;
	}
}
</style>