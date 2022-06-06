<template>
    <div class=container v-if="loaded">
        <p class=MainTitle>Recent Press</p>
        <div class=item v-for="item in rp" :key="item">
            <a class=url :href="item.url">{{item.text}}</a>
            <p class=info>{{item.source}}</p>
        </div>
        <br>
        <br>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            rp:this.rp,
            loaded:this.loaded
        }
    },
    created(){
        // axios.get("http://localhost:8080/api/Statics/Press/Press.json").then((res)=>{this.rp=res.data 
        //  this.loaded = true }
        //  )
         axios.get("./jsons/Press.json").then((res)=>{this.rp=res.data 
        this.loaded = true})
    }
}
</script>

<style scoped>
.container{
    height: fit-content;
    width: 100%;
    max-width:1000px;
    margin-left:auto;
    margin-right: auto;
    text-align: left;
    font-size: 18px;
    padding-top:16px;
} .MainTitle{
        font-family:'Raleway', sans-serif;
        font-size: 30px;
        width:100%;
        text-align: left;
        font-weight: 600;
            margin-top:32px;
    margin-bottom:32px;
    }

    .info{
        margin-top:0;
    }
    .url{
        color:black;
        text-decoration: none;
        font-weight: 600;
    }
    .url:hover{
        color: #a5a2a2;
    } 
</style>