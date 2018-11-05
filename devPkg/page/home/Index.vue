/*********************************************************************
 * Created by deming-su on 2017/12/30
 *********************************************************************/

<template>
    <div class="container">
        <el-row :gutter="15">
            <el-col :span="6" v-for="item in totalAmount" :key="`total_amount_${item.name}`">
                <el-card class="box-card">
                    <el-row>
                        <el-col :span="8">
                            <span class="home-total-number">{{item.number}}</span>
                            <span class="home-total-desc">{{item.name}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.state}}</span>
                        </el-col>
                        <el-col :span="16">
                            <div class="home-total-chart">
                                <el-progress type="circle" :width="90" :color="item.color" :percentage="item.percent"></el-progress>
                            </div>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import BaseView from "../BaseView.vue";
    
    export default {
        mixins: [BaseView],
        /**
         * 所有参数变量说明
         * paging             boolean   是否需要分页
         */
        data() {
            return {
                paging: false,
                totalAmount: [
                    {color: '#407dd1', number: '￥ 2400', percent: 50, name: '售出', state: '今天'},
                    {color: '#3cbb5b', number: '￥ 2400', percent: 15, name: '购入', state: '昨天'},
                    {color: '#ff8441', number: '2400', percent: 60, name: '库存', state: '今天'},
                    {color: '#d93b25', number: '2400', percent: 90, name: '在途', state: '今天'}
                ]
            }
        },
        created() {
            let hasLogin = this.validateUserLogin();
            this.$message(`Now login state : ${hasLogin}`);
        }
    }
</script>