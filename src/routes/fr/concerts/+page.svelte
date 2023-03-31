<script lang="ts">
    import PageStructure from "../../../components/PageStructure.svelte";
    import SmartConcertList from "../../../components/concerts/SmartConcertList.svelte";
</script>

<PageStructure title="Concerts" bgImgName="concerts_bg.jpg" bgPositionX="0" bgPositionY="700px" bgPositionMobileX="60%" bgPositionMobileY="100%" imgName="concerts-extrapic.jpg">
    <h2>Prochains concerts</h2>
    <SmartConcertList mode="upcoming" />

    <h2>Concerts passés</h2>
    <SmartConcertList mode="past" />
</PageStructure>