/*********************************************************************
 * defined Home page router file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

/* 登录页面 */
const LoginIndex = () => {
    return import(/* webpackChunkName: "LoginIndex"*/"../page/login/Login.vue");
};

/* 错误路径页面页面 */
const NotFound = () => {
    return import(/* webpackChunkName: "NotFound"*/"../page/default/NotFound.vue");
};

/* 去权限页面 */

/* 错误路径页面页面 */
const NotRight = () => {
    return import(/* webpackChunkName: "NotRight"*/"../page/default/NotRight.vue");
};

const routes = [
    {path: "/", redirect: '/login'},
    {path: "/login", component: LoginIndex, meta: { layout: "blank-layout" }},
    {path: "/not/found", component: NotFound, meta: { layout: "blank-layout", requestLogin: false }},
    {path: "/not/right", component: NotRight, meta: { layout: "blank-layout", requestLogin: false }}
];

export default routes;