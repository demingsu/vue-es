/*********************************************************************
 * Static variable file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

/* Ajax请求超时设置 */
const TIMEOUT_TIME = 5000;

/* 系统默认路由 */
const DEFAULT_ROUTES = [
    {path: '/login'},
    {path: '/not/found'},
    {path: '/not/right'}
];

export default {
    DEFAULT_ROUTES,
    TIMEOUT_TIME
};