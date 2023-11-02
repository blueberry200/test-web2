<template>
  <section id="homeVideo2">
    <div class="container">
      <div class="justify-content-center section-title">
        <h2>行銷價值</h2>
        <p>曝光網站是發揮價值的前提，時刻把關SEO成效是我們設計的核心理念。</p>
      </div>
      <div class="row justify-content-center">
        <div class="col-9 videoBox">
          <iframe src="https://www.youtube.com/embed/X1hyqzmKwoo" title="seo形象影片" allowfullscreen></iframe>
          <div class="col-9 videoBoxIn"></div>
          <div class="col-9 videoBoxIn2"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .videoBox{
    position:relative;
    padding-bottom:56.25%;
    margin:100px;
    box-shadow: -10px -15px 4px 5px rgb(109, 123, 214);
  }
  .videoBoxIn{
    position:absolute;
    width:99%;
    height:97.5%;
    top:16%;
    left:9%;
    background-color: white;
    z-index: 15;
  }
  .videoBoxIn2{
    position:absolute;
    width:100%;
    height:100%;
    top:15.5%;
    left:8.5%;
    background-color: rgb(109, 123, 214);
    z-index: 10;
  }
  iframe{
    position:absolute;
    width:100%;
    height:100%;
    z-index: 20;
  }
</style>

<script>
  export default{
    name:'homeVideo2'
  }

</script>