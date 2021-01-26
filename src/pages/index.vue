<template>
  <el-container>
    <el-aside width="auto">
      <nabr :is-coll="isCollapse"></nabr>
    </el-aside>
    <el-container direction="vertical">
      <ehead :is-coll="isCollapse" v-on:changeCollapse="linstenChange"></ehead>
      <emain></emain>
    </el-container>
  </el-container>
</template>
<script>
import nabr from '../components/index/nabr'
import ehead from "../components/index/ehead";
import emain from "../components/index/emain";

export default {
  name: "index",
  components: {
    nabr,
    ehead,
    emain
  },
  data() {
    return {
      isCollapse: true
    }
  },
  methods:{
    linstenChange(coll){
      this.isCollapse = coll;
    }
  }
}
</script>

<style scoped>

</style>
