<template>
  <ul class="nav title mt10">
    <li><a href="content.html">关于我们</a></li>
    <li><a href="content.html">公司文化</a></li>
    <li><a href="">招贤纳士</a></li>
    <li><a href="news_list.html">新闻动态</a></li>
    <li><a href="" class="last">成功案例</a></li>
  </ul>
</template>

<script>
export default {
  name: 'nav',
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
ul.nav li{width:20%;height:19px;padding:17px 0;float:left;display:inline;}
ul.nav li a{display:block;border-right:solid 2px #fff;text-align:center;color:#fff;height:19px;line-height:19px;overflow:hidden;}
ul.nav li a.last{border-right:solid 1px #fd888e;}
</style>
