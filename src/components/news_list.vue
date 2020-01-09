<template>
 <div class="list news">
   <ul>
 	<li>
 	  <a href="content.html"><img src="/images/news.jpg"></a>
 	  <h4><a href="content.html">新闻1</a></h4>
 	  <p>
 	    心若繁花，万物似锦。爱上鸟语花香的惬意
 		心若繁花，万物似锦。爱上鸟语花香的惬意
 		心若繁花，万物似锦。爱上鸟语花香的惬意
 		心若繁花，万物似锦。爱上鸟语花香的惬意
 		心若繁花，万物似锦。爱上鸟语花香的惬意
 		心若繁花，万物似锦。爱上鸟语花香的惬意
       </p>
 	</li>
	</ul>
	</div>
</template>

<script>
export default {
  name: 'news_list',
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
.news{margin-top: 0.55rem;}
.news li{width:4.00rem;padding-left:2.40rem;height:1.50rem}
.news li h4{font-size:0.18rem;}
.news li p{height:1.07rem;font-size:0.1rem;color:#aaa;margin-top:0}
.list li {width: 4.10rem;height: 2.40rem;position: relative;color: #aaa;border-bottom: dashed 0.01rem #888;padding: 0.10rem 0 0.10rem 2.30rem;}
.news li img{position:absolute;left:0;top:0.10rem;width:2.05rem;height:1.50rem}
</style>
