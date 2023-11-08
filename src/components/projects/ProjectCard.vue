<script>
export default {
  data() {
    return {};
  },

  props: {
    project: Object,
  },
};
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h4 class="card-title">{{ project.title }}</h4>
        <h5
          class="card-subtitle badge"
          :style="{ backgroundColor: project.type.color }"
        >
          {{ project.type.label }}
        </h5>
        <div>
          <p
            class="badge rounded-pill mt-2 mx-1"
            v-for="technology in project.technologies"
            :style="{ backgroundColor: technology.color }"
          >
            {{ technology.label }}
          </p>
        </div>
      </div>
      <div class="card-footer">
        <router-link
          :to="{ name: 'project-detail', params: { id: project.id } }"
          class="btn btn-outline-primary"
          >Vedi</router-link
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
