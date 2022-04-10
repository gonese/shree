<template>
    <div class=head>
        <div class=wrapper>
                    <img class=logo :src="require('../assets/logo.png')"/>
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
        height:70px;
        text-align: left;
        min-width:100%;
        position: relative;
    }
    .wrapper{
        width:1400px;
        margin:auto;
    }
    .logo{
        padding-left: 5%;
        width:70px;
        height: 70px;
    }
    .title{
        position:absolute;
        bottom:0;
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