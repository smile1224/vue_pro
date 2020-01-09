<template>
  <div class="login-aside">
    <div id="o-box-up"></div>
    <div id="o-box-down"  style="table-layout:fixed;">
     <div class="error-box"></div> 
     <form class="registerform">
     <div class="fm-item">
  	   <label for="logonId" class="form-label">输入账户：</label>
  	   <input type="text" value="输入账号" maxlength="100" id="username" class="i-text" ajaxurl="demo/valid.jsp"  datatype="s6-18" errormsg="用户名至少6个字符,最多18个字符！"  >    
         <div class="ui-form-explain"></div>
    </div>
    <div class="fm-item">
  	   <label for="logonId" class="form-label">登陆密码：</label>
  	   <input type="password" value="" maxlength="100" id="password" class="i-text" datatype="*6-16" nullmsg="请设置密码！" errormsg="密码范围在6~16位之间！">    
         <div class="ui-form-explain"></div>
    </div>
    <div class="fm-item pos-r">
  	   <label for="logonId" class="form-label">验证码</label>
  	   <input type="text" value="输入验证码" maxlength="100" id="yzm" class="i-text yzm" nullmsg="请输入验证码！" >    
         <div class="ui-form-explain"><img src="../assets/images/yzm.jpg" class="yzm-img" /></div>
    </div>
	  <uc-button></uc-button>
    </form>
    
    </div>
  
  </div>
</template>

<script>
import UcButton from './uc-button.vue'	
export default {
  name: 'login',
  data(){
	  return {
		  
	  }
  },
  components: {
    UcButton,
  },
  mounted() {
  	
  },
  updated() {
  	
  },
  methods:{}
}
</script>

<style scoped>
.login-aside{position:absolute; width:6.40rem; height:7.60rem; z-index:99; border-radius:0.05rem;top:1.55rem;}
.error-box{color:#f7ccc8;font-size:0.12rem;margin-bottom:0.10rem;}
#o-box-up,#o-box-down {width:6.40rem; height:7.60rem;position:absolute;border-radius:0.05rem;}
#o-box-up {background-color:#000;filter:alpha(opacity:40);opacity:0.4;}
#o-box-down{padding:0.30rem 0 0 0.40rem;}
label.form-label {display: block;float: none;height:auto;line-height: 0.12rem;text-align:left;width: auto;font-size:0.14rem;color:#fff;font-weight:bold;text-shadow:0.01rem 0.01rem 0.01rem #4e6877;-o-text-shadow:0.01rem 0.01rem 0.01rem #4e6877;-o-moz-shadow:0.01rem 0.01rem 0.01rem #4e6877;-o-mis-shadow:0.01rem 0.01rem 0.01rem #4e6877;-o-webkit-shadow:0.01rem 0.01rem 0.01rem #4e6877;margin-top:0.16rem;margin-bottom:0.16rem;}
.i-text{ width:4.84rem;height:0.66rem;line-height:0.66rem;border:0.01rem solid #858585;background:#eef3f8;color:#9cb5cd;font-size:0.14rem; text-indent:0.12rem; box-shadow:0.01rem 0.01rem 0.01rem #dfe4e8 inset;-moz-box-shadow:0.01rem 0.01rem 0.01rem #dfe4e8 inset;-webkit-box-shadow:0.01rem 0.01rem 0.01rem #dfe4e8 inset;-o-box-shadow:0.01rem 0.01rem 0.01rem #dfe4e8 inset;-mis-box-shadow:0.01rem 0.01rem 0.01rem #dfe4e8 inset;}
.yzm{float:left; width:2.4rem;margin-right:0.2rem;}
/* left:2.80rem; */
.yzm-img{position:absolute; float:right; cursor:pointer;}

</style>
