<template>
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About Me</router-link>
    <router-link to="/skills">Skills</router-link> 
    <router-link to="/projects">Projects</router-link>
    <router-link to="/contact">Contact</router-link>
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
</style>
