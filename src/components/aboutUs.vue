<template>
<section id="about">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 g-0">
            <img src="@/assets/img/About.jpg" class="img-fluid" alt="電腦旁邊有一支手機，手機有顯眼的Google Play畫面和耳機圖示。">
          </div>
          <div class="col-lg-6 mt-4">
            <h3>關於我們</h3>
            <p>
              從商業洞察出發，我們致力於消費者友善網站，讓搜尋到進站都能感受到品牌的魅力。
            </p>
            <ul>
              <li><i class="bx bx-check-double"></i> SEO優化設計，提升您的搜尋排名，並觸及品牌的關鍵受眾。</li>
              <li><i class="bx bx-check-double"></i> 站內高度探索設計，增加網站訪客瀏覽動機，讓轉單輕而易舉。</li>
            </ul>
            <div class="row icon-boxes">
              <div class="col-md-6">
                <i class='bx bx-conversation'></i>
                <h4>技術諮詢</h4>
                <p>釐清需求為建立網站的第一步，免費諮詢讓您掌握網站架構藍圖。</p>
              </div>
              <div class="col-md-6 mt-md-0">
                <i class='bx bx-task'></i>
                <h4>專案配套</h4>
                <p>長期維護、需求異動怎麼辦？配套專案一應俱全，幫您制訂專屬合約。</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
</template>

<style scoped>
#about {
  padding:0;
}
#about h3 {
  font-weight: 600;
  font-size: 32px;
}

#about ul {
  list-style: none;
  padding: 0;
  font-size: 15px;
}

#about ul li+li {
  margin-top: 10px;
}

#about ul li {
  position: relative;
  padding-left: 26px;
}

#about ul i {
  position: absolute;
  left: 0;
  top: 0;
  font-size: 22px;
  color: #3498db;
}

#about .icon-boxes {
  padding-top: 10px;
}

#about .icon-boxes h4 {
  font-size: 20px;
  font-weight: 700;
  margin-top: 5px;
}

#about .icon-boxes i {
  font-size: 48px;
  color: #3498db;
}

#about .icon-boxes p {
  font-size: 15px;
  color: #848484;
}
</style>

<script>
  export default{
    name:'aboutUs'
  }

</script>