/*********************************************************************
 * Created by deming-su on 2017/12/30
 *********************************************************************/

<template>
    <div>
        <h1>This is analysis component container box ...</h1>
        <router-view></router-view>
    </div>
</template>

<script>
    
    export default {
        /**
         * 所有参数变量说明
         * paging             boolean   是否需要分页
         */
        data() {
            return {
                paging: false
            }
        }
    }
</script>