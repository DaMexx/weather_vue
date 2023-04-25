<template>
  <span>
    <svg :class="svgClass" :width="width" :height="height" viewBox="0 0 24 24">
      <path :d="path" />
    </svg>
  </span>
</template>

<script setup lang="ts">
defineProps({
  svgClass: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "24px",
  },
  height: {
    type: String,
    default: "24px",
  },
  path: {
    type: String,
    required: true,
  },
});
</script>
