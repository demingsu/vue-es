/*********************************************************************
 * Vue private blank layout file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

<template>
   <div>
       <h1 style="text-align: center; margin: 0; padding: 10%;">没有访问权限，你是外星人？。。。</h1>
       <el-row style="text-align: center;">
           <el-button type="warning" icon="el-icon-back" round @click="backHistory">返回</el-button>
       </el-row>
   </div>
</template>

<script>
    export default{
        methods: {
            backHistory() {
                this.$router.go(-1);
            }
        }
    };
</script>

