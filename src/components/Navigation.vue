<template>
    <div class=body>
        <ul class="navBar">

            <li class = "nav-item" v-for="url in urls"
            :key="url.id" 
            :ref="'nav-item_' + url.id"
            >
                <router-link v-if="!url.external"   :to=url.link  class="nav-item-url" :class="url.id === selectedIndex?'active':null">
                    {{url.text}}
                </router-link>
                <a v-else :href="url.link" class="nav-item-url" :class="url.id === selectedIndex?'active':null">
                       {{url.text}}
                </a>
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
                id:2,text:'CAVE',link:'https://cave.cs.columbia.edu/',external:1
            },
            {
                id:3,text:'Cave Pub',link:'https://cave.cs.columbia.edu/#/publications',external:1
            },
            {
                id:4,text:'FPCV',link:'https://fpcv.cs.columbia.edu/',external:1
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

      }
}
}
</script>
<style >
/* font */
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