/*********************************************************************
 * defined Home page router file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

/* 分析首页路由 */
const AnalysisIndex = () => {
    return import(/* webpackChunkName: "AnalysisIndex"*/"../page/analysis/Index.vue");
};

/* 月度分析路由 */
const AnalysisMonth = () => {
    return import(/* webpackChunkName: "AnalysisMonth"*/"../page/analysis/child/Month.vue");
};

/* 年度分析路由 */
const AnalysisYear = () => {
    return import(/* webpackChunkName: "AnalysisYear"*/"../page/analysis/child/Year.vue");
};

const routes = [
    { path: "/analysis", component: AnalysisIndex, children: [
            {path: '', redirect: 'year'},
            {path: 'year', component: AnalysisYear, meta: { requestLogin: true }},
            {path: 'month', component: AnalysisMonth, meta: { requestLogin: true }}
        ] }
];

export default routes;