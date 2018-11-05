/*********************************************************************
 * ajax request file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

import axios from "axios";

import UrlConfig from "../config/url.config";
import ConstConfig from "../config/const.config";

/**
 * 获取请求地址
 * @param url 请求地址
 * @param params 需要替换地址中的数据对象
 * @returns {string} 返回完整请求地址
 */
const getUrl = (url, params) => {
    url = url.replace(/{(\w+)}/g, (reg, key) => params[key]);
    return `${UrlConfig.BASE_URL}${url}`;
};

/**
 * 构建请求参数
 * @param data 请求参数对象
 * @returns {AxiosRequestConfig} 返回请求对象
 */
const buildRequestData = (data) => {
    let result = {};

    result.method = data.method ? data.method : "GET";
    result.params = data.params;
    result.data = data.data;

    if (result.method === "POST") {

        /* 设置请求头文档类型 */
        result.headers = {
            "Content-Type": data.contentType ? data.contentType : "application/json;charset=utf-8"
        };

        /* form提交 */
        result.transformRequest = (requestData) => {
            if (data.contentType && data.contentType.indexOf("application/x-www-form-urlencoded") !== -1) {
                let str = "";

                for (let key in requestData) {
                    if (requestData.hasOwnProperty(key)) {
                        str += `${key}=${requestData[key]}&`;
                    }
                }
                return encodeURI(str.slice(0, str.length - 1));
            } else {
                return JSON.stringify(requestData);
            }
        };
    }
    /* 设置超时 */
    result.timeout = ConstConfig.TIMEOUT_TIME;
    return result;
};


/**
 * Ajax 请求方法
 * @param request 请求参数
 * @param successCallback 成功返回回调函数
 * @param errorCallback 失败返回回调函数
 */
const sendRequest = (request, successCallback, errorCallback) => {
    let url = getUrl(request.url, request.urlParam),
        requestData = buildRequestData(request);

    requestData.url = url;

    /* axios 发起请求 */
    axios(requestData).then((response) => {
        successCallback(response.data);
    }).catch((error) => {
        if (errorCallback) {
            errorCallback(error);
        }
    });
};

export default sendRequest;