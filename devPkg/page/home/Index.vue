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
        <el-row style="margin-top: 15px;">
            <el-col :span="24">
                <el-card>
                    <div ref="chartNode" style="height: 400px;"></div>
                </el-card>
            </el-col>
        </el-row>
        <el-row style="margin-top: 15px;">
            <el-col :span="24">
                <el-table
                        :data="tableData"
                        style="width: 100%"
                        height="300">
                    <el-table-column
                            v-for="item in tableColumns"
                            :fixed="item.fixed"
                            :prop="item.prop"
                            :label="item.label"
                            :width="item.width">
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import BaseView from "../BaseView.vue";
    import ChartData from "../../config/chart.config";
    import echarts from "echarts";
    
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
                ],
                chartNode: null,
                tableColumns: [
                    {fixed: true, prop: "col0", label: "单号", width: 180},
                    {fixed: false, prop: "col1", label: "采购部门", width: 180},
                    {fixed: false, prop: "col2", label: "采购日期", width: 180},
                    {fixed: false, prop: "col3", label: "收货部门", width: 180},
                    {fixed: false, prop: "col4", label: "收货日期", width: 180},
                    {fixed: false, prop: "col5", label: "采购数量", width: 180},
                    {fixed: false, prop: "col6", label: "收货数量", width: 180},
                    {fixed: false, prop: "col7", label: "收货人", width: 180}
                ],
                tableData: []
            }
        },
        created() {
            let hasLogin = this.validateUserLogin();
            this.$message(`Now login state : ${hasLogin}`);

            window.addEventListener('resize', this.resizeChart, true);
        },
        mounted() {
            this.$nextTick(() => {
                this.chartNode = echarts.init(this.$refs.chartNode);
                this.renderChart();

                this.tableData = ChartData.TABLE_DATA;
            });
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.resizeChart, true);
        },
        methods: {
            resizeChart() {
                if (!!this.chartNode) this.chartNode.resize();
            },
            renderChart() {
                let data = ChartData.AQI_BEIJING;
                this.chartNode.setOption({
                    xAxis: {
                        data: data.map((item) => {
                            return item[0];
                        })
                    },
                    yAxis: {
                        splitLine: {
                            show: false
                        }
                    },
                    dataZoom: [{
                        startValue: '2014-06-01'
                    }, {
                        type: 'inside'
                    }],
                    visualMap: {
                        top: 10,
                        right: 10,
                        pieces: [{
                            gt: 0,
                            lte: 50,
                            color: '#096'
                        }, {
                            gt: 50,
                            lte: 100,
                            color: '#ffde33'
                        }, {
                            gt: 100,
                            lte: 150,
                            color: '#ff9933'
                        }, {
                            gt: 150,
                            lte: 200,
                            color: '#cc0033'
                        }, {
                            gt: 200,
                            lte: 300,
                            color: '#660099'
                        }, {
                            gt: 300,
                            color: '#7e0023'
                        }],
                        outOfRange: {
                            color: '#999'
                        }
                    },
                    series: {
                        name: 'Beijing AQI',
                        type: 'line',
                        data: data.map((item) => {
                            return item[1];
                        }),
                        markLine: {
                            silent: true,
                            data: [{
                                yAxis: 50
                            }, {
                                yAxis: 100
                            }, {
                                yAxis: 150
                            }, {
                                yAxis: 200
                            }, {
                                yAxis: 300
                            }]
                        }
                    }
                });
            }
        }
    }
</script>