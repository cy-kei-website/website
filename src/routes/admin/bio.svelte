<script lang="ts">

    import { onMount } from "svelte";
    import { doc, getDoc, updateDoc, type CollectionReference, type DocumentReference } from "firebase/firestore";
    
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

    onMount(async () => {
        const { biosCollection }  = await import("../../firebase");
        biosCol = biosCollection;

        shortReference = doc(biosCol, "short");
        fullReference = doc(biosCol, "full");

        const shortSnap = await getDoc(shortReference);
        short = shortSnap.data() as MultilingualBio;
    });

    async function saveShort() {
        if (!shortReference) return;
        await updateDoc(shortReference, {
            ...short
        });
    }

</script>

<div>
    <h2>Edit Biographies</h2>

    <form on:submit|preventDefault={saveShort}>
        <label for="short-en">Short bio (en)</label>
        <textarea name="short-en" id="short-en" cols="30" rows="10" bind:value={short.en}></textarea>
        <button class="cta-inverted">Save</button>
    </form>

</div>