/*********************************************************************
 * user right file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

/* 导入api接口 */
import ConstVariable from "../config/const.config";

/* 校验是否用权限访问路由 */
let isHasRight = (path) => {
    let cache = sessionStorage.getItem('current_user_right');
    let hasCache = !!cache;
    if (hasCache) {
        try {
            cache = JSON.parse(cache);
        } catch (e) {
            hasCache = false;
        }
    }

    if (!hasCache) return false;

    return !!cache.find(oo => oo.path === path);
};

/* 检查是否存在此路由 */
let isExistPath = (path, routers) => {
    for (let item of routers) {
        let flag = loopPath(path, item);
        if (flag) {
            return flag;
        }
    }
    return false;
};

let loopPath = (path, item) => {
    if (item.path === path) {
        return true;
    }
    if (!!item.children && item.children.length > 0) {
        for (let it of item.children) {
            path = path.replace(`${item.path}/`, "");
            if (loopPath(path, it)) {
                return true;
            }
        }
    }
    return false;
};

/* 判断是否已经登录 */
let isUserLogin = () => {
    try {
        let user = JSON.parse(sessionStorage.getItem("current_login_user_info") || "{}");
        return !!user.id && !!user.name;
    } catch (e) {
        return false;
    }

};

/* 是否是默认不要做任何校验的路由 */
let isDefaultRoute = (path) => {
    return ConstVariable.DEFAULT_ROUTES.findIndex(oo => oo.path === path) > -1;
};

const validateRight = (to, from, next, routers) => {

    /* 是否是默认路由 */
    if (!!isDefaultRoute(to.path)) {
        next();
        return;
    }

    /* 是否存在访问路由 */
    if (!isExistPath(to.path, routers)) {
        next('/not/found');
        return;
    }

    /* 是否有路由访问权限 */
    if (!isHasRight(to.path)) {
        next('/not/right');
        return;
    }

    /* 是否需要登陆验证 */
    if (to.meta.requestLogin) {
        if (isUserLogin()) {
            next();
        } else {
            next("/login");
        }
    } else {
        next();
    }
};

export default validateRight;