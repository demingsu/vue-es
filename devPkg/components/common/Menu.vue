/*********************************************************************
 * Created by deming-su on 2017/12/30
 *********************************************************************/

<template>
    <div class="menu-container">
        <div class="log">
            <span>{{nameCollapse ? 'T' : 'Testtest'}}</span>
        </div>
        <div class="container">
            <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" @select="menuPickEvt" :collapse="nameCollapse">
                <el-menu-item index="home">
                    <i class="el-icon-news"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-submenu index="analysis">
                    <template slot="title">
                        <i class="el-icon-goods"></i>
                        <span slot="title">统计</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="analysis&year">年度</el-menu-item>
                        <el-menu-item index="analysis&month">月度</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="report">
                    <i class="el-icon-tickets"></i>
                    <span slot="title">报表</span>
                </el-menu-item>
                <el-submenu index="test">
                    <template slot="title">
                        <i class="el-icon-edit-outline"></i>
                        <span slot="title">一级菜单</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="test0">二级菜单一</el-menu-item>
                        <el-menu-item index="test1">二级菜单二</el-menu-item>
                        <el-menu-item index="test2">二级菜单三</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="test4">
                        <span slot="title">二级菜单四</span>
                        <el-menu-item index="test5">三级菜单</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                nameCollapse: false,
                activeMenu: '',
                menuKeyMap: [
                    {key: 'home', path: '/home'},
                    {key: 'analysis', path: '/analysis', names: ['统计']},
                    {key: 'analysis&year', path: '/analysis/year', names: ['统计', '年度']},
                    {key: 'analysis&month', path: '/analysis/month', names: ['统计', '月度']},
                    {key: 'report', path: '/report', names: ['报表']}
                ]
            }
        },
        watch: {
            '$route.path': function(value) {
                /* 重置menu选中 */
                this.resetMenu(value);
            }
        },
        methods: {
            /* menu点击事件 */
            menuPickEvt(key) {
                this.$router.push({path: `/${key.replace(/\&/g, '/')}`});
            },
            /* 重置menu选中 */
            resetMenu(path) {
                let active = this.menuKeyMap.find(oo => oo.path === path);
                if (!!active) {
                    this.activeMenu = active.key;
                    this.$root.eventBus.$emit('MenuChanged', {type: 'menu', data: active.names});
                }
            }
        },
        created() {
            /* 重置menu选中 */
            this.resetMenu(this.$route.path);

            /* 接收收起/展开menu菜单信息 */
            this.$root.eventBus.$on('MenuCollapse', d => {
                this.nameCollapse = d;
            });
        }
    }
</script>
