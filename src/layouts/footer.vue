<template>
    <div class="footer1 mt10 tc">
      <p class="phone">联系电话：0311-1234567</p>
      <p class="support">技术支持：某某网络科技有限公司</p>
      <p class="copyright">Copyright &copy; 2014.Company name All rights reserved.</p>
    </div>
</template>

<script>
export default {
  name: 'footer1',
  data(){
	  return {
		  
	  }
  },
  components: {
    
  },
  mounted() {
  	
  },
  updated() {
  	
  },
  methods:{}
}
</script>

<style scoped>
.footer1{height:0.95rem;background:#fd888e;padding-top:0.10rem;width:6.40rem;text-align: center;color:#FFFFFF;position:fixed;left: 0;bottom: 0;}
.footer1 p.phone{height:0.30rem;line-height:0.30rem;font-size:0.14rem;margin-bottom:0.12rem}
.footer1 p.copyright,.footer1 p.support{height:0.22rem;font-size:0.08rem;line-height:0.22rem;}
</style>
