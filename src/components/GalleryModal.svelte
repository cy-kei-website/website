<script lang="ts">
    import type { GalleryPicture } from "../stores/gallery";

    let dialog: HTMLDialogElement;

    let picture: GalleryPicture = {
        copyright: "",
        url: "",
        thumbnailUrl: "",
        uploadedDate: new Date()
    };

    export function show(galleryPicture: GalleryPicture) {
        dialog.showModal();
        picture = galleryPicture;
    }

    function close() {
        dialog.close();
    }

    async function downloadPicture() {
        const response = await fetch(picture.url);
        const blob = await response.blob();

        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.style.display = "none";
        a.download = "Cyprien_Keiser";

        document.body.appendChild(a);
        a.click();
        // a.remove();
    }

</script>

<dialog class="bg-mid-light" bind:this={dialog}>
    <div class="toolbar">
        <div></div>
        
        <!--
        <button class="soft-button" on:click={downloadPicture}>
            <img class="icon" src="/icons/download.svg" alt="Download" />
        </button>
        -->

        <button class="soft-button" on:click={close}>
            <img class="icon" src="/icons/close.svg" alt="Close" />
        </button>
    </div>

    <img src={picture.url} alt={picture.copyright} class="image" />
    <div class="copyright">
        &#169; { picture.copyright }
    </div>
</dialog>

<style>

    dialog {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: none;
        padding: 0.25rem;
        margin: 0;
        border-radius: 0.5rem;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

        animation: dialog-appear 0.2s ease-out;
    }
    
    dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(5px);
    }

    dialog[open]::backdrop {
        animation: dialog-appear 0.2s ease-out;
    }
    
    .toolbar {
        padding: 0.25rem;
        display: flex;
        justify-content: space-between;
    }

    .image {
        max-width: 90vw;
        max-height: 70vh;
    }

    @keyframes dialog-appear {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

</style>