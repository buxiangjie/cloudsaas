<template>
  <div class="eh">
    <el-header>
      <el-row :gutter="1">
        <el-col :span=1>
          <div @click="toggleCollapse">
            <i v-if="isColl" class="el-icon-arrow-left"></i>
            <i v-else class="el-icon-arrow-right"></i>
          </div>
        </el-col>
        <el-col :span=15>
          <div style="background-color: #409EFF; height: 28px;">
            <el-breadcrumb class="breadcrumb-container" separator-class="el-icon-arrow-right">
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

.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
