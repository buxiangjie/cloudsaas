<template>
  <div>
    <h1>{{ sit }}</h1>
    <h1>{{ url }}</h1>
    <h1>{{ alexa }}</h1>
    <h1>{{ found() }}</h1>
    <router-link to="/one">
      <el-button type="primary">one</el-button>
    </router-link>
    <router-link to="/">
      <el-button type="primary">返回首页</el-button>
    </router-link>
  </div>
</template>

<script>
export default{
  el: '#els',
  data() {
    return {
      sit: '测试',
      url: 'www.cloudloan.com',
      alexa: "11111"
    }
  },
  methods: {
    found: function () {
      return this.alexa + this.sit;
    }
  }
}
</script>

<style scoped>

</style>
