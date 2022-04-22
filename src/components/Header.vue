<template>
    <div class=head>
        <div class=wrapper>
                    <router-link class=title :to="'/'" >Shree K. Nayar</router-link>
                    <Navigation class=nav /> 
        </div>
    </div>    
</template>
<script>
import Navigation from "./Navigation.vue"
export default {
    name:'Header',
    components: {
        Navigation
    }

}
</script>
<style scoped>
    .head{
        background-color: rgb(0, 0, 0);
        height:100px;
        text-align: left;
        min-width:1650px;
        position: relative;
    }
    .wrapper{
        width:1400px;
        margin:auto;
    }
    .logo{
        padding-left: 5%;
        padding-top: 25px;
        width:70px;
        height: 70px;
    }
    .title{
        position:absolute;
        bottom:12px;
        text-decoration: none;
        font-size:43px;
        font-weight: 600;
        font-family:'Raleway', sans-serif;;
        color: rgb(255, 255, 255);
    }
    .nav{
        width: 500px;
        position:absolute;
        bottom: 4px;
        left:45%;
    }

</style>