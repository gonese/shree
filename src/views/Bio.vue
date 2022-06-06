<template>
  <div class=container v-if="loaded"  >
            <div class=a v-for="x in bio" :key="x.id" v-html="x" ></div>

    </div>
</template>

<script scoped>
import axios from 'axios'
export default {
    data(){
        return {
            bio : this.bio,
            loaded : this.loaded
        }
    },
    created(){
        //  axios.get("http://localhost:8080/api/Shree/bio.json").then((res)=>{
        //     this.bio = res.data
        //     this.loaded = true
        //     console.log(this.bio)
        // })

            axios.get("./jsons/bio.json").then((res)=>{
            this.bio = res.data
            this.loaded = true
        })
    
}
}
</script>

<style scoped>
.container{
    min-height: 100vh;
    max-width:1000px;
    width:100%;
    margin-left:auto;
    margin-right: auto;
        padding-bottom: 3em;
    display:block;
    padding-top:16px;
}

::v-deep .list-element:hover{
    color:rgba(103, 103, 104, 0.842)
}
::v-deep .list-element{
    color:black;
    color:black;
    text-decoration: none;
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
</style>