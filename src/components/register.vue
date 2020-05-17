<template>
  <div class="register">
      <p>{{msg}}</p>
      <router-link to='login'>去登录界面</router-link>
      <div>
          <Bottom :messgae='hello' @ppp='hhh' @yyy='iii'></Bottom>
          
      </div>
  </div>
</template>

<script>

import Bottom from '@/components/bottom'
export default {
    name:'register',
    data(){
        return{
            msg:'这个是注册界面',
            hello:'这个是传给子组件的值，注册页面'
        }
    },
    components:{
        Bottom
    },
    methods:{
        hhh(data){
            console.log(data)
        },
        iii(data){
            console.log(data)
            
        },
        getmsg(){
           this.putRequest('https://www.easy-mock.com/mock/5ec10b742ec0011bc82b9bb4/aaaa/aaa')
           .then(res=> {
               console.log(res.data.data)
           })
        }
    },
    created(){
        this.getmsg()
    }
}
</script>

<style>

</style>