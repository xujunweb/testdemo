<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="msg" ref="hel">
      <div>插槽内容</div>
    </HelloWorld>
    <div style="height: 100px;"></div>
    <div>父组件</div>
    <div>
      <Input v-model="name" placeholder="用户名" style="width: 300px" />
    </div>
    <div><Input v-model="pwd" placeholder="密码" style="width: 300px" /></div>
    <Button type="primary" @click="login">登录</Button>
    <div><Input v-model="msg" placeholder="给子组件传值" style="width: 300px" /></div>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      name: '',
      pwd: '',
      msg:''
    }
  },
  created () {
    // 生命周期----组件实例初始化完成
  },
  mounted () {
    // 生命周期----页面加载完成
    console.log('子组件实例---------',this.$refs.hel)
  },
  methods: {
      login () {
          this.$store.dispatch('handleLogin',{userName:this.name,password:this.pwd})
      }
  }
}
</script>
