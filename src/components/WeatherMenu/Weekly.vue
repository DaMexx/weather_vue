<template>
  <div class="container">
    <slot name="weather-item"></slot>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  place-content: center;
  gap: 10px;
  padding: 30px 0;
}
</style>
