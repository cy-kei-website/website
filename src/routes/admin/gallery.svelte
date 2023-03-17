<script lang="ts">

    import { onMount } from "svelte";
    import { addDoc, type CollectionReference, type DocumentReference } from "firebase/firestore";
    import GalleryPicture from "../../components/admin/GalleryPicture.svelte";
    
    let galleryCol: CollectionReference | null = null;

    let picturesRefs: DocumentReference[] = [];

    let singleEditors: GalleryPicture[] = [];

    onMount(async () => {
        const { galleryCollection, getPictures }  = await import("../../firebase");
        galleryCol = galleryCollection;
        picturesRefs = (await getPictures()).docs.map((d) => d.ref);
    });

    async function addConcert() {
        if (!galleryCol) return;

        const docRef = await addDoc(galleryCol, {
            url: "/imgs/gallery_default.jpg",
            thumbnailUrl: "/imgs/gallery_default.jpg",
            copyright: "Something similar",
            uploadedDate: new Date()
        });

        picturesRefs = [...picturesRefs, docRef];
    }

    async function save() {
        const promises = [];

        for (const editor of singleEditors) {
            promises.push(editor.save());
        }

        return Promise.all(promises);
    }

    function onDelete(event: any) {
        picturesRefs = picturesRefs.filter((ref) => ref !== event.detail.ref);
    }

</script>

<div>
    <h2>Edit Gallery</h2>

    <div class="toolbar">
        <button on:click={addConcert}>Add concert</button>
        <button on:click={save}>Save</button>
    </div>

    {#each picturesRefs as picture, i}
        <GalleryPicture pictureRef={picture} bind:this={singleEditors[i]} on:deleted={onDelete} />
    {/each}
</div>

<style>
    button {
        margin-block: 0.5rem;
    }
</style>