/*********************************************************************
 * defined Home page router file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

/* 报告首页路由 */
const HomeIndex = () => {
    return import(/* webpackChunkName: "HomeIndex"*/"../page/home/Index.vue");
};

const routes = [
    { path: "/home", component: HomeIndex, meta: { requestLogin: true }}
];

export default routes;