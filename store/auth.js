export const state = () => ({
  admin_user: null
})

export const mutations = {
  setAdminUser (state, admin_user) {
    state.admin_user = admin_user
  }
}

export const actions = {

  register: async function ({ commit }, {
    name,
    email,
    password,
    password_confirmation
  }) {
    const response = await this.$axios.$post('/api/register', {
        name,
        email,
        password,
        password_confirmation
      })
      .catch(err => {
        console.log(err)
      })
  },

  login: async function ({ commit }, { email, password }) {
    const response = await this.$axios.$post('/api/login', { email, password })
      .catch(err => {
        console.log(err)
      })
    commit('setAdminUser', response)
  },

  logout: async function ({ commit }) {
    const response = await this.$axios.$post('/api/logout')
      .catch(err => {
        console.log(err)
      })
    console.log(response);
    commit('setAdminUser', null)
  },

}
