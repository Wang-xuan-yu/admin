<template>
  <div class="login-form">
    <div class="login-s">
      <h2>UNI-ADMIN</h2>
    </div>
    <div class="login-x">
       <el-form ref="form"  :rules="rules" :model="form">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import loginApi from "../../api/login";
export default {
  name: "",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入有效的账号", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入有效的密码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName){
        this.$refs[formName].validate((valid) =>{
            console.log(valid);
            if(valid){
                //调用登录接口
                loginApi.login(this.form.username,this.form.password).then(res=>{
                    console.log(res)
                    const code = res.status;
                    if(code == 200){
                        //获取token
                        const token = res.data.data.token;
                        //吧token存储到本地
                        localStorage.setItem("token",token);
                        this.$router.push({path : "/"})
                        //获取用户信息
                        // loginApi.getUserInfo().then(res=>{
                        //      const resp = res.data.data;
                        //     if(resp.code == 200){
                        //         //将获取到的用户信息保存到本地
                        //         localStorage.setItem("info",JSON.stringify(resp.data));
                        //         //跳转到首页
                        //         this.$router.push({path : "/"})
                        //     }else{
                        //         this.$message({
                        //             message: '登录失败',
                        //             type: 'warning'
                        //         })
                        //     }
                        // })
                    }else{
                        this.$message({
                            message: '登录失败',
                            type: 'warning'
                        })
                    }
                }).catch(err=>{
                    console.log(err)
                })
            }else{
                console.log("error submit")
                return false;
            }
        })
    }
  },
  components: {}
};
</script>


<style scoped>
.login-form {
  width: 420px;
  margin: 160px auto;
  border: rgba(0, 0, 0, 0.125) solid 0.5px;
}
.login-s {
  padding: 15px 10px;
  border-bottom: rgba(0, 0, 0, 0.125) solid 0.5px;
}
.login-form h2 {
  text-align: center;
  color: #6c757d;
}
.login-x{
    padding:20px;
}
.el-form-item{
    margin: 0%;
}
.el-input{
    margin-bottom: 20px;
}
.el-button{
    width: 100%;
   background-color: teal
}
</style>