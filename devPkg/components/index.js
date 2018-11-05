/*********************************************************************
 * Vue directive & filter register file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

import * as Filter from "./filter";
import * as Directive from "./directive";
import ToastNode from "./toast/Toast.install";

export default {
    install(Vue) {
        if (!Vue.prototype.$shuimo) {
            Vue.prototype.$shuimo = {};
        }
        this.registerFilter(Vue);
        this.registerDirective(Vue);
        this.registerPrototype(Vue);
    },

    registerFilter(Vue) {
        Vue.filter("dateFormat", Filter.dateFormat);
        Vue.filter("hexToRgba", Filter.hexToRgba);
        Vue.filter("hexToRgba", Filter.fixNumber);
    },

    registerDirective(Vue) {
        Vue.directive("autofocus", Directive.Autofocus);
    },

    registerPrototype(Vue) {
        ToastNode.install(Vue);
    }
};