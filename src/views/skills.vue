<template>
  

  <div class="box">
    <h1 style="text-align:center; padding-top:10px">My Skills</h1>
      <ul>
          <li v-for="skill in skills" :key="skill">
          <div class="lang">{{skill.lang}}</div>

          <div class="bar">
            <div class="progress" v-bind:style="{'background':skill.color,'width':skill.percent + '%'}"></div>
            <span class="percent">{{skill.percent}}%</span>
          </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data(){
    return{
      title:  "Front End",
      skills: [
                { lang:"HTML5",      	percent:90,   color:"#e34c26"	},
                { lang:"CSS3", 			percent:76,   color:"#264de4"	},
                { lang:"JAVASCRIPT", 	percent:80,   color:"#f0db4f"	},
                { lang:"NODE JS",	percent:80,   color:" #68a063"	},
                { lang:"VUE",		 	percent:60,   color: " #35495e"	},
                { lang:"MYSQL", 		percent:70,   color:"#f29111	"	}
 				 ]
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.box{
  width: 800px;
  padding: 40px;
  margin: 50px auto;
  background: #f3f3f3;
  box-shadow:3px 3px 30px 3px rgba(0, 0, 0, 0.1);
}
ul li{
  list-style-type: none;
  padding: 10px;
}
.lang{
  margin: 5px;
  font-size: 20px;
}
.bar{
  width: 100%;
  background: #dfdfdf;
  overflow: hidden;
  padding: 5px;
}
.progress{
  float: left;
  padding: 15px;
}
.percent{
  float: right;
  font-weight: 600;
  height: 30px;
  line-height: 30px;
}
</style>                    