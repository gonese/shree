<template>
    <div class=body>
        <ul class="navBar">

            <li class = "nav-item" v-for="url in urls"
            :key="url.id" 
            :ref="'nav-item_' + url.id"
            >
                <router-link      @click="sliderIndicator(url.id)" :to=url.link  class="nav-item-url" :class="url.id === selectedIndex?'active':null">
                    {{url.text}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
  name:'Navigation',
  data(){
      return {

        selectedIndex:0,

        urls:[
            {
                id:1,text:'Home',link:'/'
            },
            {
                id:2,text:'Biography',link:'/bio'
            },
            {
                id:3,text:'Curriculum Vitae',link:'/cv'
            },
            {
                id:4,text:'Press',link:'/press'
            },
            {
                id:5,text:'Contact',link:'/contact'
            }


        ]
      }
  },
  methods: {
      sliderIndicator(id){
          this.selectedIndex = id;

      },
      testmove(text){
        this.$router.push({
            name:"test",
            query:{
                testid:text
            } }
        )   
      }
}
}
</script>
<style >
/* font */
@import url('http://fonts.cdnfonts.com/css/trajan-pro');
/* colors */
:root {
    --url-text-color:#ffffff;
    --active-color:#9b9999;
    --navBar-background-color:#000000;
    --active-background-color:#0065fd;
}
.body{
    text-align: center;
}
/* ul */
.navBar{
    float:left;
    min-width: 800px;
    text-align: middle;
    background-color:var(--navBar-background-color);
    display:inline-flex;
    border-radius: 1px;
    list-style: inside;
    margin:0;
    padding:0;
}
/* li */
.nav-item{
    margin:auto;
    display:flex;
    text-decoration: none;
}
/* a */
.nav-item-url{
    font-family:'Raleway', sans-serif;
    font-size:20px;
    display: inline-block;
    justify-content: space-around;
    align-items: center;
    color:var(--url-text-color);
    text-decoration: none;
}
.nav-item-url:hover,.nav-item-url.active{
    color:var(--active-color);
    
}
</style>