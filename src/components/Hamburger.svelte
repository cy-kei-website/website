<script lang="ts">
    import NavLinks from "./NavLinks.svelte";
    import { navigating } from "$app/stores";

    let open = false;

    navigating.subscribe((n) => {
        if (n) {
            open = false;
        }
    });
</script>

<div class="wrapper" class:slideover-open={open}>
    <button class="hamburger" on:click={() => open = true}>
        <img class="icon" src="/icons/hamburger-menu.svg" alt="Menu" />
    </button>
    <div class="slideover bg-very-light" class:open={open}>
        <button class="close" on:click={() => open = false}>
            <img class="icon" src="/icons/close.svg" alt="Menu" />
        </button>
        <div class="mobile-nav">
            <NavLinks vertical={true} />
        </div>
    </div>
    <div class="backdrop" class:open={open} />
</div>

<style>
    .wrapper {
        isolation: isolate;
    }

    .slideover-open .hamburger {
        opacity: 0;
    }
    
    button {
        display: block;
        height: 2rem;
        aspect-ratio: 1 / 1;
        background-color: transparent;
        padding: 0.25rem;
        border-radius: 0.5rem;
        transition: 0.25s;
    }

    button:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }

    img {
        display: block;
        height: 100%;
    }

    .slideover {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1000;
        pointer-events: none;
        opacity: 0;
        transform: translateX(5rem);
        
        transition: 0.5s;

        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 2rem;
        
        padding: 1rem;
        /* background-color: rgba(255, 255, 255, 1); */
        height: 100vh;
    }

    .slideover.open {
        opacity: 1;
        pointer-events: all;
        transform: translateX(0);
    }

    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        opacity: 0;
        z-index: 999;
        pointer-events: none;
        background-color: rgba(0, 0, 0, 0.4);
        transition: 0.5s;
    }

    .backdrop.open {
        opacity: 1;
    }

    .mobile-nav {
        padding: 1rem;
    }
</style>