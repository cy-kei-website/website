<script lang="ts">
    import PageStructure from "../components/PageStructure.svelte";
    import GalleryModal from "../components/GalleryModal.svelte";
    import { gallery, type GalleryPicture } from "../stores/gallery";
    import { Status } from "../types/status";
    import LoadingSpinner from "../components/utils/LoadingSpinner.svelte";

    let modal: GalleryModal;

    function openFullPicture(p: GalleryPicture) {
        modal.show(p);
    }
</script>

<PageStructure title="Media" imgName="bio-extrapic.jpg" layout="content-only">
    <section>
        <h2>Video</h2>
        <iframe class="yt-video" width="560" height="315" src="https://www.youtube.com/embed/L-h1Q_FNMQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
    <section>
        <h2>Images</h2>

        {#if $gallery.status === Status.PENDING}
            <LoadingSpinner message="Loading gallery" />
        {:else}
            <div class="gallery">
                {#each $gallery.pictures as picture}
                    <div class="gallery-item" tabindex="0" on:click={() => {openFullPicture(picture);}}>
                        <img src={picture.thumbnailUrl} alt="Cyprien Keiser" class="gallery-image" />
                        <div class="gallery-image-copyright bg-very-light">&#169; { picture.copyright }</div>
                    </div>
                {/each}
            </div>
            <GalleryModal bind:this={modal} />
        {/if}
    </section>
</PageStructure>

<style>

    .gallery {
        --thumb-max-size: 25rem;

        display: grid;
        justify-content: center;
        grid-template-columns: repeat(auto-fill, min(90vw, var(--thumb-max-size)));
        grid-auto-rows: min(90vw, var(--thumb-max-size));
        gap: 1rem;
    }

    .gallery-item {
        position: relative;
        overflow: hidden;
        cursor: pointer;

        border-radius: 0.5rem;

        transition: 0.25s ease-out;
    }

    .gallery-item:hover {
        filter: brightness(0.5);
        border-radius: 0;
    }

    .gallery-item:hover .gallery-image {
        transform: scale(1.1);
    }

    .gallery-item:hover .gallery-image-copyright {
        transform: translateY(100%);
    }

    .gallery-image {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;

        transition: 0.25s ease-out;
    }
    
    .gallery-image-copyright {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0.25rem;

        transition: 0.25s ease-out;
    }

</style>