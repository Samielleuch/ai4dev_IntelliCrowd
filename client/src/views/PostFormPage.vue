<template>
  <div class="background">
    <v-row justify="center">
      <v-col>
        <PostForm />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import PostForm from "../components/PostForm";
export default {
  name: "PostFormPage",
  components: {
    PostForm
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
