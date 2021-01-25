<template>
  <div>
<!--    <el-menu unique-opened :collapse="!isCollapse">-->
      <el-radio-group v-model="isCollapse">
        <el-radio-button :label="true">展开</el-radio-button>
        <el-radio-button :label="false">收起</el-radio-button>
      </el-radio-group>
      <el-menu class="el-menu-vertical-demo" :collapse="!isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">系统接口</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="clickBusiInterface">业务接口</el-menu-item>
            <el-menu-item index="1-2" @click="clickTestPlan">测试计划</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">工具</span>
            </template>
            <el-menu-item index="2-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
<!--    </el-menu>-->
  </div>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {
      isCollapse: true
    }
  },
  methods: {
    clickBusiInterface() {
      this.$router.push('/index/one').catch(err => err);
    },
    clickTestPlan() {
      this.$router.push('/index/login').catch(err => err);
    }
  }
}
</script>


<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
