<template>
  <v-row align-content="center" class="fill-height" justify="start">
    <v-col class=" mt-n12 customposition" cols=" 12 " md="6" justify="end">
      <h1 class=" HeadingText mt-n12 pt-0">
        Fin
        <strong style="color: #E0B47F;"> IT</strong>
      </h1>
      <h1 class="text-left Subtext " style="color: #E0B47F;">
        Our Newest Crowd Sourcing / Crowd funding Solution.
      </h1>
    </v-col>
    <v-col
      align-self="center"
      class="text-center  d-none d-md-flex "
      cols=" 12 "
      md="6"
    >
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HomePageBanner",
  data() {
    return {};
  }
};
</script>

<style scoped>
.HeadingText {
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 96px;
  line-height: 120px;
  color: #ffffff;
}

.Subtext {
  font-family: Quicksand;
  font-style: normal !important;
  font-weight: bold !important;
  font-size: 18px !important;
  line-height: 22px !important;
  color: #ffffff;
}

.btnHome1 {
  font-family: Open Sans !important;
  font-style: normal !important;
  font-weight: 800 !important;
  font-size: 24px !important;
  line-height: 33px !important;
  color: #0d3232 !important;
  border: 3px solid #0d3232 !important;
}

.btnHome2 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;

  color: #ffffff;
}
.customposition {
  margin-left: 1000px !important;
}
</style>
