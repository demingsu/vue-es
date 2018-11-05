/*********************************************************************
 * Created by deming-su on 2017/12/30
 *********************************************************************/

"use strict";

/* ES6解析兼容 */
import 'babel-polyfill';
import 'es6-promise/auto';

/* 加载vue核心组件 */
import Vue from 'vue';

/* 加载vue路由 */
import Router from 'vue-router';

/* 加载模块路由 */
import router from './router';

/* 向Vue容器注入路由 */
Vue.use(Router);

/* 加载vue状态管理器 */
import store from './store';

/* 引入容器页面 */
import Index from "./page/Index.vue";

/* 引入element-ui组件库 */
/*import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);*/

/* 单独引入element-ui组件库，需要到.babelrc中配置babel-plugin-component配置 */
import ElementUI from "./util/element-import";
new ElementUI(Vue).install();

/* 引入页面样式文件 */
import './styles/main.less';

/* 加载全局过滤器/指令 */
import GlobalComponent from "./components/index";
Vue.use(GlobalComponent);

/* vue实例化，加载路由、状态管理器、指向模板引擎 */
new Vue({
    el: "#mainContent",
    router,
    store,
    data: {
        eventBus: new Vue()
    },
    render(createElement) {
        if (this.$route.path === "/") {
            return createElement("div");
        }

        let routeMeta = this.$route.meta,
            props = {layout: 'main-layout'};

        if (routeMeta && routeMeta.layout) {
            props.layout = routeMeta.layout;
        }
        return createElement(Index, {props});
    }
});