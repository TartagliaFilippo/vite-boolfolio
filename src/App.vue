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

      pagination: {
        links: null,
      },
    };
  },

  components: { ProjectList },

  methods: {
    fetchProjects(uri = this.api.baseUrl + "projects") {
      axios.get(uri).then((response) => {
        this.projects = response.data.projects.data;
        this.pagination.links = response.data.projects.links;
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
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li
          class="page-item my-3"
          @click="fetchProjects(link.url)"
          v-for="link in pagination.links"
        >
          <a class="page-link" v-html="link.label" href="#"></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss"></style>
