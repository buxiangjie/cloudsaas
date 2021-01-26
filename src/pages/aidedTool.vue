<template>
  <div>
    <!--    <Phead cont="辅助工具"></Phead>-->
    <ECard :c-item="c1"></ECard>
  </div>
</template>

<script>
import Phead from "../components/index/phead";
import ECard from "../components/aidedTool/eCard";

export default {
  name: 'aidedTool',
  components: {
    ECard,
    Phead
  },
  data() {
    return {
      c1: [
        {
          name: '删除进件信息',
          detail: '删除进件相关表的数据',
          path: '/index/aidedTool/delProd'
        },
        {
          name: '2',
          detail: 'dawdaw'
        },
        {
          name: '3',
          detail: 'dawdaw'
        },
        {
          name: '4',
          detail: 'dawdaw'
        },
        {
          name: '5',
          detail: 'dawdaw'
        },
        {
          name: '6',
          detail: 'dawdaw'
        },
        {
          name: '7',
          detail: 'dawdaw'
        },
        {
          name: '8',
          detail: 'dawdaw'
        },
        {
          name: '9',
          detail: 'dawdaw'
        },
        {
          name: '10',
          detail: 'dawdaw'
        },
      ]
    }
  },
  methods: {},
  computed: {}
}
</script>

<style scoped>

</style>
