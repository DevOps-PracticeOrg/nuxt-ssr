<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">email</label>
        <input type="text" id="email" v-model="email" />
      </div>
      <div>
        <label for="password">password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
export default {
  middleware: 'logined_admin_user',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: async function () {
      await this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password
      })
      this.$router.push('/admin')
    }
  }
}
</script>
