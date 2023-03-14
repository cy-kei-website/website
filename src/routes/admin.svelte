<script lang="ts">
    import { adminUser } from "../firebase/stores";
    import LoginForm from "../components/admin/LoginForm.svelte";
    import ConcertListEditor from "../components/admin/ConcertListEditor.svelte";
    import PageStructure from "../components/PageStructure.svelte";

    $: title = $adminUser ? `Admin (${$adminUser.email})` : "Admin (login)";

</script>

<PageStructure layout="content-only" title={title}>
    {#if $adminUser}
        <div>
            <h2>Concerts</h2>
            <ConcertListEditor />
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