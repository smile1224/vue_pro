<template>
  <div class="content">
    <h2>产品名称</h2>
    <div class="article mt10 pro-detail">
      <img src="/images/banner.gif"/>
  	<p>
  	  秋季是一个特别的季节，气温骤降容易引发感冒，而气候也渐渐干燥，对皮肤以及身体的水分平衡较大影响。因此需要增强抵抗力，并且适当补气滋阴，才有助于健康度过秋季。秋季饮食，切勿贪食各种油腻辛辣食品，因为肠胃一下子无法从夏日清淡中适应过来。这个时候来些滋补养颜的粥品，以温养温，以味养胃，绝对是秋季养生的绝佳选择。粥养生在我国具有悠久的历史。各个季节有不同的养生粥，尤其是秋季养生，不如寻找适合自己的粥品，以温养温，以味养胃。
  	</p>
  	<a href="book.html" class="title book-btn mt10 tc">立即预定</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pro_detail',
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
.content{margin-top: 0.55rem;}
.content h2{font-size:0.16rem;height:0.45rem;line-height:0.45rem;color:#000}
.content h6{color:#828282;height:0.30rem;line-height:0.30rem;border-bottom:solid 0.01rem #888}
.content .article{color:#8a898a;line-height:0.23rem;padding:0.10rem 0}
.content .article img{margin-bottom:0.10rem;width: 100%;}
.content .article p{font-size:0.1rem;}
.pro-detail a.book-btn{display:block;color:#fff;cursor:pointer}
.title {height: 0.55rem;line-height: 0.55rem;background: #fd888e;font-size: 0.14rem;font-weight: bold;}
</style>
