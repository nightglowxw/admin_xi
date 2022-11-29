<template>
  <div class="role-detail">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        ><router-link to="/role-detail"
          >权限管理</router-link
        ></el-breadcrumb-item
      >
      <el-breadcrumb-item>添加新角色</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- main -->
    <div class="main">
      <span>{{ addOrEdit }}</span>
      <el-form :model="form" style="margin-top: 5px">
        <el-form-item label="角色名称：">
          <el-input
            v-model="form.title"
            placeholder="请输入角色名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="角色权限:">
          <div class="main-pre">
            <el-tree
              :data="form.permission"
              show-checkbox
              node-key="id"
              default-expand-all
              :default-checked-keys="[1]"
            ></el-tree>
          </div>
        </el-form-item>
      </el-form>
      <div class="btn">
        <el-button type="primary" @click="$router.push('/list')"
          >取消</el-button
        >
        <el-button type="primary">保存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
// import routes from '../../router/dynamicRouter'
export default {
  name: 'RoleDetail',
  data() {
    return {
      addOrEdit: '添加角色',
      form: {
        // 输入框
        title: '',
        // 权限列表
        permission: [
          {
            id: '1',
            label: '权限管理',
            children: [
              {
                id: '11',
                label: '角色列表'
              },
              {
                id: '12',
                label: '账户管理'
              }
            ]
          }
        ]
      }
    }
  },
  mounted() {
    if ((this, this.$route.query.id)) {
      this._getDetails()
      this.addOrEdit = '编辑角色'
    }
    // const res = routes.filter((item) => {
    //   if (item.name !== 'home') {
    //     if (item.name === 'permission') {
    //       item.children.filter((item1, i) => {
    //         if (item1.name === 'role-detail') {
    //           item1.children.splice(i, 1)
    //         }
    //         return true
    //       })
    //     }
    //   }
    //   return true
    // })
    // console.log(res)
    // const realPermission = res.filter((item) => {
    //   // return (item.title = item.meta.name)
    //   return true
    // })
    // console.log(realPermission)
  },
  computed: {},
  methods: {
    async _getDetails() {
      // console.log(this.$route)
      const res = await this.$http.get('/role/detail', {
        id: this.$route.query.id
      })
      console.log(res)
    }
  },
  components: {}
}
</script>
<style lang="less" scoped>
.role-detail {
  padding: 30px 60px;
  .main {
    width: 50%;
    margin-top: 50px;
    .btn {
      display: flex;
      justify-content: flex-end;
    }
  }
}
.main-pre {
  padding: 40px;
}
</style>
