<template>
<section id="what-we-do" class="what-we-do">
      <div class="container">

        <div class="section-title">
          <h2>我們的願景</h2>
          <p>我們的使命是讓品牌走向巔峰，從商業、科技找到您的市場藍海。</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              <div class="icon"><i class='bx bx-analyse'></i></div>
              <h4>商業模式分析</h4>
              <p>從品牌定位到業務模式，達到線上、線下業務整合。</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="icon-box">
              <div class="icon"><i class='bx bx-group'></i></div>
              <h4>使用者優化設計</h4>
              <p>具高便利性、直覺引導的方式，讓使用者探索產品之美。</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4>新技術領航員</h4>
              <p>深入淺出的技術顧問服務，導入最新科技，讓網站無痛升級。</p>
            </div>
          </div>

        </div>

      </div>
    </section>
</template>

<style scoped>
#what-we-do{
  background-color: #f9f4f1;
  margin-top:80px;
}
.what-we-do .icon-box {
  text-align: center;
  padding: 30px 20px;
  transition: all ease-in-out 0.3s;
  background: #fff;
  box-shadow: 0 0 20px 0 rgba(128, 128, 128, 0.355);
}

.what-we-do .icon-box .icon {
  margin: 0 auto;
  width: 64px;
  height: 64px;
  background: #eaf4fb;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: ease-in-out 0.3s;
}

.what-we-do .icon-box .icon i {
  color: #3498db;
  font-size: 28px;
}

.what-we-do .icon-box h4 {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 24px;
}

.what-we-do .icon-box h4 a {
  color: #384046;
  transition: ease-in-out 0.3s;
}

.what-we-do .icon-box p {
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}

.what-we-do .icon-box:hover h4 a,
.what-we-do .icon-box:hover .icon i {
  color: #3498db;
}
</style>

<script>
  export default{
    name:'ourVision'
  }

</script>