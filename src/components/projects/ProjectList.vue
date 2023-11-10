<script>
import ProjectCard from "./ProjectCard.vue";
import PaginationUi from "../../ui/PaginationUi.vue";

import axios from "axios";

import { store } from "../../data/store";

export default {
  data() {
    return {
      projects: [],

      pagination: [],
    };
  },

  components: { ProjectCard, PaginationUi },

  props: { type_id: Number },

  computed: {
    endpoint() {
      return this.type_id
        ? store.api.baseUrl +
            "portfolio-filter-type/" +
            this.$route.params.type_id
        : store.api.baseUrl + "projects";
    },
  },

  methods: {
    fetchProjects(apiUri = this.end) {
      if (!apiUri) {
        apiUri = store.api.baseUrl + "projects";
      }

      axios.get(apiUri).then((response) => {
        this.projects = response.data.projects.data;
        this.pagination = response.data.projects.links;
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
    <PaginationUi :pagination="pagination" @change-page="fetchProjects" />
    <div class="row row-cols-3 g-4">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        :isDetail="false"
      />
    </div>
    <PaginationUi :pagination="pagination" @change-page="fetchProjects" />
  </div>
</template>

<style lang="scss"></style>
