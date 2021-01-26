<template>
  <div>
    <el-row>
      <div>
        <el-col :span="3" v-for="(c, index) in cItem" :key="index">
          <el-card class="box-card" shadow="hover" @click.native="toPath(c.path)">
            <div slot="header" class="clearfix">
              <span>{{ c.name }}</span>
            </div>
            <div class="text item">
              {{ c.detail }}
            </div>
          </el-card>
        </el-col>
      </div>
    </el-row>
  </div>

</template>

<script>
export default {
  name: "eCard",
  props: {
    cItem: [
      Array
    ]
  },
  data() {
    return {};
  },
  methods: {
    toPath(path) {
      console.log(path)
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 13px;
}

.item {
  margin-bottom: auto;
}

/*.clearfix:before,*/
/*.clearfix:after {*/
/*  display: table;*/
/*  content: "";*/
/*}*/

/*.clearfix:after {*/
/*  clear: both*/
/*}*/

.box-card {
  width: 240px;
  height: auto;
}

.flex-warp {
  flex-wrap: wrap;

}
</style>
