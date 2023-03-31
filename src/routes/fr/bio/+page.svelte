<script lang="ts">
    import PageStructure from "../../../components/PageStructure.svelte";
    import { bios } from "../../../stores/bios";
</script>

<PageStructure title="Biographie" imgName="bio-extrapic.jpg">
    <p class="line-breaks">{ $bios["fr"].biography.full }</p>
</PageStructure>