<template>
  <v-hover v-slot:default="{ hover }">
    <v-card width="350" class="mx-auto" :elevation="hover ? 16 : 2">
      <v-list-item>
        <v-list-item-avatar color="#012116"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline" style="color: #977C1E"
            >Tourism Project</v-list-item-title
          >
          <v-list-item-subtitle style="color: black"
            >published by Amira Dridi</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-img src="../assets/image.jpg" height="194"></v-img>

      <v-card-text style="color: black"
        >We are developing a website that helps hotels reach more clients
        through virtual visits.
        <br />
        Category : Tourism
      </v-card-text>

      <v-card-actions>
        <v-btn text color="#977C1E" to="/ProjectPage">
          read more
        </v-btn>
        <v-spacer></v-spacer>
        <h3>25031/26000 DT</h3>
        <v-spacer></v-spacer>
        <v-btn icon>
          <i class="fa fa-heart" aria-hidden="true" style="width: 200px"></i>
        </v-btn>
      </v-card-actions> </v-card
  ></v-hover>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<style scoped></style>
