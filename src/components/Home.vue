<template>
  <el-container style="height: 100%">
    <el-header>
      <el-button type="info" @click="logout">退出</el-button></el-header
    >
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
          unique-opened
          @select="handleSelect"
        >
          <el-submenu
            :index="item.id + ''"
            v-for="item in menulist"
            :key="item.id"
          >
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.authName }}</span>
            </template>

            <el-menu-item
              :index="'home/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
            >
              <template slot="title">
                <i :class="subItem.icon"></i>
                <span>{{ subItem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'HomeView',
  data() {
    return {
      menulist: [
        {
          id: 1,
          authName: '权限管理',
          icon: 'el-icon-user',
          children: [
            {
              id: 11,
              authName: '角色列表',
              path: 'permission/list',
              icon: 'el-icon-unlock'
            },
            {
              id: 12,
              authName: '账号管理',
              path: 'permission/account-management',
              icon: 'el-icon-collection'
            }
          ]
        }
      ]
    }
  },
  computed: {},
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    handleSelect(index, indexPath) {
      // console.log(index)
      // console.log(indexPath)
      this.$router.push({
        name: index
      })
    }
  },
  components: {}
}
</script>
<style scoped lang="less">
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #eaedf1;
}
</style>
