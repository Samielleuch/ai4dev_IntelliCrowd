<template>
  <div class="background">
    <v-toolbar dark color="#012116" style="margin-bottom: 35px">
      <v-row justify="center" style="padding-top: 30px"
        ><v-col sm="2" style="padding-top: 30px">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="Date"
                prepend-icon="fa fa-calendar"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title @input="menu1 = false">
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" sm="2" style="padding-top: 30px"
          ><v-select
            v-model="steps"
            :items="[
              'immobilier',
              'batiment',
              'agriculture',
              'artisanat',
              '...'
            ]"
            label="Project Category"
          ></v-select
        ></v-col>
        <v-col cols="12" sm="2" style="padding-top: 30px"
          ><v-select
            v-model="steps"
            :items="['Tunis', 'Bizerte', 'Sousse', '...']"
            label="City"
          ></v-select
        ></v-col>
        <v-col sm="4">
          <v-text-field
            v-model="ricerca"
            @keyup="updateData()"
            label="Search"
            append-icon="fas fa-search"
            outlined
          ></v-text-field></v-col
      ></v-row>
    </v-toolbar>
    <v-row class="mx-12 my-7">
      <v-col md="4" sm="11"> <Espace /></v-col>
      <v-col md="4" sm="11"> <Espaces /></v-col>
      <v-col md="4" sm="11"> <Espac /></v-col>
    </v-row>
    <v-row class="mx-12 my-7">
      <v-col md="4" sm="11" flex="4"> <Espaces /></v-col>
      <v-col md="4" sm="11" flex="4"> <Espac /></v-col>
      <v-col md="4" sm="11" flex="4"> <Espace /></v-col>
    </v-row>
    <v-row class="mx-12 my-7">
      <v-col md="4" sm="11" flex="4"> <Espac /></v-col>
      <v-col md="4" sm="11" flex="4"> <Espace /></v-col>
      <v-col md="4" sm="11" flex="4"> <Espaces /></v-col>
    </v-row>
    <br />
    <v-pagination length="6"></v-pagination>
    <br />
  </div>
</template>
<script>
import Espace from "../components/Espace";
import Espaces from "../components/Espaces";
import Espac from "../components/Espac";

export default {
  name: "Catalogue",
  components: {
    Espace,
    Espac,
    Espaces
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false
    };
  }
};
</script>

<style scoped>
.background {
  margin-top: -50px;
  padding-top: 65px;
  background-color: #012116;
  height: 110%;
}
</style>
