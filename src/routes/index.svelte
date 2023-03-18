<script>
    import SocialLinks from "../components/SocialLinks.svelte";
    import SmartConcertList from "../components/SmartConcertList.svelte";
    import { bios } from "../stores/bios";
    import LoadingSpinner from "../components/LoadingSpinner.svelte";
    import { Status } from "../types/status";
</script>

<svelte:head>
    <title>Cyprien Keiser - Home</title>
</svelte:head>

<div id="home-wrapper">
    <div id="home-bg" />
    <section class="splash">
        <div class="text">
                <h1 class="name">Cyprien Keiser</h1>
                <h2 class="instrument">Cellist</h2>
                <SocialLinks />
        </div>
    </section>

    <div class="grid bg-light">
        <section class="mini-bio backdrop-blur-very-strong bg-very-light">
            <h3>About Cyprien</h3>
            <!-- TODO : make more SSR-friendly -->
            {#if $bios.status === Status.PENDING}
                <LoadingSpinner message="Loading bio" />
            {:else}
                <p class="line-breaks">{ $bios.short.en }</p>
            {/if}
            
            <a href="/bio" class="cta">See Biography</a>
        </section>
        
        <section class="main-media backdrop-blur-very-strong bg-very-light">
            <h3>Listen</h3>
            <iframe class="yt-video" width="560" height="315" src="https://www.youtube.com/embed/L-h1Q_FNMQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <a href="/media" class="cta-inverted">See Medias</a>
        </section>
    
        <section class="concerts backdrop-blur-very-strong bg-very-light">
            <h3>Concerts</h3>
            <SmartConcertList mode="upcoming" maxCount={5} />
            <a href="/concerts" class="cta">See All Concerts</a>
        </section>
        
        <section class="gallery backdrop-blur-very-strong bg-very-light">
            <div class="gallery-backdrop">
                <a href="/media" class="cta-inverted">See Gallery</a>
            </div>
        </section>
    </div>

</div>

<style>

    #home-wrapper {
        position: relative;
    }
    
    #home-bg {
        position: fixed;
        height: 100vh;
        width: 100%;
        z-index: -1;

        background-image: url("/imgs/home_bg.jpg");
        background-size: cover;
        background-position: 70%;
    }

    section {
        padding: min(2rem, 5vw);
        box-sizing: border-box;
    }

    .splash {
        position: relative;
        min-height: 100vh;
    }

    .splash .text {
        position: absolute;
        top: 6rem;
        border-radius: 2rem;

        color: white;
    }

    .name {
        font-size: min(4rem, 15vw);
        text-shadow: 0 0 3rem rgba(0, 0, 0, 1), 0 0 1rem rgba(0, 0, 0, 1);
        margin-bottom: 0.5rem;
    }
    .instrument {
        font-size: min(3rem, 12vw);
        text-shadow: 0 0 3rem rgba(0, 0, 0, 1), 0 0 1rem rgba(0, 0, 0, 1);
        margin-top: 1rem;
    }
    @media screen and (max-width: 55rem) {
        .splash .text {
            top: unset;
            bottom: 2rem;
        }
    }

    .grid {
        display: grid;
        grid-template-areas:
            "bio bio media media"
            "gallery concerts concerts concerts";
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: min-content 1fr;
        gap: 1rem;

        padding: 1rem 0;

        box-shadow: 0 -4rem 4rem 2rem rgba(255, 255, 255, 0.4);
    }
    
    @media screen and (max-width: 50rem) {
        .grid {
            display: block;
            padding: 0;
        }
    }

    h3 {
        margin-top: 0;
        text-shadow: 0 0 3rem rgba(255, 255, 255, 0.75);
    }

    .mini-bio {
        grid-area: bio;
    }

    .main-media {
        grid-area: media;
        background-color: var(--color-primary-light);
    }

    .concerts {
        grid-area: concerts;
    }

    .gallery {
        grid-area: gallery;
        background-image: url("/imgs/garden-playing.jpg");
        background-size: cover;
        background-position: center;
        padding: 0;
        min-height: 15rem;
    }

    .gallery-backdrop {
        background-color: var(--color-primary-light);
        min-height: 15rem;
        height: 100%;
        box-sizing: border-box;
        padding: 2rem;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
    }
</style>