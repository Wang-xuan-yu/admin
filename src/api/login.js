import request from "../utils/request"

export default {
    //登录接口
    login(username,password){
        return request({
            url : "http://ceshi5.dishait.cn/admin/login",
            method : "post",
            data : {
                username,
                password
            }
        })
    }
}

