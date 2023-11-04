<script>
import ProjectList from "./components/projects/ProjectList.vue";
import axios from "axios";

import { store } from "./data/store";

export default {
  data() {
    return {
      projects: [],

      api: {
        baseUrl: "http://localhost:8000/api/",
      },
    };
  },

  components: { ProjectList },

  methods: {
    fetchProjects(uri = this.api.baseUrl + "projects") {
      axios.get(uri).then((response) => {
        this.projects = response.data.projects.data;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container">
    <h1>Sono un titolo</h1>
    <div class="section-list">
      <ProjectList :projects="projects" />
    </div>
  </div>
</template>

<style lang="scss"></style>
