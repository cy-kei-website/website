<script>
    import Nav from '../components/nav/Nav.svelte';
    import SocialLinks from "../components/utils/SocialLinks.svelte";
    import "../styles/global.css";
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