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

<div class="wrapper">
    <button class="hamburger" on:click={() => open = true}>Menu</button>
    <div class="slideover" class:open={open}>
        <button class="close" on:click={() => open = false}>Close</button>
        <NavLinks vertical={true} />
    </div>
</div>

<style>
    .wrapper {
        isolation: isolate;
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
        
        padding: 2rem;
        background-color: rgba(255, 255, 255, 1);
        height: 100vh;
    }

    .slideover.open {
        opacity: 1;
        pointer-events: all;
        transform: translateX(0);
    }
</style>