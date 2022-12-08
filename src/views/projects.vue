<template>
  <div class="container">
    <h2 style="font-size:28px;padding:10px;">My Projects</h2>
    <div class="card" style="float:left;">
      <div id = "leftbox">
        <img :src="image" alt="buyvitu" style="width:100%" />
          <a :href="buyvitu" style="text-decoration:none;color:black; font-size: 20px; color:#9c0e9c;">Buy Vitu</a> 
          <p  style="font-size:18px">Buy vitu is a web application which is used to sell second hand phones where a seller can post image,description,price,location and contact details and they buyer can check the phone if he/she likes it he/she can contact the seller. The languages i used are Express js,Ejs,Mysql</p> 
    </div>
    </div>

    <div class="card" style="float:left;">
      <div id = "middlebox">
        <img :src="image1" alt="Tyds" style="width:100%" />
          <a :href="Tyds" style="text-decoration:none;color:#9c0e9c;;font-size: 20px;">Tidings</a>  
          <p  style="font-size:18px">Tyds is a social media web application that allows users to create account,sign in and post tyds which is text. The languages i used are Express js,Ejs,Mysql</p> 
        
      </div>
    </div>

    <div class="card" style="float:left;">
      <div id = "rightbox">
        <img :src="image2" alt="notesapp" style="width:100%" />
          <a :href="NotesApp" style="text-decoration:none;color:black;font-size: 20px;color:#9c0e9c;">NotesApp</a> 
          <p style="font-size:18px">Notes app is a web application that enable a user create an account sign in create a note edit,delete and its secure since you cannot see other users notes. The languages i used are Express js,Ejs,Mysql</p> 
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
      buyvitu: "https://github.com/Developer-Dennis/Buy-vitu",
      Tyds: "https://github.com/Developer-Dennis/tidings",
      NotesApp: "https://github.com/Developer-Dennis/notesApp"
    }
  }
}
</script>

<style>
      .card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.container {
  padding: 2px 16px;
}
#leftbox {
  float:left;
  margin-left: 10px;
  margin-right: 10px;
}
#middlebox{
  padding: 20px;
  float:left;
  margin-left: 10px;
  margin-right: 10px;
}
#rightbox{
  float:right;
  margin-left: 10px;
  margin-right: 10px;
}


</style>