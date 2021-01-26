<template>
  <el-menu class="el-menu-vertical-demo" router
           :collapse="!isColl" default-active="1-1" unique-opened
           :default-active="this.$router.path">
    <el-menu-item>
      <div class="logo" style="text-align: left">
        <i class="el-icon-loading"></i>
        <span>接口测试平台</span>
      </div>
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <svg-icon iconClass="interFace"></svg-icon>
        <span slot="title">系统接口</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/index/one">
          <i class="el-icon-location"></i>
          <span slot="title">接口</span>
        </el-menu-item>
        <el-menu-item index="/index/login">
          <i class="el-icon-location"></i>
          <span slot="title">测试计划</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: "nabr",
  props:{
    isColl: Boolean
  },
  data() {
    return {
    }
  },
  methods: {}
}
</script>


<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
