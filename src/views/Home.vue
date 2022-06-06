<template>
<div class="container">
        <div class=intro >
            <p class=p>Shree K. Nayar is the T. C. Chang Professor of Computer Science at Columbia University.
            He heads the Columbia Vision Laboratory (<a href="https://cave.cs.columbia.edu/" class="list-element">CAVE</a>), which develops computational imaging and computer
            vision systems. His research is focused on three areas - the creation of novel cameras that provide
            new forms of visual information, the design of physics-based models for vision and graphics, and
            the development of algorithms for understanding scenes from images. His work is motivated by
            applications in the fields of imaging, computer vision, robotics, virtual reality, augmented reality,
            visual communication, computer graphics and human-computer interfaces.        <br>   
               <router-link class=list-element3 to="/bio">Short  Bio</router-link>
            <router-link class=list-element2 to="/cv">Short CV</router-link>
                <router-link class=list-element2 to="/press"> Recent Press</router-link></p>

            <ul class="list-index">
                <li><a href="https://fpcv.cs.columbia.edu/" class="list-element">Computer Vision Lectures</a></li>
                <li><a href="http://www.bigshotcamera.com/" class="list-element">Bigshot Digital Camera</a></li>
            </ul>
            </div>
            <img class=image src="https://www.cs.columbia.edu/~nayar/img/shree.jpg">
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    width:fit-content;
    margin:0 auto;
    height:fit-content;
    padding-top: 3%;
    padding-bottom:3%;
    display:flex;
}

.image{
    /* float:right; */
    margin-left:50px;
    width:428px;
    height: 537px;
}
.intro{
    /* float:left; */
    padding-left: auto;
    margin-top:0;
    width:500px;

}
.p{
    margin:0;
}
.list-index{
    margin:0;
    list-style: none;
    padding-top:45px;
    padding-left:0;
    line-height: 2.1;

}
.title{
    font-size:20px;
    font-weight: bold;
}
.list-element{
    color:black;
    text-decoration: none;
    font-size:20px;
        font-weight: 600;
    
}
.list-element:hover, .list-element2:hover,.list-element3:hover{
    color:rgba(103, 103, 104, 0.842)
}
.list-element2{
    color:black;
    text-decoration: none;
    font-size:18px;
    font-weight: 600;
    padding-left:15px;
    
}
.list-element3{
    color:black;
    text-decoration: none;
    font-size:18px;
    font-weight: 600;
    
}
.list-inline{
    list-style: none;
    color:black;
    display: flex;
    padding:0;
    width:250px;

    margin-bottom:0;
}
@media (max-width:1000px){

    .container{
        width:100%;
        flex-direction: column-reverse;
        justify-content: center;
    }
    .image{
        top:0;
        width: 50%;
        height: 54%;
        margin:0 auto;
    }
    .intro{
        width: 80%;
        margin:0 auto;
        margin-top:3rem;
        margin-bottom:3rem;
    }
}
</style>