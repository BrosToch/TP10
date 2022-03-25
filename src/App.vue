<template>

  <router-view/>
  <Login/>
  </template>



<script>
import Login from './components/login_page.vue';

export default {
  name: 'App',
  components:{
    // eslint-disable-next-line vue/no-unused-components
    Login
  }
  
}
</script>
