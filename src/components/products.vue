<template>
  <div class="products">
    <ul>
		<router-link tag='li' v-for="n of 6" :key="n"  :to="/pro_detail/+n">
			<li>
				<a href="javascript:;"><img src="/images/product.gif"></a>
				<h4>四倍蚕丝凝白柔肤</h4>
				<h6><span>RMB</span>890</h6>
			</li>
		</router-link>
  	  <a href="pro_detail.html"><img src="/images/product.gif"></a>
  	  <h4>四倍蚕丝凝白柔肤</h4>
  	  <h6><span>RMB</span>895</h6>
  	</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'products',
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
.products li{height:2.90rem;margin-top:0.10rem;border-bottom:dashed 0.01rem #888;float:left;display:inline;margin-bottom:0.08rem}
.products li img{width:1.96rem;height:2.40rem}
.products li h4,.products li h6{color:#888;font-size:0.13rem;height:0.24rem;line-height:0.24rem;overflow:hidden}
.products li h6{font-size:0.15rem;height:0.18rem;line-height:0.18rem;text-align:left;margin-bottom:0.04rem}
.products li h6 span{font-size:0.06rem;position:relative;bottom:0;margin-right:0.05rem}

</style>
