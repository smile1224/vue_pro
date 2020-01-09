<template>
  <today-cell v-for='n of 10'/>
</template>

<script>
	import Today-cell from '@/components/today-cell.vue'
export default {
  name: 'today-cell',
  data(){
	  return {
	  }
  },
  components: {
    Today-cell,
  },
  mounted() {
  	
  },
  updated() {
  	
  },
  methods:{}
}
</script>

<style scoped>
.column {
  
}
</style>
