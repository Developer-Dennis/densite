<template>
  <h1 className='services'>Services We Offer</h1>
   <figure>
        <div class="row">
            <div class="column">
                <img class="serviceimage" :src="image" alt="web development" style="width:100%;" />
                <figcaption className='heading'><b><a :href="buyvitu" style="text-decoration:none;color:black; font-size: 20px; color:#9c0e9c;">Buy Vitu</a> </b></figcaption>
                <figcaption className='text'>Buy vitu is a web application which is used to sell second hand phones where a seller can post image,description,price,location and contact details and they buyer can check the phone if he/she likes it he/she can contact the seller. The languages i used are Express js,Ejs,Mysql</figcaption>
            </div>
            <div class="column">
                    <img class="serviceimage" :src="image1" alt="web design" style="width:100%" />
                <figcaption className='heading'><b><a :href="buyvitu" style="text-decoration:none;color:black; font-size: 20px; color:#9c0e9c;">Notes App</a> </b></figcaption>
                <figcaption  className='text'>Tyds is a social media web application that allows users to create account,sign in and post tyds which is text. The languages i used are Express js,Ejs,Mysql</figcaption>
            </div>
            <div class="column">
                    <img class="serviceimage" :src="image2" alt="Twitter marketting" style="width:100%" />
                <figcaption className='heading'><b><a :href="buyvitu" style="text-decoration:none;color:black; font-size: 20px; color:#9c0e9c;">Tyds</a> </b></figcaption>
                <figcaption className='text'>Notes app is a web application that enable a user create an account sign in create a note edit,delete and its secure since you cannot see other users notes. The languages i used are Express js,Ejs,Mysql</figcaption>
            </div>
        </div>
</figure>
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


h1{
    text-align: center;
}
.services{
    margin-left: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
}
.row{
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 150px;
}

.column img{
    height:250px;
}
.row .column .servicesimage img{
    margin-top: 90px;
    position: relative; 
    float: left;
    padding-top: 10px;
}
figcaption{
    margin-top: 10px; 

}
figure .row  .heading {
    font-size: 30px;
    padding-top:30px;
}
figure .row .column .text{
    padding-top:5px;
    font-size: 18px;
    padding-left: 30px;
}
.btn{
      padding: 20px;
      color:rebeccapurple;
      font-size: 25px;
      display: inline-block;
}
.row {
    display: flex;
}
.column {
    flex: 33.33%;
    padding: 5px;
    height:100%;
    padding-bottom: 20px;
}

@media screen and (max-width:500px){
    h1{
    text-align: center;
}
.services{
    margin-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
}
.row{
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 100px;
}

.column img{
    height:170px;
    width: 100%;
}
.row .column .servicesimage img{
    margin-top: 90px;
    padding-top: 10px;
}
figcaption{
    margin-top: 10px; 

}
figure .row  .heading {
    font-size: 30px;
    padding-top:30px;
}
figure .row .column .text{
    padding-top:5px;
    font-size: 18px;
    padding-left: 10px;
}
.btn{
      padding: 20px;
      color:rebeccapurple;
      font-size: 25px;
      display: inline-block;
}
.row {
    display: flex;
}
.column {
    padding: 5px;
    padding-bottom: 20px;
}

}

</style>