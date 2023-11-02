<template>
    <div class="header-bg page-area">
      <div class="container position-relative">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="slider-content text-center">
              <div class="header-bottom">
                <div class="layer2">
                  <h1 class="title2">網頁設計</h1>
                </div>
                <div class="layer3">
                  <h2 class="title3">探索您的設計風格</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.header-bg {
  background: url("@/assets/portfolioBanner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  padding: 120px 0 150px;
  background-attachment: fixed;
}

.header-bg::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.page-area {
  position: relative;
}

.header-bottom h1,
.header-bottom h2 {
  color: #fff;
}

.header-bottom h1 {
  font-size: 60px;
  margin-bottom: 40px;
}

.header-bottom h2 {
  font-size: 40px;
  margin-bottom: 0;
}

@media (max-width: 767px) {
  .header-bottom h1 {
    font-size: 40px;
    margin-bottom: 40px;
  }
  .header-bottom h2 {
    font-size: 30px;
    margin-bottom: 0;
  }
}

</style>

<script>
  export default{
    name:'portfolioBanner'
  }

</script>