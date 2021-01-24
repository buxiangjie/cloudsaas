<template>
  <div id="login">
    <el-button type="primary" @click="changeRegister">切换注册方式</el-button>
    <p></p>
    <el-form v-if="!isMail" label-width="auto" class="demo-form-inline" :inline="false">
      <el-form-item label="账号:">
        <el-col :span="2">
          <el-input v-model="userName" type="text" placeholder="帐号名称" clearable></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="密码:">
        <el-col :span="2">
          <el-input v-model="password" type="password" placeholder="密码" show-password></el-input>
        </el-col>
      </el-form-item>
    </el-form>
    <el-form v-else label-width="auto">
      <el-form-item label="邮箱:">
        <el-col :span="2">
          <el-input v-model="emailAddress" type="text" placeholder="邮箱地址"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="密码:">
        <el-col :span="2">
          <el-input v-model="password" type="password" placeholder="密码"></el-input>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      'isMail': false,
      'userName': null,
      'password': null,
      'emailAddress': null,
    }
  },
  methods: {
    changeRegister() {
      this.isMail = !this.isMail;
    }
  }
}
</script>

<style scoped>

</style>
