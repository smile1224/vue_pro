<template>
  <div class="footbox">
    <input type="button" :value="text" class="login-btn" />
    <a href="javascript:;" class="tishi">忘记密码？</a>
  </div>
</template>

<script>
  export default {
    data(){return {}},
    props:{
      text:{
        type:String,
        default:'按 钮'
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  
 .footbox {
    width: 4.65rem;
    height: 0.66rem;
    margin: 0 auto;
	padding:0.30rem 0 0 0.40rem;
	float: left;
  }
  
 .login-btn {
    width: 4.65rem;
    height: 0.66rem;
    background: #fd888e;
	border: none;
    color: #fff;
    text-align: center;
    line-height: 0.66rem;
    border-radius: 0.08rem;
    display: block;
    margin-top: 0.62rem;
    font-size: 0.28rem;
  }
  
 .tishi {
    width: 1.4rem;
    font-size: 0.25rem;
    margin-top: 0.28rem;
    display: block;
  }
</style>
