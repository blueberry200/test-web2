<template>
    <section id="keepwork">
      <div class="container">
        <h2>敬請期待...</h2>
      </div>
    </section>
</template>

<style scoped>
  #keepwork{
    height: 300px;
    color:rgb(134, 62, 125);
    position: relative;
    background: #f7fbfe;
  }

  #keepwork h2{
    position: absolute;
    animation: mymove 5s infinite linear;

  }

  @keyframes mymove{
  0%   {top: 100px; left: 42%;}
  25%  {top: 150px; left: 42%;}
  50%  {top: 100px; left: 42%;}
  75%  {top: 50px; left: 42%;}
  100% {top: 100px; left: 42%;}
  }

</style>

<script>
  export default{
    name:'keepWork'
  }

</script>