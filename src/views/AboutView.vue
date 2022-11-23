<template>
  <div class="aligned">
      <img :src="image" />
      <p>
      Am a software  Developer, with experience in building scalable  websites and web applications.I am a graduate in Diploma in Information Technology,Who learned that you don't need a CS degree to write code.
      My background in Web Application Development, web design, and Twitter Marketting and Promotion. Am fueled by my passion in understanding the nuances of cross-cultural advertising & Promotion and Software development . I considers myself a "forever student," eager to both build and expand my knowledge. My hunger for knowledge and determination to turn information into action and websites has contributed to my success.
    </p>
</div> 
</template>

<script>
export default {
  name: 'About',
  data(){
    return{
      image:  "./img/about.png",
    }
  }
}
</script>

<style>
    
.aligned {
  display: grid;
  grid-template-columns: min-content 1fr;
}
.aligned p{
    padding-top: 200px;
    font-size: 22px;
    padding-left: 0;
    margin-right: 15px;
    color: black;
}
</style>
