<template>
<div class="container">
        <div class=intro >
            <p class=p>Shree K. Nayar is the T. C. Chang Professor of Computer Science at Columbia University.
            He heads the Columbia Vision Laboratory (<a href="https://www.cs.columbia.edu/CAVE/" class="list-element">CAVE</a>), which develops computational imaging and computer
            vision systems. His research is focused on three areas - the creation of novel cameras that provide
            new forms of visual information, the design of physics-based models for vision and graphics, and
            the development of algorithms for understanding scenes from images. His work is motivated by
            applications in the fields of imaging, computer vision, robotics, virtual reality, augmented reality,
            visual communication, computer graphics and human-computer interfaces.</p>

            <ul class="list-inline">
                <li><router-link class=list-element to="/bio">Short Bio</router-link></li>
                <li><router-link class=list-element2 to="/cv">Short CV</router-link></li>
            </ul>
            <ul class="list-index">
                <li><a href="https://fpcv.cs.columbia.edu/" class="list-element">Computer Vision Lectures</a></li>
                <li><a href="http://www.bigshotcamera.com/" class="list-element">Bigshot: Digital Camera for Experiential Learning</a></li>
            </ul>
            </div>
            <img class=image :src="require('../assets/shree.jpg')">
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
    min-height: 100vh;
    /* align-content: center; */
    padding-top: 3%;
    padding-bottom:1%;
    display:flex;
}
.image{
    /* float:right; */
    padding-left:50px;
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
    padding:0;

}
.title{
    font-size:20px;
    font-weight: bold;
}
.list-element{
    color:rgb(72, 139, 227);
    text-decoration: none;
    font-size:20px;
    
}
.list-element:hover, .list-element2:hover{
    color:rgba(103, 103, 104, 0.842)
}
.list-element2{
    color:rgb(72, 139, 227);
    text-decoration: none;
    font-size:20px;
    padding-left:20px;
    
}

.list-inline{
    list-style: none;
    color:black;
    display: flex;
    padding:0;
    width:250px;
    margin-bottom:0;
}
</style>