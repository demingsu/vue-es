/*********************************************************************
 * Vue private main layout file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

<template>
    <div class="application-container">
        <!-- 顶部导航菜单 ---start--- -->
        <navigator-content :class="[{'collapse': collapse}]"/>
        <!-- 顶部导航菜单 ---end--- -->

        <!-- 左侧目录菜单 ---start--- -->
        <menu-content :class="[{'collapse': collapse}]"/>
        <!-- 左侧目录菜单 ---end--- -->

        <!-- 主体路由样式 ---start--- -->
        <div class="view-container" :class="[{'collapse': collapse}]">
            <router-view></router-view>
        </div>
        <!-- 主体路由样式 ---end--- -->
    </div>
</template>

<script>
    import Navigator from "../../components/common/Navigator.vue";
    import Menu from "../../components/common/Menu.vue";
    // import MenuTree from "../../config/"

    export default {
        components: {
            "navigator-content": Navigator,
            "menu-content": Menu
        },
        data() {
            return {
                collapse: false
            }
        },
        created() {
            this.$root.eventBus.$on('MenuCollapse', d => {
                this.collapse = d;
            });
        },
        mounted() {
            this.$nextTick(() => {
                let noticeList = [
                    {id: 'notice_list_001', name: '策划公告提醒'},
                    {id: 'notice_list_002', name: '策划公告提醒'},
                    {id: 'notice_list_003', name: '策划公告提醒'},
                    {id: 'notice_list_004', name: '策划公告提醒'}
                ];
                this.$root.eventBus.$emit('NoticeBroadcast', {type: 'notice', data: noticeList});
            });
        }
    };
</script>