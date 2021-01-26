<template>
  <div id="confirm">
    <h1>父组件传的值{{ devi }}</h1>
    <el-button @click="newAge">newAge</el-button>
  </div>
</template>

<script>
export default {
  name: "confirm",
  props: {
    devi: Number,
  },
  data(){
    return{
      'dd': 'aa'
    }
  },
  computed: {
    realAge() {
      return this.devi + 10;
    }
  },
  methods: {
    newAge() {
      this.$emit("newRealAge", this.realAge);
    }
  }
}
</script>

<style scoped>

</style>
