const projects = {
  namespaced: true,
  state() {
    return {
      projects: []
    }
  },
  mutations: {
    setProjects(state, newProjects) {
      state.projects = newProjects
    }
  },
  actions: {
    setProjects({ commit }, newProjects) {
      commit('setProjects', newProjects)
    }
  },
  getters: {
    projects(state) {
      return state.projects
    }
  }
}

export default projects
