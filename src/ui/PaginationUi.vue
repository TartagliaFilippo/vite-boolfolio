<script>
export default {
  props: { pagination: Array },

  emits: ["change-page"],
};
</script>

<template>
  <nav aria-label="..." class="my-3">
    <ul class="pagination justify-content-center">
      <li
        class="page-item"
        v-for="link in pagination"
        :class="{ disabled: !link.url }"
        @click="$emit('change-page', link.url)"
      >
        <a
          class="page-link"
          :class="{ active: link.active }"
          href="#"
          v-html="link.label"
        ></a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
