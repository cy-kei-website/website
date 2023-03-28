<script lang="ts">
    import { adminUser } from "../../firebase/stores";
    import LoginForm from "../../components/admin/LoginForm.svelte";
    import PageStructure from "../../components/PageStructure.svelte";
    import NavLink from "../../components/utils/NavLink.svelte";

    $: title = $adminUser ? `Admin (${$adminUser.email})` : "Admin (login)";

</script>

<PageStructure layout="content-only" title={title}>
    {#if $adminUser}
        <div>
            <nav>
                <NavLink href="/admin">Analytics</NavLink>
                <NavLink href="/admin/bio">Edit Bios</NavLink>
                <NavLink href="/admin/socialmedias">Edit Social Medias</NavLink>
                <NavLink href="/admin/concerts">Edit Concerts</NavLink>
                <NavLink href="/admin/videos">Edit Videos</NavLink>
                <NavLink href="/admin/gallery">Edit Gallery</NavLink>
                <NavLink href="/admin/postgenerator">Post generator</NavLink>
            </nav>

            <slot />
        </div>
    {:else}
        <div class="center">
            <LoginForm />
        </div>
    {/if}
</PageStructure>

<style>
    .center {
        margin: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    nav {
        display: flex;
        gap: 1rem;
    }
</style>