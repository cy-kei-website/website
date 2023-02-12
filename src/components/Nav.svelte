<script>
    import NavLinks from "./NavLinks.svelte";
    import Hamburger from "./Hamburger.svelte";
</script>

<nav id="nav-wrapper" class="backdrop-blur-strong">
    <div class="logo">Cyprien Keiser</div>

    <div class="links">
        <NavLinks />
    </div>

    <div class="hamburger">
        <Hamburger />
    </div>
</nav>

<style>
    #nav-wrapper {
        padding: 1rem;
        background-color: rgba(255, 255, 255, 0.5);
        position: fixed;
        top: 0;
        z-index: 100;
        width: 100%;
        box-sizing: border-box;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-family: var(--ff-heading);
        font-size: 1.5rem;
    }

    .links {
        display: none;
    }

    .hamburger {
        position: relative;
        display: block;
    }

    @media screen and (min-width: 50rem) {
        .links {
            display: flex;
        }

        .hamburger {
            display: none;
        }
    }
</style>