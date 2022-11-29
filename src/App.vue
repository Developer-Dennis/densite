<template>
  
  <nav>
    <div class="nav-link">
    <router-link to="/">Dennis Kemboi</router-link> 
    <router-link to="/about">About Me</router-link>
    <router-link to="/skills">Skills</router-link> 
    <router-link to="/projects">Projects</router-link>
    <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
  <router-view/>
  <Footer />
</template>


<script>
import Footer from  './views/footer.vue'

export default {
  name: "myApp",
  components: {
    Footer
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: black;
}
*{
  margin: 0;
  padding: 0;
}
nav {
  display: flex;
  align-items: right;
  background: linear-gradient(45deg, #9c0e9c, midnightblue);
  padding: 15px;
}

nav a {
  font-size: 20px;
  text-decoration: none;
  color: white;
  padding: 20px;
}

nav a.router-link-exact-active {
  color: yellow;
}



</style>
