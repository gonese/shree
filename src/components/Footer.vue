<template>
    <div class="Footer">
        <div class=wrapper>
            <a href="https://www.engineering.columbia.edu/"><img src="https://www.cs.columbia.edu/~nayar/img/ColEng.png"  class='CE'/></a>
            <a href="https://www.columbia.edu/" ><img src="https://www.cs.columbia.edu/~nayar/img/Columbia.png" class='CU'/></a>
            <a href="https://www.cs.columbia.edu/"><img src="https://www.cs.columbia.edu/~nayar/img/CUCS.png" class=CUCS></a>
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
    min-width:1400px;
    width:100%;
    height: 85px;
    background-color:#000000;
}
.wrapper{
        width:1400px;
        margin:auto;
}
.CE{
    margin-top:22.5px;
    margin-left:255px;
    width:300px;
    height:47px;

; 
}
.CU{
    float:right;
    margin-top:22.5px;
    width: 300px;
    height:47px;
}
.CUCS{
    float:left;
    margin-top:22.5px;
    width: 300px;
    height:47px;
}

@media (max-width:1000px) {
    a{
        width:fit-content ;
        margin: 0 auto;
        margin-bottom:2rem;
        }
    .wrapper{
           width:100%;
            min-width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
    }

    .Footer{
          width:100%;
            min-width: 100%;
        height: fit-content;
    }

    .CE{
        float: none;
        margin-top:22.5px;
        margin-left:0;

        height:60px;
    }

    .CU{
        float: none;
             height:60px;
    }
    .CUCS{
        float: none;
        height:60px;

    }

}
</style>