<template>
  <div class=w>
  <Header/>
  <router-view class=content>

  </router-view>
  <Footer/>
</div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;700');

body,html,#app{
    margin:0;
    padding:0;
    min-height:100vh;
    min-width: 100%;
    width:fit-content;

}

.content{
  font-family:'-apple-system','BlinkMacSystemFont',"Segoe UI",'Roboto',"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji", 'SFMono-Regular','Menlo,Monaco','Consolas',"Liberation Mono","Courier New",monospace;
  font-size:18px;
  width:1600px;
  line-height: 1.6em;
  min-height: 90vh;
  height:fit-content;
  margin:auto;
}
@media (max-width:1000px) {
  .content{
  width:100vh;
  line-height: 1.6em;
  min-height: 90vh;
  height:fit-content;
  margin:auto;
}
.w{
  width: 100%;
}
  
}
</style>
