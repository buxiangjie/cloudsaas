<template>
  <div id="one">
    <h1>{{age}}</h1>
    <confirm :devi="age" @newRealAge="heddleAge"></confirm>
    <el-button @click="show = !show">点击</el-button>
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">........</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div>
  </div>
</template>

<script>
import confirm from "../components/confirm";

export default {
  name: 'one',
  components: {
    confirm
  },
  data() {
    return {
      'msgs': 'one',
      'show': true,
      'age': 50
    }
  },
  methods: {
    heddleAge(realAge) {
      console.log("年龄为:", realAge);
    }
  }
}
</script>

<style scoped>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409EFF;
  text-align: center;
  color: #070707;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
