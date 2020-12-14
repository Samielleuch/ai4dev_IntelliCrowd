<template>
  <v-hover v-slot:default="{ hover }">
    <v-card width="400" class="mx-auto rounded" :elevation="hover ? 16 : 2">
      <v-list-item>
        <v-list-item-avatar color="#012116"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline" style="color: #977C1E"
            >Agriculture Project</v-list-item-title
          >
          <v-list-item-subtitle style="color: black"
            >published by Sami Elleuch</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-img src="../assets/imag.jpg" height="194"></v-img>

      <v-card-text style="color: black"
        >We are developing a website that facilitates the agriculture process.
        <br />
        Category : Agriculture
      </v-card-text>
            <v-row justify="center" align="center">
<v-col align="center">
      <v-card-text style="color: #030a05 ;"  class="Subtext"
        >
        Success Score :   <span style="color: #11361a ;" >70% </span>
      </v-card-text>
</v-col>

      </v-row>

      <v-card-actions>
        <v-btn text color="#977C1E" to="/ProjectPage">
          read more
        </v-btn>
        <v-spacer></v-spacer>
        <h3>7500/10000 DT</h3>
        <v-spacer></v-spacer>
        <v-btn icon>
          <i class="fa fa-heart" aria-hidden="true" style="width: 200px"></i>
        </v-btn>
      </v-card-actions> </v-card
  ></v-hover>
</template>
<script>
export default {
  name: "Espaces",
  data() {
    return {};
  }
};
</script>

<style scoped>
.rounded {
  border-radius: 10% !important;
}
.Subtext {
  font-family: Quicksand;
  font-style: normal !important;
  font-weight: bold !important;
  font-size: 18px !important;
}
</style>
