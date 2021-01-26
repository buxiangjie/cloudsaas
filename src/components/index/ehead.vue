<template xmlns="http://www.w3.org/1999/html">
  <div class="eh">
    <el-header>
      <el-row>
        <el-col class="gc">
          <div class="grid-content bg-purple">
            <i v-if="isColl" class="el-icon-arrow-left" @click="toggleCollapse"></i>
            <i v-else class="el-icon-arrow-right" @click="toggleCollapse"></i>
          </div>
        </el-col>
        <el-col>
          <div class="grid-content bg-purple">
            <el-breadcrumb>
              <el-breadcrumb-item v-for="item in levelList" :key="item.path" :to="item.path">
                <span>{{ item.meta.title }}</span>
              </el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-col>
      </el-row>
    </el-header>
  </div>
</template>

<script>
export default {
  name: "ehead",
  props: {
    isColl: Boolean
  },
  data() {
    return {
      levelList: []
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    toggleCollapse() {
      this.$emit('changeCollapse', !this.isColl);
    },
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0];
      if (first && first.name.trim().toLocaleLowerCase() !== '首页'.toLocaleLowerCase()) {
        matched = [{path: '/', meta: {title: '首页'}}].concat(matched)
      }
      this.levelList = matched
    }
  }
}
</script>

<style scoped>
.eh {
  text-align: left;
  height: auto;
  text-decoration: underline;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 5px rgba(0, 0, 0, .01);
}

.gc {
  border-radius: 4px;
  min-height: 40px;
}
</style>
