<template>
  <div class="login">
      <Heada :message='hello' @child='parentEvent' @vvv='fff'></Heada>
      <p>
          <router-link to='register'>去注册界面</router-link>
      </p>
  </div>
</template>

<script>

import Heada from '@/components/heada.vue'
export default {
    name:'login',
    data(){
        return {
            msg:'login页面',
            hello:'传给子组件的值'
        }
    },
    components:{
        Heada
    },
    methods:{
       parentEvent(data){
           console.log(data)
       },
       fff(data){
           console.log(data)
       }
    }
}
</script>

<style>

</style>