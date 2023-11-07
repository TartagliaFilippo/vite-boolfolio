<script>
import NavbarUi from "./ui/NavbarUi.vue";
import ProjectList from "./components/projects/ProjectList.vue";

import { store } from "./data/store";

export default {
  data() {
    return {};
  },

  components: { NavbarUi, ProjectList },
};
</script>

<template>
  <div class="container">
    <NavbarUi />
    <router-view></router-view>
    <div class="section-list">
      <ProjectList />
    </div>
  </div>
</template>

<style lang="scss"></style>
