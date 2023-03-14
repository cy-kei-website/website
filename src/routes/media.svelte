<script lang="ts">
    import PageStructure from "../components/PageStructure.svelte";
</script>

<PageStructure title="Media" imgName="bio-extrapic.jpg" layout="content-only">
    <section>
        <h2>Video</h2>
        <iframe class="yt-video" width="560" height="315" src="https://www.youtube.com/embed/L-h1Q_FNMQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
    <section>
        <h2>Images</h2>
        <img src="/imgs/looking-up.jpg" alt="Cyprien Keiser" class="gallery-image" />
    </section>
</PageStructure>

<style>

    .gallery-image {
        display: block;
        max-width: min(90vw, 500px);
    }

</style>