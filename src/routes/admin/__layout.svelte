<script lang="ts">
    import { adminUser } from "../../firebase/stores";
    import LoginForm from "../../components/admin/LoginForm.svelte";
    import PageStructure from "../../components/PageStructure.svelte";
    import NavLink from "../../components/NavLink.svelte";

    $: title = $adminUser ? `Admin (${$adminUser.email})` : "Admin (login)";

</script>

<PageStructure layout="content-only" title={title}>
    {#if $adminUser}
        <div>
            <nav>
                <NavLink href="/admin">Analytics</NavLink>
                <NavLink href="/admin/bio">Edit Bios</NavLink>
                <NavLink href="/admin/concerts">Edit Concerts</NavLink>
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
</style>