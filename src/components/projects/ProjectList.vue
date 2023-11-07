<script>
import ProjectCard from "./ProjectCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      api: {
        baseUrl: "http://localhost:8000/api/",
      },

      projects: [],

      pagination: {
        links: null,
      },
    };
  },

  components: { ProjectCard },

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
    <h2>ProjectList</h2>
    <div class="row row-cols-3 g-4">
      <ProjectCard v-for="project in projects" :project="project" />
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
