<template>
    <div class=body>
        <!-- <ul class="navBar">

            <li class = "nav-item" v-for="url in urls"
            :key="url.id" 
            :ref="'nav-item_' + url.id"
            >
                <router-link v-if="!url.external" @click="sliderIndicator(url.id)"  :to=url.link  class="nav-item-url" :class="url.id === selectedIndex?'active':null">
                    {{url.text}}
                </router-link>
                <a v-else :href="url.link" @click="sliderIndicator(url.id)"  class="nav-item-url" :class="url.id === selectedIndex?'active':null">
                       {{url.text}}
                </a>
            </li>
        </ul> -->
<nav class="navbar navbar-expand-lg">
    <a class=navbar-brand></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">
      </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav align-items-end">
          <li class="nav-item" v-for="url in urls" :key="url.id">
                <router-link v-if="!url.external" @click="sliderIndicator(url.id)"  :to=url.link  class="nav-link" :class="url.id === selectedIndex?'active':null">
                    {{url.text}}
                </router-link>
                <a v-else :href="url.link" @click="sliderIndicator(url.id)"  class="nav-link" :class="url.id === selectedIndex?'active':null">
                       {{url.text}}
                </a>
          </li>
      </ul>

  </div>
</nav>
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
                id:2,text:'Research',link:'https://cave.cs.columbia.edu/',external:1
            },
            {
                id:3,text:'Publications',link:'https://cave.cs.columbia.edu/publications',external:1
            },
            {
                id:4,text:'Lectures',link:'https://fpcv.cs.columbia.edu/',external:1
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
<style lang="scss">

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
.navbar .navbar-expand-lg .bg-dark .navbar-dark{
    background-color: var(--navBar-background-color);
    width: 600px;
    align-content: right;
}

.navbar-nav .nav-item .nav-link{
    color:white;
}
.navbar-toggler-icon{
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.9' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

/* ul */
.navBar{
    float:left;
    min-width: 600px;
    text-align: middle;
    background-color:var(--navBar-background-color);
    display:inline;
    border-radius: 1px;
    list-style: inside;
    margin:0;
    padding:0;
}
.navbar-collapse{
    background-color: black;
}
/* li */
.nav-item{
    margin:auto;
    display:flex;
    text-decoration: none;

}


/* a */

.navbar-nav > li > a 
{
    font-family:'Raleway', sans-serif;
    font-size:20px;
    display: inline-block;
    justify-content: space-around;
    align-items: center;
    color:var(--url-text-color);
    text-decoration: none;
    padding: 0;
    margin-right: 50px;
    vertical-align: bottom;
}
.navbar-nav .nav-item .nav-link:hover{
     color:var(--active-color);
}
</style>