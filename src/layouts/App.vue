<template>
  <div id="app">
	<!-- <Loading/> -->
	<Header/>
	<router-view></router-view>
	<Footer/>
  </div>
</template>

<script>
// import Loading from '@/components/loading.vue'
import Home from '../pages/home.vue'
import Header from './header.vue'
import Footer from '@/layouts/footer.vue'
export default {
  components: {
	Home,Header,Footer
  }
}
</script>

<style>

</style>
