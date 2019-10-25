<template>
  <b-media tag="li">
    <h5 class="mt-0 mb-1">{{ title }}</h5>
    <p class="mb-0">{{ description }}</p>
    <p class="mb-0">
      Lien :
      <a :href="link">{{ link }}</a>
    </p>
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
