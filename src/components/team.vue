<template>
 <section id="team" class="team">
      <div class="container">

        <div class="section-title">
          <h2>團隊成員</h2>
          <p>我們是集科技、設計、商業及管理專長於一身的團隊，讓您的品牌如虎添翼。</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src="@/assets/img/team/team-1.jpg" alt="藍莓實驗室的資深產品經理">
              <h4>葉宇威</h4>
              <span>資深產品經理</span>
              <p>
                具有十二年產品經理經驗，過去負責項目以ERP系統居多，其客戶多為醫美、化妝品、服飾等對於存貨及外觀要求較高領域之企業。
              </p>
              <div class="social">
                <a href=""><i class="bi bi-twitter"></i></a>
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src="@/assets/img/team/team-2.jpg" alt="藍莓實驗室的設計總監">
              <h4>許雅靜</h4>
              <span>設計總監</span>
              <p>
                八年網頁設計及五年行銷企劃經驗，對於內容行銷、SEO部署及跨平台設計有跨領域整合專業，其設計理念也多次收錄於設計學報。
              </p>
              <div class="social">
                <a href=""><i class="bi bi-twitter"></i></a>
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src="@/assets/img/team/team-3.jpg" alt="藍莓實驗室的技術總監">
              <h4>王凱翔</h4>
              <span>技術總監</span>
              <p>
                十年AI系統及資料庫設計經驗，並同時為「技術前衛」工作室創辦人之一，該公司最早期產品線亦為凱翔於黑客松優勝作品，獲得天使投資而進一步開發。
              </p>
              <div class="social">
                <a href=""><i class="bi bi-twitter"></i></a>
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
</template>

<style scoped>
.team .member {
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
  padding: 30px 20px;
  background: #fff;
}

.team .member img {
  max-width: 60%;
  border-radius: 50%;
  margin: 0 0 30px 0;
}

.team .member h4 {
  font-weight: 700;
  margin-bottom: 2px;
  font-size: 18px;
}

.team .member span {
  font-style: italic;
  display: block;
  font-size: 13px;
}

.team .member p {
  padding-top: 10px;
  font-size: 14px;
  font-style: italic;
  color: #aaaaaa;
}

.team .member .social {
  margin-top: 15px;
}

.team .member .social a {
  color: #919191;
  transition: 0.3s;
}

.team .member .social a:hover {
  color: #3498db;
}

.team .member .social i {
  font-size: 18px;
  margin: 0 2px;
}
</style>

<script>
  export default{
    name:'team'
  }

</script>