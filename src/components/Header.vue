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
<style lang="scss" scoped>
    .head{
        background-color: rgb(0, 0, 0);
        height:100px;
        min-width:1400px;
  
    }
    .wrapper{
        width:1400px;
        margin:auto;
              display:flex;
    }
    .title{
        padding-top:20px;
        padding-left:4.5em;
        text-decoration: none;
        font-size:43px;
        font-weight: 600;
        font-family:'Raleway', sans-serif;;
        color: rgb(255, 255, 255);
    }
    .nav{
        padding-top:58px;
        padding-left:7.9em;
  
    }
    @media (max-width:1000px) {
        .wrapper{
            width:100%;
            min-width: 100%;
        }
        .head{
             width:100%;
            min-width: 100%;
        }
        /* .nav{
            display:none;
        } */
        .title{
            padding-left:4%;
            font-size: 2rem;
        }
        .nav{
            position:absolute;
            right:0;
            padding:45px 0 0 0;
        }
    }
</style>