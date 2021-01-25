<template>
  <div>
    <el-container>
      <!--      <el-aside width="250px">-->
      <Navber></Navber>
      <!--      </el-aside>-->

      <el-container style="height: 1500px">
        <el-header style="text-align: right">
          <i class="el-icon-loading"></i>
          <span>header</span>
        </el-header>

        <el-main>
          <el-scrollbar>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Navber from '../components/navBar'

export default {
  name: "index",
  components: {
    Navber
  },
  data() {
    return {
      elUnderLine: false,
    }
  },
}
</script>

<style scoped>
.el-main {
  background-color: #E9EEF3;
  height: 0;
  flex-grow: 1;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
</style>
