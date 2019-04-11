<template>
    <div>
        <div style="height: 30px;"></div>
        <div>子组件</div>
        <div>{{msg}}</div>
        <slot name="dd"></slot>
        <div>{{com}}</div>
        <slot name="ad"></slot>
    </div>
</template>

<style>
</style>

<script>
export default {
    name: 'HelloWorld',
    props:{
        msg:{
            type:String,
            value:'默认的组件文案'
        }
    },
    data(){
        return{

        }
    },
    computed: {
        com () {
            return this.msg+'+计算属性文案'
        }
    },
}
</script>
