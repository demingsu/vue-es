/*********************************************************************
 * Created by deming-su on 2018/5/3
 *********************************************************************/
 

<template>
    <transition name="toast">
        <div class="toast-container" :class="computeType" v-show="toastShow">
            <span>{{msg}}</span>
        </div>
    </transition>
</template>
<script>
    export default {
        /**
         * 属性参数释义
         * @define msg            提示信息内容
         * @define type           提示信息类型
         */
        props: {
            msg: String,
            type: {
                type: String,
                default: "info",
                required: true,
                validator(value) {
                    return "info&success&danger&warning".indexOf(value) > -1;
                }
            }
        },
        /**
         * 页面参数释义
         * @define toastShow      是否显示提示框
         * @define computeType    是否显示提示框
         */
        data() {
            return {
                toastShow: false
            }
        },
        /**
         * 页面计算属性释义
         * @define computeType    是否显示提示框
         */
        computed: {
            computeType() {
                return `${this.type}-msg-label`;
            }
        },
        created() {
            setTimeout(() => this.toastShow = true);
        }
    }
</script>
<style lang="less" scoped>
.toast-enter-active {
  animation: toastIn .2s linear;
}
.toast-leave-active {
  animation: toastIn .2s linear reverse;
}
@keyframes toastIn {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>