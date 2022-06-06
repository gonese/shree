<template>
  <div class="container" v-if="loaded" >
      <div v-for="x in cv" :key="x.id" v-html="x"></div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            cv :this.cv,
            loaded:this.loaded
        }
    },
    created(){
        //      axios.get("http://localhost:8080/api/Shree/CV.json").then((res)=>{
        //     this.cv = res.data
        //     this.loaded = true
        // })


    axios.get('./jsons/CV.json').then((res)=>{
        this.cv = res.data
        this.loaded = true
    })
}
}
</script>

<style scoped>
.container{
    height: fit-content;
    width:100%;
    max-width:1000px;
    margin-left:auto;
    margin-right: auto;
    display:block;
        padding-top:16px;
        padding-bottom: 3em;
}
::v-deep h2{
    margin-top:32px;
    margin-bottom:32px;
            font-family:'Raleway', sans-serif;
        font-size: 30px;
        width:100%;
        text-align: left;
        font-weight: 600;
        
}
::v-deep h3{
            font-family:'Raleway', sans-serif;
        font-size: 23px;
        width:100%;
        text-align: left;
        font-weight: 600;
}

</style>