<template>
  <div class="banner oh mt10 pr">
    <ul class="pr">
		<router-link tag="li" :to="{path:'/pro_detail',params:{id:1}}">
		<li><a href=""><img src="/images/banner.gif"/></a></li>
		</router-link>
		<router-link tag="li" :to="{path:'/pro_detail',params:{id:2}}">
		<li><a href=""><img src="/images/banner1.png"/></a></li>
		</router-link>
		<router-link tag="li" :to="{path:'/pro_detail',params:{id:3}}">
		<li><a href=""><img src="/images/banner2.png"/></a></li>
		</router-link>
		<router-link tag="li" :to="{path:'/pro_detail',params:{id:4}}">
		<li><a href=""><img src="/images/banner.gif"/></a></li>
		</router-link>
    </ul>
    <div class="focus pa">
      <span class="pa">
		  <a class="current"></a>
		  <a class="current"></a>
	  </span>
    </div>
  </div>
</template>

<script>
	// import $ from 'jquery';
	// import Swipe from '../assets/js/swipe.js'
export default {
    data(){return {}},
    components:{},
    mounted(){
      new Swipe($('.banner')[0],{
        auto:4000,
        continuous:true,
        stopPropation:true,
        callback:function (index,element){
          $('.banner ol li').removeClass('active');
          $('.banner ol li').eq(index).addClass('active');
        }
      })
    },
    updated(){},
    methods:{}
  }
</script>

<style scoped>
.banner ul li{float:left;display:inline;height:3.60rem;width:6.4rem;}
.banner ul li img{width:6.4rem;height:100%}
.banner .focus{height:0.16rem;line-height:0.16rem;padding:0.16rem 0;width:100%;bottom:0;}
.banner .focus span{display:block;right:0.08rem}
.banner .focus span a{display:block;width:0.16rem;height:0.16rem;background:#646464;margin-right:0.18rem;float:left;display:inline;-moz-border-radius:50%;-webkit-border-radius:50%;-o-border-radius:50%;border-radius:50%;cursor:pointer}
.banner .focus span a.current{background:#fff}
</style>
