<template>
  <div class="container">
    <div class="login_box">
      <!-- <div class="avatar">
        <img src="../assets/logo.png" alt="" />
      </div> -->
      <!-- 表单 -->
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="0px"
        class="form"
      >
        <el-form-item prop="username">
          <el-input
            placeholder="请输入用户名,默认damin"
            prefix-icon="el-icon-user"
            v-model="form.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码，默认111111"
            prefix-icon="el-icon-goods"
            v-model="form.password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginView',
  data() {
    return {
      form: {
        username: 'admin',
        password: '111111'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {},
  methods: {
    reset() {
      this.$refs.formRef.resetFields()
    },
    login() {
      this.$refs.formRef.validate(async (v) => {
        if (!v) {
          return
        }
        const { data: res } = await this.$http.post('user/login', this.form)
        // console.log(res)
        if (res.code !== 200) return this.$message.error(res.message)
        this.$message.success('登录成功')
        window.sessionStorage.setItem('token', res.data.admin_token)
        this.$router.push('/home')
      })
    }
  },
  components: {}
}
</script>
<style lang="less" scoped>
.container {
  background-color: #2b4b6b;
  height: 100%;
  position: relative;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #eee;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .avatar {
    height: 130px;
    width: 130px;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    border-radius: 50%;
    border: 1px solid #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -999;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #fff;
    }
  }
}

.form {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
