<template>
  <div class="container">
          <h2>Contact</h2>
          <p>Mailing Address: <br>
          450 Mudd Hall <br>
          500 West, 120 Street <br>
          Computer Science Department <br>
          Columbia University <br>
          New York, NY 10027</p>
          <p>Office: 621 Schapiro Building <br>
            Email: <a href="mailto:nayar@cs.columbia.edu ">nayar@cs.columbia.edu </a><br>
            Phone: (212) 853-8458 <br>
            Fax: (212) 939-7172 </p>
          <p>Administrative Assistant: <br>
          Anne Fleming <br>
          Phone: (212) 853 8423 <br>
          Email: <a href="mailto:fleming@cs.columbia.edu">fleming@cs.columbia.edu </a></p>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    width:100%;
    max-width:1000px;
    margin:auto;
    align-content: center;
    padding-bottom:35px;
    display:block;
    padding-top:16px;

}
a{
      color:black;
    text-decoration: none;
}
a:hover{
    color:rgba(103, 103, 104, 0.842)
}
h2{
    font-family: "Raleway";
    font-weight: 600;
    margin-top:32px;
    margin-bottom:32px;
}
</style>