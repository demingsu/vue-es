/*********************************************************************
 * common util function file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

/* 16进制颜色转rgba */
let hexToRgba = (val, opacity) => {
    if (!opacity) opacity = 1;
    if (/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(val)) {
        /* 自动补全3位16进制字符串 */
        if (val.length === 4) {
            let str = "#";
            for (let i = 1; i < 4; i ++) {
                let char = val.slice(i, i + 1);
                str += char.concat(char);
            }
            val = str;
        }
        let res = [];
        /* 遍历字符串转为十进制rgb */
        for (let i = 1; i < 7; i += 2) {
            /* 两个方法都可以转 */
            res.push(parseInt(val.slice(i, i + 2), 16));
        }
        res.push(opacity);
        val = `rgba(${res.join(',')})`;
    }
    return val;
};

/**
 *  日期转换方法
 *  @param YYYY-MM-DD hh:mm:ss
 */
let dateFormat = (type, val) => {
    let date = val ? new Date(/^[0-9]*$/g.test(val) ? val * 1 : val) : new Date();
    let YYYY = date.getFullYear() + '';
    let m = date.getMonth() + 1;
    let MM = m > 9 ? m + '' : '0' + m;
    let d = date.getDate();
    let DD = d > 9 ? d + '' : '0' + d;
    let h = date.getHours();
    let hh = h > 9 ? h + '' : '0' + h;
    let $m = date.getMinutes();
    let mm = $m > 9 ? $m + '' : '0' + $m;
    let s = date.getSeconds();
    let ss = s > 9 ? s + '' : '0' + s;
    let obj = { YYYY, MM, DD, hh, mm, ss};

    return type.replace(/(YYYY)|(MM)|(DD)|(hh)|(mm)|(ss)/g, (key) => obj[key]);
};

/**
 *  去掉字段的两端空格
 *  @param Object
 */
let trimObject = (obj) => {
    let res = {};
    for (let name in obj) {
        if (obj.hasOwnProperty(name)) {
            res[name] = obj[name].replace(/(^\s*)|(\s*$)/g, '');
        }
    }

    return res;
};

/**
 *  去掉字段的两端空格
 *  @param Object
 */
let fileSize = (size, count) => {
    if (!count) count = 0;
    if (isNaN(size)) return 0;
    var names = ['byte', 'KByte', 'MB', 'GB', 'TB'];
    if (size < 1024) {
        return size + names[count];
    } else {
        return fileSize(parseFloat((size / 1024).toFixed(2)), ++count);
    }
};

/**
 *  计算分页
 *  @param total      总数
 *  @param page       当前页码
 *  @param size       每页条数
 */
let pagingCount = (total, page, size) => {
    let res = ['1'];
    let tp = Math.ceil(total/size);
    if (tp > 7) {
        if (page < 4) {
            res = res.concat(['2', '3', '...', `${tp}`]);
        } else if (page > tp - 3) {
            res = res.concat(['...', `${tp - 2}`, `${tp - 1}`, `${tp}`]);
        } else {
            res = res.concat(['...', `${page - 1}`, `${page}`, `${page + 1}`, '...']);
        }
    } else {
        for (let i = 1;i < tp;i ++) {
            res.push(`${i + 1}`);
        }
    }
    return res;
};

/**
 * 在树形数据中查找对应数据对象
 *  @param item       需要查找的对象
 *  @param tree       树的数据列表
 *  @param key        查找对象的key，默认为id
 */
let findItemInTree = (item, tree, key) => {
    if (!key) key = 'id';
    let nodes = [];
    for (let node of tree) {
        if (loopTree(node, item, nodes, key)) {
            nodes.push(node);
            break;
        }
    }
    return nodes.reverse();
};
let loopTree = (list, item, newList, key) => {
    if (list[key] === item[key]) {
        return true;
    }
    if (list.children && list.children.length > 0) {
        for (let it of list.children) {
            if (loopTree(it, item, newList, key)) {
                newList.push(it);
                return true;
            }
        }
    }
    return false;
};


export default {
    dateFormat,
    hexToRgba,
    trimObject,
    fileSize,
    pagingCount,
    findItemInTree
};