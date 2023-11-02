<template>
    <section id="services" class="services section-bg">
      <div class="container">

        <div class="section-title">
          <h2>服務項目</h2>
          <p>服務項目涵蓋前後端整合、雲端資源採購、商業分析及整合外部系統。</p>
        </div>

        <div class="row">
          <div class="col-md-6 mt-4">
            <div class="icon-box">
              <i class="bi bi-graph-up-arrow"></i>
              <h4>SEO優化</h4>
              <p>提供SEO健檢方案，若為架設網站全方位專案，將進一步提供企業SEO訓練服務及維運建議。</p>
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <div class="icon-box">
              <i class="bi bi-palette"></i>
              <h4>版面設計</h4>
              <p>客製網頁切版、響應式網頁設計，及特色元件視覺設計，長約客戶採購按方案享折扣。</p>
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <div class="icon-box">
              <i class="bi bi-database-check"></i>
              <h4>資料庫及主程式設計</h4>
              <p>網站整體架構規劃，及相關的資料庫、API設計服務，該服務建議長約合作，以利業務擴大時與PM進行需求異動。</p>
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <div class="icon-box">
              <i class="bi bi-clouds"></i>
              <h4>雲端架構規劃</h4>
              <p>異地備援、運算服務規劃，雲端資源採購配置及報價幫您一手包辦，若整合新系統可以免費諮詢相關雲端配套。</p>
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <div class="icon-box">
              <i class="bi bi-bar-chart"></i>
              <h4>站內流量分析</h4>
              <p>提供行銷工具串接如：GA4、Ｇoogle Ads、FB Pixel...等，並提供流量分析報告、站內及廣告活動相關建議。</p>
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <div class="icon-box">
              <i class="bi bi-tools"></i>
              <h4>趨勢科技整合</h4>
              <p>前後端技術整合，相關元件包括AI智能客服、數據面板、電子報系統串接、金流串接、購物車系統設計...等。</p>
            </div>
          </div>
        </div>

      </div>
    </section>
</template>

<style scoped>
.services .icon-box {
  padding: 30px;
  border-radius: 6px;
  background: #fff;
  transition: ease-in-out 0.3s;
  box-shadow: 0px 2px 22px rgba(0, 0, 0, 0.1);
}

.services .icon-box i {
  float: left;
  color: #3498db;
  font-size: 40px;
  line-height: 0;
}

.services .icon-box h4 {
  margin-left: 70px;
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}

.services .icon-box h4 a {
  color: #384046;
  transition: 0.3s;
}

.services .icon-box p {
  margin-left: 70px;
  line-height: 24px;
  font-size: 14px;
}
</style>

<script>

  export default{
    name:'service',
    data(){
      return{
        testfu:this.test()
      }
    },
    mounted(){
      console.log(this.testfu())
    },
    methods:{
      test(){
        var a=0
        function inner(){
          return ++a
        }
        return inner
      }
    }
  }

</script>