<template>
 <div class="container">
  <h1 class="text-center">Paises API</h1>
  <CardList>

  </CardList>
 </div>
  
</template>

<script>

import CardList from './components/CardList.vue'

export default {
  name: 'App',
  components: {
    CardList
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
