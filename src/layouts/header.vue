<template>
    <div class="title tc pr top">
      <span class="back-btn"></span>
	  相宜本草用品店
      <div class="nav-btn">
        <ul class="pa">
			<router-link tag="li" to="/content"><a href="content.html">关于我们</a></router-link>
			<router-link tag="li" to="/content"><a href="content.html">公司文化</a></router-link>
			<router-link tag="li" to="/content"><a href="">招贤纳士</a></router-link>
			<router-link tag="li" to="/news"><a href="javascript:;">新闻动态</a></router-link>
			<router-link tag="li" to="/content"><a href="">成功案例</a></router-link>
			<!-- <li><a href="content.html">关于我们</a></li>
			<li><a href="content.html">公司文化</a></li>
			<li><a href="">招贤纳士</a></li>
    	  <li><a href="news_list.html">新闻动态</a></li>
    	  <li><a href="">成功案例</a></li> -->
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'header',
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
.title{width:6.4rem; position:fixed; top:0;left:0; text-align:center;color:#FFFFFF;z-index:2;height:0.55rem;line-height:0.55rem;background:#fd888e;font-size:0.14rem;font-weight:bold}
.top span.back-btn,.top div.nav-btn{display:block;height:0.55rem;position:absolute;top:0;}
.top span.back-btn{width:0.45rem;background:url(../assets/images/back.png);left:0.18rem;}
.top div.nav-btn{width:0.35rem;background:url(../assets/images/nav_btn.png);right:0.18rem;}
.top ul{right:-0.18rem;top:0.55rem;z-index:20;display:none;}
.top ul li{width:1.40rem;background:rgba(00,00,00,0.5);padding:0 0.5em;height:0.55rem;line-height:0.55rem;border-top:solid 0.01rem #fff;}
.top ul li a{color:#fff}
</style>
