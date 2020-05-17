<template>
  <div class="header">
      <p>这里收到的值：{{message}}</p>
      <div>
          {{msg}}
      </div>
      <!-- <button @click="emitParent">往父组件传值</button> -->
      <button @click="chuanzhi">再次给父组件传值</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            msg:'这里是头部'
        }
    },
    props:['message'],
    methods:{
        emitParent(){
            this.$emit('child','我是子组件往父组件传的值')
        },
        chuanzhi(){
            this.$emit('vvv','这是再次给父组件传值')
        }
    },
    created(){
        this.emitParent()
    }
}
</script>

<style>

</style>