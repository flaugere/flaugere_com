<template>
  <ul class="list-unstyled">
    <Project
      v-for="project in projects"
      :id="project.id"
      :key="project.id"
      :title="project.title"
      :description="project.description"
      :link="project.link"
    ></Project>
  </ul>
</template>

<script>
import PreviewVue from './Preview.vue'

export default {
  components: {
    Project: PreviewVue
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>
