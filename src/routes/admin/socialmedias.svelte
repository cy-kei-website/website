<script lang="ts">

    import { onMount } from "svelte";
    import { doc, getDoc, updateDoc, type CollectionReference, type DocumentReference } from "firebase/firestore";
    import LoadingSpinner from "../../components/utils/LoadingSpinner.svelte";
    
    let socialMediasCol: CollectionReference | null = null;
    let handlesReference: DocumentReference | null = null;

    interface SocialMediasHandles {
        facebook: string;
        instagram: string;
        twitter: string;
        youtube: string;
    }

    let handles: SocialMediasHandles = {
        facebook: "",
        instagram: "",
        twitter: "",
        youtube: "",
    };

    let saving: boolean = false;

    onMount(async () => {
        const { socialMediasCollection }  = await import("../../firebase");
        socialMediasCol = socialMediasCollection;

        handlesReference = doc(socialMediasCol, "handles");

        const handlesSnap = await getDoc(handlesReference);
        handles = handlesSnap.data() as SocialMediasHandles;
        console.log(handles);
    });

    async function save() {
        if (!handlesReference) return;

        saving = true;
        await updateDoc(handlesReference, {
            ...handles
        });
        saving = false;
    }

</script>

<div>
    <h2>Edit Social Medias Handles</h2>

    <form on:submit|preventDefault={save}>
        <label for="youtube">YouTube</label>
        <input type="text" name="youtube" id="youtube" bind:value={handles.youtube} />
        
        <label for="facebook">Facebook</label>
        <input type="text" name="facebook" id="facebook" bind:value={handles.facebook} />
        
        <label for="instagram">Instagram</label>
        <input type="text" name="instagram" id="instagram" bind:value={handles.instagram} />
        
        <label for="twitter">Twitter</label>
        <input type="text" name="twitter" id="twitter" bind:value={handles.twitter} />

        <button class="cta-inverted">Save</button>

        {#if saving}
            <div class="saving-backdrop">
                <LoadingSpinner message="Saving short bio" />
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