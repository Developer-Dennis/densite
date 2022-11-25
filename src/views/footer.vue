<template>
     <footer>
      <p>Copyright © 2022 <a href="#">Dennis Kemboi</a> All rights reserved</p>
      <a href="https://www.github.com/Developer-Dennis" target="_blank"><i class="fa-brands fa-github"></i></a>
      <a href="https://www.facebook.com/DENKOGEI" target="_blank"><i class="fa-brands fa-facebook"></i></a>
      <a href="https://www.twitter.com/DEN_KOGEI" target="_blank"><i class="fa-brands fa-twitter"></i></a>
      <a href="https://wa.me/254724554147" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
     </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style>
    
  footer{
    width: 100%;
    background: linear-gradient(45deg, #9c0e9c, midnightblue);
    height: 80px;
    position: fixed;
    bottom: 0;
    text-align: center;
    padding-top: 20px;
    display: flex;
    justify-content: center;
  }
  footer i{
    padding: 7px;
    color: whitesmoke;
    font-size: 20px;
  }
  footer p{
    font-size: 18px;
    color:white;

  }
  footer p a{
    color: whitesmoke;
  }
</style>