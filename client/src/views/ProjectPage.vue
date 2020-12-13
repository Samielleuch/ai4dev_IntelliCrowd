<template>
  <div class="background">
    <v-row justify="center">
      <v-col>
        <project />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Project from "../components/Project";
export default {
  name: "ProjectPage",
  components: {
    Project
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
