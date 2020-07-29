export const state = () => ({
  planList: null
})

export const mutations = {
  setAllPlan (state, planList) {
    state.planList = planList
  }
}

export const actions = {

  create: async function ({ commit }, { plan }) {
    const response = await this.$axios.$post('/api/plan/create', { plan })
      .catch(err => {
        console.log(err)
      })
  },

  index: async function ({ commit }) {
    const response = await this.$axios.$get('/api/plan')
      .catch(err => {
        console.log(err)
      })
    commit('setAllPlan', response)
    return response;
  },

  show: async function ({ commit }, {id}) {
    const response = await this.$axios.$get('/api/plan/' + id)
      .catch(err => {
        console.log(err)
      })
    return response;
  },

}


export const getters = {
  getPlanList:  state => {
    return state.planList;
  }
}
