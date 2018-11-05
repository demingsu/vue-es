/*********************************************************************
 * defined Home page router file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

/* 报告首页路由 */
const ReportIndex = () => {
    return import(/* webpackChunkName: "ReportIndex"*/"../page/report/Index.vue");
};

const routes = [
    { path: "/report", component: ReportIndex, meta: { requestLogin: true }}
];

export default routes;