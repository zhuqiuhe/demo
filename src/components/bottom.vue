<template>
  <div>
      <p>{{msg}}</p>
      <p>{{messgae}}</p>
      <button @click='bbb'>aa</button>

  </div>
</template>

<script>
export default {
    data(){
        return{
            msg:'这个地方是页面底部'
        }
    },
    props:['messgae'],
    methods:{
        bbb(){
            this.$emit('ppp','这个是传给父组件，注册见面的值')
        },
        ggg(){
            this.$emit('yyy','这个还是传值给注册页面的值')
        }
    },
    created(){
        setInterval(()=>{
              this.ggg()
        },3000)
      
    }
}
</script>

<style>

</style>