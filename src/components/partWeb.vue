<template>
  <section id="partWeb">
    <div class="container">
      <div class="section-title">
        <h2>範本速覽</h2>
        <p>多種範本任意挑選，如需進一步客製化請洽詢業務窗口。</p>
      </div>
      <div class="row justify-content-around">
        <div class="web-win col-9 col-sm-6 col-md-4 col-lg-3">
          <div class="img-win">
            <a href="#" @click.prevent=""><img src="@/assets/img/artshowWeb/artshowGallery.jpg" @click="toPro('artshow')" /></a>
          </div>
          <h3>展場官方網站</h3>
          <hr>
          <p>內容涵蓋展覽時間表、場地預定表單、購票相關資訊...等。</p>
        </div>
        <div class="web-win col-9 col-sm-6 col-md-4 col-lg-3">
          <div class="img-win">
            <a href="#" @click.prevent=""><img src="@/assets/img/floristWeb/floristHome.jpg" @click="toPro('florist')" /></a>
          </div>
          <h3>花卉線上商店</h3>
          <hr>
          <p>花卉線上購賣、售後照護諮詢、各品種花卉知識文庫一應俱全。</p>
        </div>
        <div class="web-win col-9 col-sm-6 col-md-4 col-lg-3">
          <div class="img-win">
            <a href="#" @click.prevent=""><img src="@/assets/img/weddingWeb/weddingLanding.jpg" @click="toPro('wedding')" /></a>
          </div>
          <h3>婚禮活動網站</h3>
          <hr>
          <p>活動宣傳網站，適合短期收名單用途，可搭配社群媒體引流使用。</p>
        </div>
      </div>
      <div class="seeMoreBox">
        <a class="seeMoreBtn" href="#">觀看更多作品</a>
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
import axios from 'axios';

  export default{
    name:'partWeb',
    data(){
      return{
        productObj:{
          title: '',
          des: '',
          srcstr: '',
          id: ''
        },
        itemlist:''
      }
    },
    methods:{
      async toPro(x){
        await this.payProVal(x);
        await this.$store.commit('setProduct', this.productObj);
        this.$router.push({
          name:"product"
        })
      },
      payProVal(x){
        const findResult = this.itemlist.filter((item) => {
          return item.id === x;
        })[0];
        this.productObj.title=findResult.title;
        this.productObj.des=findResult.des;
        this.productObj.srcstr=findResult.srcstr;
        this.productObj.id=findResult.id;
      }
    },
    mounted() {
      let url = 'portfolioItem.json';
      axios.get(url).then((response) => {
      this.itemlist = response.data;
        }).catch(error => {
            console.log(error);
        })
    }    
  }

</script>