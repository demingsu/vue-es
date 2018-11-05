/*********************************************************************
 * Created by deming-su on 2017/12/30
 *********************************************************************/

<template>
    <div class="navigator-container">
        <div class="container">
            <span class="collapse-btn" :class="[{'collapse': collapse}]" @click="collapseEvt"></span>
            <div class="router-info">
                <span @click="backHome">首页</span>
                <span v-for="item in breadcrumb" :key="`breadcrumb_key_${item}`">{{item}}</span>
            </div>
            <div class="btn-box">
                <span class="full-btn" :class="[{'active': fullScreen}]" @click="fullScreenEvt"></span>
                <el-dropdown trigger="click" @command="noticePickEvt">
                    <span class="el-dropdown-link">
                        通知<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="item in noticeList" :command="item.id">{{item.name}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <div class="user-info">
                    <span class="icon">{{!!name ? name.substr(0, 1) : ""}}</span>
                    <el-dropdown trigger="click" @command="profileEvt">
                        <span class="el-dropdown-link">
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="quit">退出</el-dropdown-item>
                            <el-dropdown-item command="profile">个人信息</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                name: "张三",
                noticeList: [],
                collapse: false,
                fullScreen: false,
                breadcrumb: []
            }
        },
        methods: {
            /* 通知项点击事件 */
            noticePickEvt(params) {
                if (this.noticeList.length > 0) {
                    let obj = this.noticeList.find(oo => oo.id === params);
                    if (!!obj) {
                        this.$message({message: obj.name});
                    }
                }
            },
            /* 个人项目点击事件 */
            profileEvt(type) {
                if (type === 'quit') {
                    sessionStorage.removeItem('current_login_user_info');
                    this.$router.push({path: '/login'});
                }
            },
            /* 左侧菜单收起/展开事件 */
            collapseEvt() {
                this.collapse = !this.collapse;
                this.$root.eventBus.$emit('MenuCollapse', this.collapse);
            },
            /* 返回首页 */
            backHome() {
                this.$router.push({path: '/home'});
            },
            /* 全屏事件 */
            fullScreenEvt() {
                this.fullScreen = !this.fullScreen;
                if (this.fullScreen) {
                    const el = document.documentElement;
                    let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
                    if (!!rfs && rfs) {
                        rfs.call(el);
                    };
                } else {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    }
                    else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    }
                    else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    }
                    else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                }
            }
        },
        created() {

            /* 接收通知/路由数据广播事件 */
            this.$root.eventBus.$on(['NoticeBroadcast', 'MenuChanged'], d => {
                if (d.type === 'notice') {
                    this.noticeList = d.data;
                }
                if (d.type === 'menu') {
                    this.breadcrumb = d.data;
                }
            });
        }
    }
</script>
