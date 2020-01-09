<template>
  <form class="book" method="post" action="">
    <input type="hidden" class="countNum" value="10" />
    <div class="info mt10">
      <h4><lable>商品名称：</lable><span>四倍蚕丝凝白柔肤</span></h4>
  	<h4><lable>商品单价：</lable><span>89元</span></h4>
  	<h4 class="num"><lable class="fl">商品数量：</lable><span class="subtract">-</span><input value="1" name="count" class="count" readonly = "true"/><span class="add">+</span></h4>
    </div>
    <p>预定人<input type="text" name="name" class="name" value="输入您的姓名" /></p>
    <p>手机号<input type="text" name="mobile" class="mobile" value="输入您的手机号" /></p>
    <a class="title submit-btn mt10 tc">提交订单</a>
  </form>
</template>

<script>
export default {
  name: 'book',
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
form.book{color:#666;margin-top: 0.55rem;}
form.book a.submit-btn{display:block;color:#fff;cursor:pointer}
form.book div.info,form.book p{width:6.04rem;background:#eaeaea;height:0.55rem;line-height:0.55rem;margin-top:0.10rem;padding:0 0.18rem;font-size:0.14rem}
form.book div.info{height:1.26rem;padding:0.10rem 0.18rem;line-height:0.42rem}
form.book div.info h4 span{color:#fd888e} 
form.book div.info h4.num span,form.book div.info h4.num input{display:block;width:0.40rem;height:0.40rem;float:left;margin-right:0.12rem;background:#fff;line-height:0.40rem;color:#666;text-align:center;border:none}
form.book input.name,form.book input.mobile{width:4.80rem;padding:0.10rem;margin-left:0.20rem;color:#999;border:solid 0.01rem #eaeaea;margin-top:-0.05rem;font-size:0.14rem}
form.book a.submit-btn {display: block;color: #fff;}
.title {height: 0.55rem;line-height: 0.55rem;background: #fd888e;font-size: 0.14rem;font-weight: bold;}
</style>
