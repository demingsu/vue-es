/*********************************************************************
 * Created by deming-su on 2017/12/30
 *********************************************************************/

<template>
    <component :is="currentLayout"></component>
</template>

<script>
    import MainLayout from "./layout/MainLayout";
    import BlankLayout from "./layout/BlankLayout";
    
    export default {
        props: ["layout"],
        components: {
            "main-layout": MainLayout,
            "blank-layout": BlankLayout
        },
        computed: {
            currentLayout() {
                return this.layout;
            }
        }
    }
</script>