<template>
  <div class="home">

    <div style="height: 100px;"></div>
    <div>父组件</div>
    <q-btn color="primary">按钮1111111111111</q-btn>
    <q-input />
    <div>
      <Input v-model="userData.userName" placeholder="用户名" style="width: 300px" />
    </div>
    <div><Input v-model="userData.password" placeholder="密码" style="width: 300px" /></div>
    <Button type="primary" @click="newlogin(userData)">登录</Button>
    <div><Input v-model="msg" placeholder="给子组件传值" style="width: 300px" /></div>
      <HelloWorld :msg="msg" ref="hel">
          <div slot="dd">插槽内容11111111</div>
          <div slot="ad">插槽内容</div>
      </HelloWorld>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters, mapMutations, mapState, mapActions } from 'vuex'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      name: '',
      pwd: '',
      msg: '父级文案',
      userData: {
        userName: '',
        password: ''
      }
    }
  },
  created () {
    // 生命周期----组件实例初始化完成
  },
  mounted () {
    // 生命周期----页面加载完成
    console.log('子组件实例---------', this.$refs.hel)
  },
  methods: {
    ...mapActions({
      'newlogin': 'handleLogin'
    }),
    login () {
      this.$store.dispatch('handleLogin', { userName: this.name, password: this.pwd })
    }
  }
}
</script>
