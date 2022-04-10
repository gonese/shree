<template>
  <Header/>
  <router-view class=content>

  </router-view>
  <Footer/>
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
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;600');

body,html,#app{
    margin:0;
    padding:0;
    min-height:100%;
    width:100%;

}

.content{
  font-family:'-apple-system','BlinkMacSystemFont',"Segoe UI",'Roboto',"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji", 'SFMono-Regular','Menlo,Monaco','Consolas',"Liberation Mono","Courier New",monospace;
  font-size:18px;
  line-height: 1.6em;
  height: 80vh;
}
</style>
