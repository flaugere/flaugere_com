<template>
  <b-media tag="li">
    <template v-slot:aside>
      <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
    </template>
    <h5 class="mt-0 mb-1">{{ title }}</h5>
    <p class="mb-0">{{ id }}</p>
    <p class="mb-0">{{ description }}</p>
    <p class="mb-0">{{ link }}</p>
  </b-media>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>
