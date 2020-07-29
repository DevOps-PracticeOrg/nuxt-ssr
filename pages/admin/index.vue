<template>
  <div class="container">
    <h1>管理画面へようこそ</h1>
    <div>
      <h1 class="title">
        ssr
      </h1>
      <form  @submit.prevent="createPlan">
        <div>
          <label>プラン名</label>
          <input type="text" v-model="plan['plan_name']">
        </div>
        <ul>
          <li>
            <div>
              <label>大枠</label>
              <input type="text" v-model="plan[0]['outline_name']">
            </div>

            <ul>
              <li>
                <div>
                  <label>カテゴリー</label>
                  <input type="text" v-model="plan[0][0]['category_name']">
                </div>

                <ul>
                  <li>
                    <label>アイテム</label>
                    <input type="text" v-model="plan[0][0][0]">
                  </li>
                  <li>
                    <label>アイテム</label>
                    <input type="text" v-model="plan[0][0][1]">
                  </li>
                  <li>
                    <label>アイテム</label>
                    <input type="text" v-model="plan[0][0][2]">
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <div>
          <button type="submit" class="button--grey" >登録</button>
        </div>
      </form>
      <div class="mt-3">
         <button class="button--grey" v-on:click.prevent="getAllPlan">プラン一覧取得</button>
      </div>
      <ul>
        <li v-for="planDetail in planList" :key="planDetail._id" class="mt-2 c-Plan">
          <div>
            <p><nuxt-link :to="`/plan/${planDetail._id}`">プラン名：{{planDetail.name}}</nuxt-link></p>
          </div>
        </li>
      </ul>
      <div class="links mt-5">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
        <button type="submit" class="button--grey" v-on:click.prevent="logout">Logout</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  middleware: 'not_logined_admin_user',
  data () {
    return {
      plan: {
        plan_name: '',
        0: {
          outline_name: '',
          0: {
            category_name: '',
            0: "",
            1: "",
            2: "",
          }
        }
      },
    }
  },
  methods: {
    logout: async function () {
      await this.$store.dispatch('auth/logout')
      this.$router.push('/admin/login')
    },
    createPlan: async function () {
      await this.$store.dispatch('plan/create', {
        plan: this.plan,
      })
    },
    getAllPlan: async function () {
      var result = await this.$store.dispatch('plan/index')
    },

    displayPlanDetail: async function (key) {
      var plan = await this.$store.dispatch('plan/show',{
        id: key,
      })
      this.$router.push('/plan')
    },

  },

  computed: {
    planList(){
     return this.$store.getters['plan/getPlanList'];
   }
  }
}
</script>
<style scoped>
  ul {
    list-style: none;
  }
  .c-Plan .a-Txt {
    cursor: pointer;
  }
</style>
