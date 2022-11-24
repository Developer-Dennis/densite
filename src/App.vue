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
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
}
nav {
  display: flex;
  align-items: right;
  background: linear-gradient(45deg, rgb(156, 14, 156), midnightblue);
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


@media only screen and (max-width:500px){
  .nav{
    position: relative;
    width: 100%;
    height: 120px;
    margin-bottom: 8px;
  }
  .nav-links{
        display: flex;
        flex-direction: column;
        position: absolute;
        text-align: center;
        width: 100%;
        left: -100%;
        transition: 0.5s all;
    }
}
</style>
