<template>
    <div class="Footer">
        <div class=wrapper>
            <a href="https://www.engineering.columbia.edu/"><img :src="require('../assets/ColEng.png')"  class='CE'/></a>
            <a href="https://www.columbia.edu/" ><img :src="require('../assets/Columbia.png')" class='CU'/></a>
            <a href="https://www.cs.columbia.edu/"><img :src="require('../assets/CUCS.png')" class=CUCS></a>
        </div>
    </div>
</template>

<script>
export default {
  name:'Footer',
 
}
</script>

<style scoped >
/* ul */
.Footer{
    bottom:0;
    min-width:100%;
    height: 85px;
    background-color:#000000;
}
.wrapper{
        width:1400px;
        margin:auto;
}
.CE{
    padding-top:22.5px;
    padding-left:255px;
    width:300px;
    height:47px;

; 
}
.CU{
    float:right;
    padding-top:22.5px;
    width: 300px;
    height:47px;
}
.CUCS{
    float:left;
    padding-top:22.5px;
    width: 300px;
    height:47px;
}
</style>