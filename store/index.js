import axios from 'axios'
import projects from './projects/index'

const store = {
  modules: {
    projects
  },
  actions: {
    nuxtServerInit({ commit }) {
      return axios
        .get('https://flaugere84140.firebaseio.com/projects.json')
        .then((response) => {
          const newProjects = []
          for (const key in response.data) {
            newProjects.push({ ...response.data[key], id: key })
          }
          commit('projects/setProjects', newProjects)
        })
    }
  }
}

export default store
