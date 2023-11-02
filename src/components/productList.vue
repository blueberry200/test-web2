<template>
  <section id="productList">
    <div class="container">
      <div class="section-title">
        <h2>元件速覽</h2>
        <p>多種元件任意挑選，如需進一步客製化請洽詢業務窗口。</p>
      </div>
      <div class="row justify-content-around">
        <div class="web-win col-9 col-sm-6 col-md-4 col-lg-3">
          <div class="img-win">
            <router-link to="/productList"><img src="@/assets/img/portfolio/productList.png" /></router-link>
          </div>
          <h3>產品列表</h3>
          <hr>
          <p>內容包括產品列表、產品頁及首頁速覽列，產品頁能切換產品細項圖片。</p>
        </div>
        <div class="web-win col-9 col-sm-6 col-md-4 col-lg-3">
          <div class="img-win">
            <router-link to="/cascade"><img src="@/assets/img/portfolio/cascade.png" /></router-link>
          </div>
          <h3>瀑布流</h3>
          <hr>
          <p>從寬螢幕的四欄排列到手機版單欄排列，瀑布流元件符合RWD方式設計。</p>
        </div>
        <div class="web-win col-9 col-sm-6 col-md-4 col-lg-3">
          <div class="img-win">
            <router-link to="/slide1"><img src="@/assets/img/portfolio/slide3D.png" /></router-link>
          </div>
          <h3>立體幻燈片</h3>
          <hr>
          <p>立體旋轉輪播圖片，以公轉搭配自轉展現環繞體感，圖片自動輪播搭配手動切換幻燈片。</p>
        </div>
        <div class="web-win col-9 col-sm-6 col-md-4 col-lg-3">
          <div class="img-win">
            <router-link to="/slide2"><img src="@/assets/img/portfolio/slideChanged.png" /></router-link>
          </div>
          <h3>多圖組幻燈片</h3>
          <hr>
          <p>以黑白色調為主題設計，並加強輪播區塊陰影突顯立體感，功能上除了上方選單可以切換圖組，也設計了自動/手動輪播切換按鈕。</p>
        </div>
        <div class="web-win col-9 col-sm-6 col-md-4 col-lg-3">
          <div class="img-win">
            <router-link to="/rotatePic"><img src="@/assets/img/portfolio/rotatePic.png" /></router-link>
          </div>
          <h3>翻轉圖片特效</h3>
          <hr>
          <p>廣告牆翻轉特效，凸顯雙面圖片對比，讓主題風格更鮮明。</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.web-win{
  box-shadow: 0px 2px 22px rgba(0, 0, 0, 0.3);
  background-image: linear-gradient(to bottom, rgb(229, 229, 247), #e1f0fa);
  border-radius:10px;
  margin:40px 10px 40px;
  text-align: center;
}
.web-win img:hover{
  transition: all 0.3s ease-out;
  transform: scale(1.1,1.1);
}
.web-win img{
  height:35vh;
  width:100%;
  box-sizing:border-box;
  object-fit: cover;
  object-position: 50% top;
  transform: scale(1,1);
  transition: all 0.3s ease-out;
}
.web-win h3{
  margin:20px 20px 5px;
  text-align:center;
}
.img-win{
  width:100%;
  height:35vh;
  border-radius:10px;
  margin:8% auto 0;
  overflow:hidden;
  border:3px solid #70554a13;
}
hr{
  color:gray;
  width:80%;
  border-width: 2px;
  margin:3px auto 5px;
}
p{
  margin:10px;
}
.seeMoreBtn{
  color: #3B261E;
  font-size: 16px;
  background-color: #f7fbfe;
  padding: 10px 25px;
  border-style: solid;
  border-color: #3B261E;
  border-width: 1px;
  letter-spacing: 0.1em;
  transition: 0.3s;
  position: absolute;
  right: -40px;
  bottom: 0px;
}
.seeMoreBox{
  position:relative;
  margin:60px;
}
.seeMoreBtn:hover{
  background-color: #3B261E;
  color: #f7fbfe;
}
</style>

<script>

  export default{
    name:'productList'
  }

</script>