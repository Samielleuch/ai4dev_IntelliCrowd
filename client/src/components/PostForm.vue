<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :elevation="hover ? 16 : 2"
      class="mx-auto form"
      height="1170"
      width="900"
    >
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        class="forminside"
        enctype="multipart/form-data"
      >
        <v-row>
          <v-col>
            <v-label><h3>Project's title :</h3></v-label>
            <v-text-field
              v-model="titre"
              :rules="titreRules"
              required
            ></v-text-field></v-col
        ></v-row>
        <v-row>
          <v-col>
            <v-label><h3>Project's category :</h3></v-label>
            <v-select
              v-model="type"
              :items="types"
              class="field"
              required
              :rules="typeRules"
            ></v-select> </v-col
        ></v-row>
        <v-row>
          <v-col>
            <v-label><h3>Project's description :</h3></v-label>
            <v-textarea
              background-color="grey lighten-2"
              v-model="description"
              class="field"
              full-width
              outlined
              :rules="descriptionRules"
              required
            ></v-textarea> </v-col
        ></v-row>
        <v-row>
          <v-col>
            <v-label><h3>City :</h3></v-label>
            <v-text-field v-model="city" required></v-text-field></v-col
        ></v-row>
        <v-row>
          <v-col>
            <v-label><h3>Linkedin Page :</h3></v-label>
            <v-text-field v-model="inpage" required></v-text-field></v-col
        ></v-row>
        <v-row
          ><v-col>
            <input
              type="file"
              name="images"
              v-on:change="onImageSelected"
              label="File input"
              required
            /> </v-col
        ></v-row>
        <v-row>
          <v-col>
            <v-label><h3>Funds goal :</h3></v-label>
            <v-text-field
              v-model="prix"
              :rules="prixRules"
              required
            ></v-text-field></v-col
        ></v-row>
        <v-row>
          <v-col cols="12" lg="6">
            <v-menu
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  prepend-icon="fa fa-calendar"
                  v-model="computedDateFormatteddebut"
                  label="Launch"
                  persistent-hint
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="datt"
                required
                no-title
                @input="menu1 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" lg="6">
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  prepend-icon="fa fa-calendar"
                  v-model="computedDateFormattedfin"
                  label="deadline"
                  persistent-hint
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="datefin"
                no-title
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-row
          ><v-col align="center">
            <v-btn
              :disabled="!valid"
              :loading="loading"
              rounded
              width="180px"
              class="btn black"
              @click="validate"
            >
              Go for Funds
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "PostForm",
  data() {
    return {
      valid: false,
      loading: false,
      titre: "",
      description: "",
      type: "",
      images: null,
      prix: "",
      adress: "",
      ville: "",
      types: ["immobilier", "batiment", "agriculture", "artisanat", "..."],
      titreRules: [v => !!v || "le titre est demandé"],
      descriptionRules: [v => !!v || "la description est demandée"],
      typeRules: [v => !!v || "le type du projet est demandé"],
      prixRules: [v => !!v || "le prix est demandé"],
      datedebut: new Date().toISOString().substr(0, 10),
      datefin: new Date().toISOString().substr(0, 10),
      menu1: false,
      menu2: false
    };
  }
};
</script>
<style scoped>
h3 {
  color: #977c1e;
}
.btn {
  margin-top: 10px;
  justify-content: center;
  color: #977c1e;
}
.field {
  margin-top: 10px;
  margin-bottom: 20px;
}
.forminside {
  padding-top: 30px;
  padding-right: 20px;
  padding-left: 20px;
}
.form {
  margin-top: 25px;
  z-index: 1 !important;
}
</style>
