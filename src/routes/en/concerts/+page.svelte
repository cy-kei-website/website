<script lang="ts">
    import PageStructure from "../../../components/PageStructure.svelte";
    import SmartConcertList from "../../../components/concerts/SmartConcertList.svelte";
</script>

<PageStructure title="Concerts" bgImgName="concerts_bg.jpg" bgPositionX="0" bgPositionY="-75px" bgPositionMobileX="20%" bgPositionMobileY="-150px" imgName="concerts-extrapic.jpg">
    <h2>Upcoming concerts</h2>
    <SmartConcertList mode="upcoming" />

    <h2>Past concerts</h2>
    <SmartConcertList mode="past" />
</PageStructure>