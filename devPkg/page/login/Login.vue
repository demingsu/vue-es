/*********************************************************************
 * Created by deming-su on 2017/10/24                                *
 *********************************************************************/

<template>
    <div class="page-container">
        <div class="login-component">
            <span class="title">User Login</span>
            <!--用户名输入框-->
            <div class="item">
                <span class="txt">用户ID</span>
                <input placeholder="user name" v-model="loginName"/>
            </div>
            <!--密码输入框-->
            <div class="item">
                <span class="txt">用户密码</span>
                <input placeholder="user name" v-model="loginPassword" type="password"/>
            </div>
            <!--记住密码选项-->
            <span class="remember-box" :class="[{'active': isRemember}]" @click="rememberEvt">记住密码</span>
            <span class="button" @click="loginEvt">Login</span>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import BaseView from "../BaseView.vue";
    import LoginApi from "../../api/login";
    import Tool from "../../util/tool";

    export default{
        extends: BaseView,
        data() {
            return {
                loginName: "",
                loginPassword: "",
                isRemember: false
            }
        },
        methods: {
            loginEvt() {
                /* 登录信息保存 */
                let loading = this.$loading({
                    lock: true
                });
                let subObj = Tool.trimObject({id: this.loginName, pwd: this.loginPassword});
                if (subObj.id !== '' && subObj.pwd !== '') {
                    LoginApi.login(subObj, d => {
                        loading.close();
                        if (d.meta.code === 200) {

                            /* 是否需要记住密码 */
                            if (this.isRemember) {
                                localStorage.setItem('hasRememberUserInfo', '1');
                                localStorage.setItem('cache_user_information', JSON.stringify(subObj));
                            } else {
                                localStorage.removeItem('hasRememberUserInfo');
                                localStorage.removeItem('cache_user_information');
                            }

                            /* 设置个人信息到缓存 */
                            sessionStorage.setItem('current_login_user_info', JSON.stringify(d.data[0]));

                            /* 获取个人权限菜单 */
                            this.getUserRole();
                        } else {
                            console.log(d);
                        }
                    }, e => this.handleErrorMessage(e, loading));
                }
            },
            getUserRole() {
                LoginApi.getUserMenu({id: this.loginName}, d => {
                    sessionStorage.setItem('current_user_right', JSON.stringify(d.data));
                    this.$router.push({path: '/home'});
                });
            },
            rememberEvt() {
                this.isRemember = !this.isRemember;
            }
        },
        created() {
            let cache = localStorage.getItem('hasRememberUserInfo');
            if (!!cache) {
                let userInfo = localStorage.getItem('cache_user_information');
                try {
                    userInfo = JSON.parse(userInfo);
                    this.loginName = userInfo.id;
                    this.loginPassword = userInfo.pwd;
                    this.isRemember = true;
                } catch (e) {
                    console.log(e);
                }
            }
        }
    }
</script>
