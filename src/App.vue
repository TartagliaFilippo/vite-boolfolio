<script>
import ProjectList from "./components/projects/ProjectList.vue";
import axios from "axios";

export default {
  data() {
    return {};
  },

  components: { ProjectList },
};
</script>

<template>
  <div class="container">
    <h1>Sono un titolo</h1>
    <div class="section-list">
      <ProjectList />
    </div>
  </div>
</template>

<style lang="scss"></style>
