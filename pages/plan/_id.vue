<template>
  <div class="container">
    <h1>プラン詳細</h1>

    <div>
      <p>プラン名：{{plan['plan_name']}}</p>
      <ul>
        <li v-for="outline_list in plan['outline_list']" :key="outline_list.id" class="mt-2 c-Plan">
          <div>
            <p>大枠：{{outline_list['outline_name']}}</p>
          </div>
          <ul>
            <li v-for="category_list in outline_list['category_list']" :key="category_list.id" class="mt-2 c-Plan">
              <div>
                <p>カテゴリー：{{category_list['category_name']}}</p>
              </div>

              <ul>
                <li v-for="item_list in category_list['item_list']" :key="item_list.id" class="mt-2 c-Plan">
                  <p>アイテム：{{item_list}}</p>
                </li>
              </ul>

            </li>
          </ul>

        </li>

      </ul>
    </div>
    <button @click="test">test</button>
  </div>
</template>

<script>
export default {
  middleware: 'not_logined_admin_user',
  data () {
    return {
      plan: '',
    }
  },
  methods: {
    displayPlanDetail: async function (key) {
      var plan = await this.$store.dispatch('plan/show',{
        id: key,
      })
      this.$router.push('/plan')
    },
    test: function () {
      alert(this.plan.plan_name);
    }
  },

  async asyncData({$axios, params, req}) {

    let { data } = await $axios.get('http://localhost:8888/api/plan/' + params.id);
    return { plan: data }
  },
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
