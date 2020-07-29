<template>
  <div class="container">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <div>
        <label for="name">name</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div>
        <label for="email">email</label>
        <input type="text" id="email" v-model="email" />
      </div>
      <div>
        <label for="password">password</label>
        <input type="password" id="password" v-model="password" />
        <input type="password" id="password_confirmation" v-model="password_confirmation" />
      </div>

      <button type="submit">register</button>
    </form>
  </div>
</template>

<script>
export default {
  middleware: 'logined_admin_user',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    }
  },
  methods: {
    register: async function () {
      if (!this.passOK()) {
        alert("確認用パスが不一致です");
        return;
      }
      await this.$store.dispatch('auth/register', {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      })
      // this.$router.push('/')
    },

    passOK: function () {
      var result = false;
      if (this.password === this.password_confirmation) {
        result = true;
      }
      return result;
    }
  }
}
</script>
