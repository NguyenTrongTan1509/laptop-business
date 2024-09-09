<template>
<div>
  <Navbar/>
  <v-app>
    <router-view />
    </v-app>
    <Footer/>
</div>
</template>

<script>
import Footer from '@/components/Web/Footer.vue';
import Navbar from '@/components/Web/Navbar.vue';


export default{
    name: 'HomeView',
    components: { Navbar, Footer }
};
</script>
