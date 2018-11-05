/*********************************************************************
 * Created by deming-su on 2017/12/30
 *********************************************************************/


"use strict";

/* 加载vue路由 */
import Router from "vue-router";

/* 各个功能模块 --start-- */

/* 通用路由设置 */
import Common from "./common";

/* 首页路由 */
import Home from "./home";

/* 分析页面路由 */
import Analysis from "./analysis";

/* 报告页面路由 */
import Report from "./report";

/* 各个功能模块 --end-- */

/* 路由集合 */
const RouterCollection = [
    ...Common,
    ...Home,
    ...Analysis,
    ...Report
];

/* 路由配置 */
const router = new Router({routes: RouterCollection});

/* 路由拦截、校验规则 */
import ValidateRule from "../util/right";

/* 路由权限拦截 */
router.beforeEach((to, from, next) => ValidateRule(to, from, next, RouterCollection));

export default router;