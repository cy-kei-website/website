<script>
    import Nav from '../components/nav/Nav.svelte';
    import SocialLinks from "../components/SocialLinks.svelte";
    import { updateConcerts } from "../stores/concerts";
    import { updateBios } from "../stores/bios";
    import { updateGallery } from "../stores/gallery";
    import { updateSocialMedias } from "../stores/socialMedias";
    import "../styles/global.css";

    updateConcerts();
    updateBios();
    updateGallery();
    updateSocialMedias();
</script>

<Nav />
<slot />
<footer>
    Cyprien Keiser
    <SocialLinks />
</footer>

<style>
    footer {
        position: relative; /* allows to go on top of shadows */
        background-color: rgb(51, 51, 51);
        color: white;
        padding: 2rem;
    }
</style>