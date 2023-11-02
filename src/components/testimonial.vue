<template>
<section id="testimonials" class="testimonials section-bg">
  <div class="container">

    <div class="section-title">
      <h2>客戶口碑</h2>
      <p>藍莓的服務品質，由他人來見證。</p>
    </div>


          <swiper
            :centeredSlides="true"
            :slidesPerView="1"
            :spaceBetween="20"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :loop="true"
            :pagination="{
              clickable: true,
            }"
            :navigation="false"
            :modules="modules"
            class="mySwiper testimonials-slider"
          >
            <swiper-slide>
            
            
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  藍莓實驗室製作的網站很快就能在搜尋結果頁曝光，SEO成效優良，並且會給予企業SEO相關的維運訓練，很值得推薦的網頁設計公司。
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="@/assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="藍莓實驗室客戶，一位行銷主管">
                <h3>林晏廷</h3>
                <h4>行銷主管</h4>
              </div>         
            
            </swiper-slide>

            <swiper-slide>
            
            
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  將傳統網站改造成響應式網站，執行過程與甲方設計師的溝通非常有效率，提出多種方案並補強使用者體驗企劃書，相當有經驗的團隊。
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="@/assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="藍莓實驗室客戶，一位平面設計師">
                <h3>吳怡萱</h3>
                <h4>平面設計師</h4>
              </div>
       
            
            </swiper-slide>

            <swiper-slide>
            
            
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  架站後提供免費行銷諮詢服務，並依照業務發展推薦智能客服系統，相對其他設計公司便宜很多，而且該系統讓業績在一個月內提升超過50%。
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="@/assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="藍莓實驗室客戶，一位烘焙坊業主">
                <h3>楊穎柔</h3>
                <h4>烘焙坊業主</h4>
              </div>
          
            
            </swiper-slide>

            <swiper-slide>
            
            
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  整治我們平台使用者購買流程，除了提升營業額，也大量增加了公司會員名單數，讓我們下一季行銷活動可以從實體店面轉為線上線下整合的規模。
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="@/assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="藍莓實驗室客戶，一位專案經理">
                <h3>廖成勇</h3>
                <h4>專案經理</h4>
              </div>

            
            </swiper-slide>

            <swiper-slide>
            
            
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  資料庫年度維護正好遇到疫情，遠端作業因為不夠完善導致作業停擺，還好藍莓實驗室提供遠程測試流程規劃資訊，並提供了更好的資料庫維護計畫，讓我們完成今年的例行維護作業。
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="@/assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="藍莓實驗室客戶，一位後端工程師">
                <h3>施偉德</h3>
                <h4>後端工程師</h4>
              </div>
  
            
            </swiper-slide>
            
          </swiper>
  </div>
</section>
</template>

<style scoped>
.testimonials .testimonials-carousel,
.testimonials .testimonials-slider {
  overflow: hidden;
}

.testimonials .testimonial-item {
  box-sizing: content-box;
  padding: 30px 30px 0 30px;
  margin: 30px 15px;
  text-align: center;
  min-height: 350px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  background: #fff;
}

.testimonials .testimonial-item .testimonial-img {
  width: 120px;
  border-radius: 50%;
  border: 4px solid #fff;
  margin: 0 auto;
}

.testimonials .testimonial-item h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 5px 0;
  color: #111;
}

.testimonials .testimonial-item h4 {
  font-size: 14px;
  color: #999;
  margin: 0;
}

.testimonials .testimonial-item .quote-icon-left,
.testimonials .testimonial-item .quote-icon-right {
  color: #e1f0fa;
  font-size: 26px;
}

.testimonials .testimonial-item .quote-icon-left {
  display: inline-block;
  left: -5px;
  position: relative;
}

.testimonials .testimonial-item .quote-icon-right {
  display: inline-block;
  right: -5px;
  position: relative;
  top: 10px;
}

.testimonials .testimonial-item p {
  font-style: italic;
  margin: 0 auto 15px auto;
}

.testimonials .swiper-pagination {
  margin-top: 20px;
  position: relative;
}

.testimonials .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 1;
  border: 1px solid #3498db;
}

.testimonials .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #3498db;
}
</style>

<script>
import { Autoplay, Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



  export default{
    name:'testimonial',
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Autoplay, Navigation, Pagination],
      };
    },
  }

</script>