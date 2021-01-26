<template>
  <div id="one">
    <h1>{{ age }}</h1>
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
    <!--    <h1 v-bind:class="{'active': isAct}">test</h1>-->
    <!--    <el-button @click="changeAct">点击</el-button>-->
    <!--    <ul>-->
    <!--      <li v-for="(m, index) in movies" :class="{'active': ind == index}" @click="changeAct(index)">{{ m }}</li>-->
    <!--    </ul>-->
    <ul>
      <li v-for="(m, index) in movies" :class="{'active': ind == index}" @click="ind=index">{{ m }}</li>
    </ul>
    <h1>{{ fullName }}</h1>
    <p v-if="score>=90">优秀</p>
    <p v-else-if="score>=80">普通</p>
    <p v-else-if="score>=60">及格</p>
    <p v-else>不及格</p>

  </div>
</template>

<script>
import confirm from "../components/index/confirm";

export default {
  name: 'one',
  components: {
    confirm
  },
  data() {
    return {
      'msgs': 'one',
      'show': true,
      'age': 50,
      'isAct': false,
      'ind': null,
      'score': 55,
      'movies': ['海王', '海尔兄弟', '火影忍者', '蜘蛛侠']
    }
  },
  methods: {
    heddleAge(realAge) {
      this.age = realAge;
    },
    changeAct(obj) {
      this.ind = obj;
    }
  },
  computed: {
    fullName: {
      get() {
        return "abc"
      }
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

.active {
  color: #409EFF;
}
</style>
