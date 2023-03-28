<script lang="ts">

    import { onMount } from "svelte";
    import { addDoc, type CollectionReference, type DocumentReference } from "firebase/firestore";
    import type { Video } from "../../../stores/videos";
    import VideoEditor from "../../../components/admin/VideoEditor.svelte";
    
    let videosCol: CollectionReference | null = null;

    let videosRefs: DocumentReference[] = [];

    let singleEditors: VideoEditor[] = [];

    onMount(async () => {
        const { videosCollection, getVideos }  = await import("../../../firebase");
        videosCol = videosCollection;
        videosRefs = (await getVideos()).docs.map((d) => d.ref);
    });

    async function addVideo() {
        if (!videosCol) return;

        const docRef = await addDoc(videosCol, {
            youtubeHandle: "dQw4w9WgXcQ",
            title: "",
            addedDate: new Date()
        } as Video);

        videosRefs = [...videosRefs, docRef];
    }

    async function save() {
        const promises = [];

        for (const editor of singleEditors) {
            promises.push(editor.save());
        }

        return Promise.all(promises);
    }

    function onDelete(event: any) {
        videosRefs = videosRefs.filter((ref) => ref !== event.detail.ref);
    }

</script>

<div>
    <h2>Edit Videos</h2>

    <div class="toolbar">
        <button on:click={addVideo}>Add video</button>
        <button on:click={save}>Save</button>
    </div>

    {#each videosRefs as picture, i}
        <VideoEditor videoRef={picture} bind:this={singleEditors[i]} on:deleted={onDelete} />
    {/each}
</div>

<style>
    button {
        margin-block: 0.5rem;
    }
</style>