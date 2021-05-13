<div class="card">
    <div class="content">
        <slot></slot>
    </div>
</div>

<style>
    .card {
        box-shadow: 0px 8px 10px -2px rgba(0, 0, 0, 0.46);
        border: none;
        border-radius: 3px;
        margin: 1% auto;
        padding: .1rem;
        width: fit-content;
    }
    .content {
        width: fit-content;
        margin: 0 auto;
        padding: .5rem;
    }
</style>