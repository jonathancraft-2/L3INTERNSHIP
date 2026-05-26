<script setup>
import HelloWorld from './views/HelloWorld.vue'
import navbar from './components/navbar.vue'
import Footer from './components/footer.vue'
</script>

<template>
  
 <div class="nav">
   <navbar />
 </div>
 <router-view />
  <Footer />
</template>
<style scoped>
.nav{
  padding: 20px;
}
</style>