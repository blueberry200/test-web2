<template>
  <section id="homeVideo">
    <div class="container-fluid g-0">
      <div class="row justify-content-center g-0">
        <div class="videoW">
          <video src="@/assets/seoVideo.mp4" autoplay controls muted loop webkit-playsinline playsinline></video>
        </div>
        <div class="video-text">
          <h2>擔心您的網站沒有曝光？</h2>
          <br/>
          <p><i class='bx bx-target-lock'></i> 鎖定您的產品關鍵字，並制定使用者隱私政策以及站內瀏覽動線，自然流量便不再是問題！</p>
          <p><i class='bx bx-dollar'></i> 以SEO為核心規劃的網站可以有效轉換關鍵字廣告流量，長期節省行銷資源。</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#homeVideo{
  background-color:white;
  margin-top:10%;
}
.videoW{
  width:30%;
  display:block;
  margin:auto;
  position:absolute;
  top:-5%;
  left:15%;
  box-shadow:0px 0px 0px 30px white;
}
video{
  width:100%;
}
.row{
  background-color: #a5d0ef2a;
  padding-bottom:500px;
  position:relative;
}
.video-text{
  padding:4% 8% 0 2%;
  font-family: "DFKai-SB","STKaiti";
  font-size:1.2em;
  font-style:italic;
  position:absolute;
  left:50%;
  top:10%;
  width:40%;
}
.video-text i{
  color: #3498db;
  position: absolute;
  left: 0;
  top: 6px;
}

.video-text p{
  position: relative;
  padding-left: 20px;
}
@media screen and (max-width: 992px){
  .videoW{
    width:70%;
    padding:0;
    left:15%;
  }
  .video-text{
    top:55%;
    left:10%;
    padding:0;
    width:80%;
  }
  .row{
    padding-bottom: 750px;
    margin-top:5%;
  }
}
@media screen and (max-width: 768px){
  .video-text{
    top:50%;
  }
  .row{
    padding-bottom: 650px;
  }
}
@media screen and (max-width: 576px){
  .video-text{
    top:45%;
  }
  .row{
    padding-bottom: 600px;
  }
}
</style>

<script>
  export default{
    name:'homeVideo'
  }

</script>