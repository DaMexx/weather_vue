<template>
  

</template>

<script setup>
import { ref } from 'vue'

export default {
  props: {
    src: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const svg = ref('')

    // загрузка SVG-изображения из файла
    const loadSvg = async () => {
      try {
        const response = await fetch(props.src)
        svg.value = await response.text()
      } catch (error) {
        console.error(error)
      }
    }

    // загрузка SVG-изображения при монтировании компонента
    loadSvg()

    return {
      svg
    }
  }
}
</script>