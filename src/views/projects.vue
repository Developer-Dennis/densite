<template>
  <div class="contain">
    <h2 style="font-size:28px;padding:10px;">My Projects</h2>
    <div class="card">
      <div id = "leftbox">
        <img :src="image" alt="buyvitu" style="width:100%" />
        <div class="container">
          <a :href="buyvitu" style="text-decoration:none;color:black; font-size: 20px; color:#9c0e9c;">Buy Vitu</a> 
          <p>Buy vitu is a web application which is used to sell second hand phones where a seller can post image,description,price,location and contact details and they buyer can check the phone if he/she likes it he/she can contact the seller. The languages i used are Express js,Ejs,Mysql</p> 
      </div>  </div>
    </div>

    <div class="card">
      <div id = "middlebox">
        <img :src="image1" alt="Tyds" style="width:100%" />
        <div class="container">
          <a :href="Tyds" style="text-decoration:none;color:#9c0e9c;;font-size: 20px;">Tidings</a>  
          <p>Tyds is a social media web application that allows users to create account,sign in and post tyds which is text. The languages i used are Express js,Ejs,Mysql</p> 
        </div>
      </div>
    </div>

    <div class="card">
      <div id = "rightbox">
        <img :src="image2" alt="notesapp" style="width:100%" />
        <div class="container">
          <a :href="NotesApp" style="text-decoration:none;color:black;font-size: 20px;color:#9c0e9c;">NotesApp</a> 
          <p>Notes app is a web application that enable a user create an account sign in create a note edit,delete and its secure since you cannot see other users notes. The languages i used are Express js,Ejs,Mysql</p> 
        </div>
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

.container p{
  font-size: 18px;
}

#leftbox {
  float:left;
  width:400px;
  height:160px;
  padding-left: 20px;
  margin-left: 30px;
}
#middlebox{
  float:left;
  width:400px;
  height:160px;
  padding-left: 20px;
  margin-left: 30px;
}
#rightbox{
  float:right;
  width:400px;
  height:160px;
  padding-left: 20px;
  margin-right: 30px;
}

@media  screen and (max-width:620px) {
  .card{
    width: 40%;
  }
  .contain{
    width:100%;
  }
  #leftbox{
    padding: 20px;
    font-size:20px;
  }
  .card{
    width: 80%;
    
  }
}

</style>