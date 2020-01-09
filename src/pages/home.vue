<template>
  <div class="home">
	<logo/>
	<nav/>
    <banner/>
	<title/>
	<!-- <router-link v-for="n of 1" :key="n" :to="/detail/+n"> -->
	<products/>
	<!-- </router-link> -->
  </div>
</template>


<script>
	import Logo from '@/components/logo.vue'
	import Nav from '@/components/nav.vue'
	import Banner from '@/components/banner.vue'
	import Title from '@/components/title.vue'
	import Products from '@/components/products.vue'
export default {
  name: 'home',
  data(){
	  return {
		  
	  }
  },
  components: {
	Logo,
	Nav,
    Banner,
	Title,
	Products
  },
  mounted() {
  	
  },
  updated() {
  	
  },
  methods:{}
}
</script>

<style scoped>
.home {
  
}
</style>
