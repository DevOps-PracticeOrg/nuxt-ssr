export const actions = {
   nuxtServerInit: async function ({ commit }, { app }) {

    await app.$axios.$get('/current_admin_user')
      .then(admin_user => commit('auth/setAdminUser', admin_user))
      .catch(() => commit('auth/setAdminUser', null))

    // await app.$axios.$get('/api/plan/index')
    //   .then(plan => commit('plan/setAllPlan', plan))
    //   .catch(() => commit('plan/setAllPlan', null))
  }
}
