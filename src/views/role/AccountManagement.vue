<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        ><router-link to="/role-detail"
          >权限管理</router-link
        ></el-breadcrumb-item
      >
      <el-breadcrumb-item>账号管理</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  name: 'AccountManagement',
  data() {
    return {}
  },
  computed: {},
  methods: {},
  components: {}
}
</script>
<style scoped></style>
