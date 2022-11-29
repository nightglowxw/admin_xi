<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        ><router-link to="/role-detail"
          >权限管理</router-link
        ></el-breadcrumb-item
      >
      <el-breadcrumb-item>添加新角色</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-button type="primary" @click="refresh">刷新</el-button>
      <el-button type="primary" @click="addRole">添加新角色</el-button>
      <el-table :data="roleLists" border height="540" style="width: 100%">
        <el-table-column prop="title" label="角色名称" align="center">
        </el-table-column>
        <el-table-column prop="created_at" label="创建时间" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template>
            <el-button type="text">编辑</el-button>
            <el-button type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
import { formatTime } from '../../utils/date'
export default {
  name: 'RoleList',
  data() {
    return {
      roleLists: []
    }
  },
  computed: {},
  created() {
    this._getRoleLists()
  },
  methods: {
    async _getRoleLists() {
      const { data: res } = await this.$http.get('role/list', { no_limt: 1 })
      // console.log(res)
      if (res.data.list) {
        this.$message.success('角色数据请求成功')
      }
      this.roleLists = res.data.list
      this.roleLists.map(
        (item) => (item.created_at = formatTime(item.created_at))
      )
      // console.log(this.roleLists)
    },
    refresh() {
      this._getRoleLists()
    },
    addRole() {
      this.$router.push({
        path: 'role-detail'
      })
    }
  },
  components: {}
}
</script>
<style scoped lang="less">
.el-card {
  margin-top: 10px;
}
.el-table {
  margin-top: 10px;
}
</style>
