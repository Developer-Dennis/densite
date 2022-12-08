<template>
  <h1 className='services'>Services We Offer</h1>
   <figure>
        <div class="row">
            <div class="column">
                <img class="serviceimage" :src="image1" alt="web development" style="width:100%;" />
                <figcaption className='heading'>Web Application Development</figcaption>
                <figcaption className='text'>We will build a qualityand reliable web application &nbsp; that will enable your to perform your business &nbsp; function without a glitch or misfunction</figcaption>
            </div>
            <div class="column">
                    <img class="serviceimage" :src="image2" alt="web design" style="width:100%" />
                <figcaption className='heading'>Website Design</figcaption>
                <figcaption  className='text'>We will help you design a website that will market your business on a global scale by using latest technologies to produce the best visually appealing website</figcaption>
            </div>
            <div class="column">
                    <img class="serviceimage" :src="image3" alt="Twitter marketting" style="width:100%" />
                <figcaption className='heading'>Twitter Promotion/Marketing</figcaption>
                <figcaption className='text'>We will help you market your products and services on Twitter which will inturn be visible  to many people  henve increasing your sales.</figcaption>
            </div>
        </div>
</figure>
</template>

<script>
export default {
    name: 'Services',
  data(){
    return{
      image1:  "./img/image1.jpg",
      image2:  "./img/image2.jpeg",
      image3:  "./img/image3.jpg",
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
    flex: 33.33%;
    padding: 5px;
    height:100%;
    padding-bottom: 20px;
}

@media only screen and (max-width:500px){
    h1{
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
    .servicesimage{
    max-width: 50%;
        
   }
   
}

</style>