<template>
    <div class=container>
        <p class=MainTitle>Recent Press</p>
        <div class=item v-for="item in rp" :key="item">
            <a class=url :href="item.url">{{item.text}}</a>
            <p class=info>{{item.source}}</p>
        </div>
    </div>
</template>
<script>
import RP from "../assets/RP.json"
export default {
    data(){
        return{
            rp:RP
        }
    }
}
</script>

<style scoped>
.container{
    height: fit-content;
    min-height: 100vh;
    width:1000px;
    margin-left:auto;
    margin-right: auto;
} .MainTitle{
        font-family:'Raleway', sans-serif;
        font-size: 32px;
        width:100%;
        text-align: left;
        font-weight: 600;
    }

    .info{
        margin-top:0;
    }
    .url:hover{
        color:rgba(103, 103, 104, 0.842)
    } 
</style>