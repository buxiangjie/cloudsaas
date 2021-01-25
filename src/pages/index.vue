<template>
  <el-container style="height: 500px">
    <el-aside width="200px">
      <el-menu unique-opened>
        <el-submenu index="1">
          <template slot="title">测试</template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link to="/index/one">测试用例</router-link>
            </el-menu-item>
            <el-menu-item>
              <router-link to="/index/login">测试计划</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">工具</template>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              <el-link href="http://192.168.8.66:8085">测试计划</el-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right">
        <i class="el-icon-loading"></i>
        <span>header</span>
      </el-header>

      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>

export default {
  name: "index",
  data() {
    return {
      dd: [
        {
          id: 1,
          name: 'su',
          addre: 'bj'
        },
        {
          id: 2,
          name: 'cu',
          addre: 'bz'
        }
      ],
    }
  },
}
</script>

<style scoped>

</style>
