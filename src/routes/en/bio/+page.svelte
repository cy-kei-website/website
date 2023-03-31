<script lang="ts">
    import PageStructure from "../../../components/PageStructure.svelte";
    import { bios } from "../../../stores/bios";
</script>

<PageStructure title="Biography" imgName="bio-extrapic.jpg">
    <p class="line-breaks">{ $bios["en"].biography.full }</p>
</PageStructure>