/*********************************************************************
 * Vue filter file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

import Tool from "../util/tool";

/**
 * 数字取精度方法
 * @param val 原始值
 * @param precision 精度（默认两位）
 * @returns {number} 返回值
 */
let fixNumber = (val, precision) => {
    if (!precision) precision = 2;
    let $nv = parseFloat(val);
    if (!isNaN($nv)) {
        return parseFloat($nv.toFixed(precision));
    } else {
        return $nv;
    }
};

let dateFormat = (val, format) => {
    return Tool.dateFormat(format, val);
};

let hexToRgba = Tool.hexToRgba;

export {
    fixNumber,
    hexToRgba,
    dateFormat
};