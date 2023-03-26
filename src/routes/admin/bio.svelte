<script lang="ts">

    import { onMount } from "svelte";
    import { doc, getDoc, updateDoc, type CollectionReference, type DocumentReference } from "firebase/firestore";
    import LoadingSpinner from "../../components/utils/LoadingSpinner.svelte";
    
    let biosCol: CollectionReference | null = null;
    let shortReference: DocumentReference | null = null;
    let fullReference: DocumentReference | null = null;

    interface MultilingualBio {
        en: string;
    }

    let short: MultilingualBio = {
        en: ""
    };
    let full: MultilingualBio = {
        en: ""
    };

    let shortSaving: boolean = false;
    let fullSaving: boolean = false;

    onMount(async () => {
        const { biosCollection }  = await import("../../firebase");
        biosCol = biosCollection;

        shortReference = doc(biosCol, "short");
        fullReference = doc(biosCol, "full");

        const shortSnap = await getDoc(shortReference);
        short = shortSnap.data() as MultilingualBio;

        const fullSnap = await getDoc(fullReference);
        full = fullSnap.data() as MultilingualBio;
    });

    async function saveShort() {
        if (!shortReference) return;

        shortSaving = true;
        await updateDoc(shortReference, {
            ...short
        });
        shortSaving = false;
    }

    async function saveFull() {
        if (!fullReference) return;

        fullSaving = true;
        await updateDoc(fullReference, {
            ...full
        });
        fullSaving = false;
    }

</script>

<div>
    <h2>Edit Biographies</h2>

    <form on:submit|preventDefault={saveShort}>
        <h3>Short bios</h3>
        <label for="short-en">Short bio (en)</label>
        <textarea name="short-en" id="short-en" cols="30" rows="10" bind:value={short.en}></textarea>
        <button class="cta-inverted">Save</button>

        {#if shortSaving}
            <div class="saving-backdrop">
                <LoadingSpinner message="Saving short bio" />
            </div>
        {/if}
    </form>

    <form on:submit|preventDefault={saveFull}>
        <h3>Full bios</h3>
        <label for="full-en">Full bio (en)</label>
        <textarea name="full-en" id="full-en" cols="30" rows="30" bind:value={full.en}></textarea>
        <button class="cta-inverted">Save</button>

        {#if fullSaving}
            <div class="saving-backdrop">
                <LoadingSpinner message="Saving full bio" />
            </div>
        {/if}
    </form>
</div>

<style>

    form {
        position: relative;
    }
    label, button {
        margin-block: 0.5rem;
    }

    textarea {
        padding: 1rem;
        width: 100%;
        box-sizing: border-box;
    }

    .saving-backdrop {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;

        backdrop-filter: blur(5px);
        background-color: rgba(0, 0, 0, 0.1);

        animation: opacity 0.25s ease-out forwards;
    }

    @keyframes opacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>