<section class="modal">
    <div class="modal-backdrop" on:click|self|stopPropagation>
            <div class="modal-content-wrapper">
                <div class="modal-close">
                    <button on:click>
                        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path xmlns="http://www.w3.org/2000/svg" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0D0D0D"></path>
                            </svg>
                    </button>
                </div>
                <div class="modal-content">
                    <slot name="content" />
                </div>
            </div>
        </div>
</section>

<style>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }
    .modal-backdrop {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
    }
    .modal-content-wrapper {
        z-index: 10;
        padding: .35rem;
        width: 100%;
        max-width: 85vw;
        border-radius: 0.3rem;
        background-color: #353B46;
  }
    .modal-content {
        padding: 1rem;
        max-height: 100%;
        width: 100%;
    }
    .modal-backdrop,
    .modal-content-wrapper,
    .modal-content,
    button {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        overflow: auto;
    }
    .modal-backdrop {
        justify-content: center;
    }
    .modal-close {
        align-self: flex-end;
        margin: 3% 2% 3% 0;
    }
    button {
        width: 2.33rem;
        background-color: #E5C07B;
        padding: .2rem;
    }
    @media screen and (min-width: 600px) {
        .modal-content-wrapper {
            max-width: 75vw;
            padding: 1.25rem;
        }
    }
</style>

