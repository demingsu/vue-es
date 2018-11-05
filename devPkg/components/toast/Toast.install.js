/*********************************************************************
 * Toast file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

import ToastComp from "./Toast.vue";

const ToastNode = {
    install(Vue) {
        let Constructor = Vue.extend(ToastComp);
        let toastInstall = null;

        toastInstall = {
            containerNode: null,
            toastNode: null,
            toastTimer: 0,
            show(msg, type, auto) {
                if (typeof auto === "undefined") {
                    auto = true;
                }
                if (!this.containerNode) {
                    this.containerNode = document.createElement('div');
                    document.body.appendChild(this.containerNode);
                }
                if (!!this.toastNode) {
                    this.destroyNode();
                }
                let container = document.createElement('div');
                this.containerNode.appendChild(container);
                this.toastNode = new Constructor({
                    el: container,
                    propsData: {
                        msg,
                        type
                    }
                });
                if (auto) {
                    this.toastTimer = setTimeout(() => this.destroyNode(), 2000);
                }

            },
            destroyNode() {
                if (!!this.toastTimer) {
                    clearTimeout(this.toastTimer);
                    this.toastTimer = 0;
                }
                if (!!this.toastNode) {
                    this.toastNode.$destroy();
                    this.containerNode.removeChild(this.toastNode.$el);
                    this.toastNode = null;
                }
            }
        };
        Vue.prototype.$shuimo.Toast = toastInstall;
    }
};

export default ToastNode;