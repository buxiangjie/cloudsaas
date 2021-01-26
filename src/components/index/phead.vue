<template>
  <el-page-header @back="goBack" :content="cont" title="返回">
  </el-page-header>
</template>

<script>
export default {
  name: "phead",
  props:{
    cont: String
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
