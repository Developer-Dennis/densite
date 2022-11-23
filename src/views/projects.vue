<template>
  <h2>My Projects</h2>

<div class="card">
  <div id = "leftbox">
    <img :src="image" alt="buyvitu" style="width:100%" />
    <div class="container">
      <h4><b>Buy Vitu</b></h4> 
      <p>Buy vitu is a web application which is used to sell second hand phones where a seller can post image,description,price,location and contact details and they buyer can check the phone if he/she likes it he/she can contact the seller. The languages i used are Express js,Ejs,Mysql</p> 
  </div>  </div>
</div>


<div class="card">
  <div id = "middlebox">
    <img :src="image1" alt="buyvitu" style="width:100%" />
    <div class="container">
      <h4><b>Tyds</b></h4> 
      <p>Tyds is a social media web application that allows users to create account,sign in and post tyds which is text. The languages i used are Express js,Ejs,Mysql</p> 
    </div>
  </div>
</div>


<div class="card">
  <div id = "rightbox">
    <img :src="image2" alt="buyvitu" style="width:100%" />
    <div class="container">
      <h4><b>Notes App</b></h4> 
      <p>Notes app is a web application that enable a user create an account sign in create a note edit,delete and its secure since you cannot see other users notes. The languages i used are Express js,Ejs,Mysql</p> 
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Projects',
  data(){
    return{
      image:  "./img/buyvitu.png",
      image1:  "./img/notesapp.jpg",
      image2:  "./img/tyds.jpg",
    }
  }
}
</script>

<style>
    .card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}

#leftbox {
  float:left;
  width:250px;
  height:400px;
  margin-left: 10px;
}
#middlebox{
  padding: 20px;
  float:left;
  width:400px;
  height:160px;
  margin-left: 10px;
}
#rightbox{
  float:right;
  width:400px;
  height:160px;
  margin-left: 10px;
}

</style>