/*********************************************************************
 * login page api
 * Created by deming-su on 2017/12/30
 *********************************************************************/

import Ajax from "../util/request";
import UrlConfig from "../config/url.config";

/**
 * 用户登录
 * @param {object} data
 * @param {function} success
 * @param {function} error
 */
let login = (data, success, error) => {
    Ajax({
        method: "post",
        url: UrlConfig.LOGIN_URL,
        data
    }, success, error);
};

/**
 * 获取菜单menu
 * @param {object} data
 * @param {function} success
 * @param {function} error
 */
let getUserMenu = (data, success, error) => {
    success({
        meta: {code: 200, message: 'success'},
        data: [
            {path: '/home'},
            {path: '/analysis'},
            {path: '/analysis/year'},
            {path: '/report'}
        ]
    });
};

/**
 * 引用页面用法释义
 * import Login form "./api/login";
 * Login.login();
 */
export default {
    login,
    getUserMenu
};