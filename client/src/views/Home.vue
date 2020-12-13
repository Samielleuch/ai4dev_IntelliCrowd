<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-img
          class="pt-0 mt-n12"
          src="@/assets/Background.png"
          max-height="900"
        >
          <HomePageBanner />
        </v-img>
        <v-img class="mt-n2 mb-n12 pb-0" src="@/assets/mask.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <h1 class="HeaderTitletext">Recommended Fundraisers</h1>
      </v-col>
    </v-row>
    <v-row class="mt-0 mx-12 text-center">
      <v-col class="mt-0 pt-0" cols="12" md="4">
        <Espace />
      </v-col>
      <v-col class="mt-0 pt-0" cols="12" md="4">
        <Espaces />
      </v-col>
      <v-col class="mt-0 pt-0" cols="12" md="4">
        <Espac />
      </v-col>
    </v-row>
  </div>
</template>
<script>
// @ is an alias to /src
import HomePageBanner from "@/components/HomePageBanner";
import Espace from "@/components/Espace";
import Espaces from "@/components/Espaces";
import Espac from "@/components/Espac";

export default {
  name: "Home",
  components: {
    HomePageBanner,
    Espace,
    Espaces,
    Espac
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.HeaderTitletext {
  margin-top: -20px;
  margin-bottom: 20px;
  font-family: Quicksand !important;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
}
.stepsHeader {
  font-family: Quicksand !important;
}
.stepBigText {
  margin-top: 53px;
  font-family: Quicksand !important;
  font-style: normal !important;
  font-weight: bold !important;
  font-size: 36px !important;
  line-height: 45px !important;
  /* identical to box height */

  color: #382717;
}
.stepSmallText {
  font-family: Quicksand;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;

  color: #000000;
}
.step1 {
  font-family: Cairo;

  margin-right: 20%;
}

.step2 {
  font-family: Cairo;
}

.step3 {
  font-family: Cairo;

  margin-left: 20%;
}

@media only screen and (max-width: 958px) {
  .step1 {
    margin-right: 0%;
    margin-bottom: 20px;
  }

  .step3 {
    font-family: Cairo;
    margin-left: 0%;
    margin-top: 20px;
  }
}
</style>
