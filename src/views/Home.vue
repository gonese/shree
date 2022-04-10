<template>
<div class="container">
    <!-- <div class=wrapper> -->
        <div class=intro >
            <p class=p>Shree K. Nayar is the T. C. Chang Professor of Computer Science at Columbia University.
            He heads the Columbia Vision Laboratory (<a href="https://www.cs.columbia.edu/CAVE/" class="text-index-url">CAVE</a>), which develops computational imaging and computer
            vision systems. His research is focused on three areas - the creation of novel cameras that provide
            new forms of visual information, the design of physics-based models for vision and graphics, and
            the development of algorithms for understanding scenes from images. His work is motivated by
            applications in the fields of imaging, computer vision, robotics, virtual reality, augmented reality,
            visual communication, computer graphics and human-computer interfaces.</p>
            <ul class="list-index">
                    <p class=title>Research: </p>
                <li><a href="https://www.cs.columbia.edu/CAVE/" class="list-element">Columbia Imaging and Vision Laboratory(CAVE)</a></li>
                <li><a href="https://www.cs.columbia.edu/CAVE/publications/" class="list-element">Publications</a></li>
            </ul>
            <ul class="list-index">
                <p class=title>Education: </p>
                <li><a href="https://fpcv.cs.columbia.edu/" class="list-element">Lecture Series: First Principles of Computer Vision</a></li>
                <li><a href="http://www.bigshotcamera.com/" class="list-element">Bigshot: Digital Camera for Experiential Learning</a></li>
            </ul>
            </div>
            <img class=image src="http://www.cs.columbia.edu/~nayar/assets/shree.jpg">
    <!-- </div> -->
</div>
</template>

<script>
export default {

}
</script>

<style>
.container{
    width:1000px;
    margin:auto;
    align-content: center;
    padding-top: 3%;
    padding-bottom:1%;
}
.image{
    float:right;
    width:428px;
    height: 537px;
}
.intro{
    float:left;
    padding-left: auto;
    margin-top:0;
    width:500px;

}
.p{
    margin:0;
}
.list-index{
    list-style: none;
    padding:0;

}
.title{
    font-size:20px;
    font-weight: bold;
}
.list-element{
    /* color:black; */
    text-decoration: none;
    
}
.list-element:hover{
    color:rgba(103, 103, 104, 0.842)
}
</style>