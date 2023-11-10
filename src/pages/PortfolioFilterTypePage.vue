<script>
import axios from "axios";
import { store } from "../data/store";

import ProjectList from "../components/projects/ProjectList.vue";

export default {
  data() {
    return {
      types: null,
    };
  },

  components: { ProjectList },

  methods: {
    fetchTypes(apiUri = null) {
      apiUri =
        store.api.baseUrl +
        "portfolio-filter-type/" +
        this.$route.params.type_id;

      axios.get(apiUri).then((response) => {
        this.types = response.data.type;
      });
    },
  },

  created() {
    this.fetchTypes();
  },
};
</script>

<template>
  <h1>
    Progetto filtrato per
    <span
      v-if="types"
      class="card-subtitle badge"
      :style="{ backgroundColor: types.color }"
      >{{ types.label }}</span
    >
  </h1>
  <ProjectList :key="types.id" :type_id="types.id" v-if="types" />
</template>

<style lang="scss" scoped></style>
