<template>
        <div class='home'>
           <img :src="image" />
            <h1 class='desc'><b>Hi Am Dennis Kemboi,</b></h1>
            <p class='paragraph'><b>  IT Graduate, Web Developer,Web Designer, Twitter Strategist</b></p>
        </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  data(){
    return{
      image:  "./img/home.jpg",
    }
  },
  components: {
    
  }
}
</script>
<style scoped>

.home{
  width: 100%;
}
.home img{
    margin-top: 0px;
    height:350px;
    width:300px;
    border-radius: 50%;
    float: left;
    margin-bottom: 0;
}

div .options{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 30%;
  margin-left: 50%;
  
}
.options a {
  display: inline-block;
  color: #eee;
  background: linear-gradient(45deg, rgb(156, 14, 156), midnightblue);
  text-decoration: none;
  padding: 25px;
  margin-top: 25px;
}

.desc{
  text-shadow: 2px 2px yellow;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: top;
    font-size: 50px;
}
.paragraph{
    margin-top: 55px; 
    padding-left: 40px;
    display: flex;
    justify-content: center;
    align-items: top;
    font-size: 30px;
}
@media only screen and (max-width:500px){
  .home{
    width: 100%;
  }
  .home img{
    padding: 0;
    max-width: 500px;
    max-height: 500px;
    margin: 0;
  }
 .desc{
    width: 100%;
    padding: 0;
    margin: 0;
    font-size: 28px;
    bottom: 0;
    right: 20px;
    display: block;
    float: left;
    margin-bottom: 10px;
  }
  .paragraph{
    float: left;
    padding: 0;
    margin: 0;
    font-size: 20px;
    bottom: 0;
    right: 0;
    display: block;
    margin-left:10px
  }
  .options{
    margin-top: 15px;
    margin-left: 0;
    padding: 0;
    border-radius: 5px;
    
  }
  .options .hire {
    margin:0;
    padding-left: 50px;
    width:whatever; 
    margin:0 auto;
  }
  .options .resume{
    margin:0;
    padding-left: 50px;
    width:whatever; 
    margin:0 auto;
  }
}
</style>