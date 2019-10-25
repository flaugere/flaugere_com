<template>
  <div>
    <ProjectList :projects="projects" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ProjectList from '~/components/Project/List'

export default {
  components: {
    ProjectList
  },
  computed: {
    ...mapState('projects', {
      projects: (state) => state.projects
    })
  },
  mounted() {},
  methods: {
    ...mapActions('projects', ['setProjects'])
  }
}
</script>
