<template>
  <div id="slide2">
    <div class="container">
      <div class="row justify-content-center g-0">
        <div class="col-12">
          <div class="groupNav">
            <div class="navCol navCol1"><a class="groupNavItem groupNav1 actItem" href="#" @click.prevent="change(0)">行銷</a></div>
            <div class="navCol navCol2"><a class="groupNavItem groupNav2" href="#" @click.prevent="change(1)">設計</a></div>
            <div class="navCol navCol3"><a class="groupNavItem groupNav3" href="#" @click.prevent="change(2)">技術</a></div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="borderWin">
            <div class="groupTitle">
              <div class="chTitle">{{ chGroupTitle[actGroup] }}</div>
              <div class="enTitle">{{ enGroupTitle[actGroup] }}</div>
            </div>
            <a class="autoPlay" href="#" @click.prevent="">
              <div class="play" @click="autoPlay()">Play <i class='bx bx-play'></i></div>
              <div class="stop" @click="stopPlay()">Stop <i class='bx bx-stop'></i></div>
            </a>
            <div class="slideWin">
              <div class="photo" v-for="item in groupCount[actGroup]">
                <img :src="require(`@/assets/img/slide2/${groupIndex[actGroup]}/${groupIndex[actGroup]}${item}.jpg`)" alt="photo" @load="startSlide(item)">
              </div>
              <div class="filter"></div>
            </div>
            <div class="button buttonL"><a class='bx bxs-chevron-left' href="#" @click.prevent="preSlide()"></a></div>
            <div class="button buttonR"><a class='bx bxs-chevron-right' href="#" @click.prevent="slideMove()"></a></div>
            <div class="slideDotList">
              <a class="slideDot" v-for="dot in groupCount[actGroup]" href="#" @click.prevent="dotClick(dot-1)"></a>
            </div>
            <div class="groupText">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{ groupText[actGroup] }}</div>
            <router-link to="/contact" class="bottomLink" href="#contact">聯絡我們</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.autoPlay{
  color:black;
  display:flex;
  justify-content: center;
  width:15%;
  min-width:140px;
  height:6vh;
  border:2px solid black;
  position:absolute;
  right:5%;
  top:-3vh;
  z-index:2;
  background-color: white;
  font-size:20px;
  line-height: 6vh;
  text-align: center;
  transition:0.5s;
}

.autoPlay:hover{
  color:white;
  background-color: black;
  transition:0.5s;
}

.play{
  width:100%;
  visibility: visible;
  position:absolute;
  top:0;
  left:0;
}
.stop{
  width:100%;
  visibility: hidden;
  position:absolute;
  top:0;
  left:0;
}
.photo{
  max-height:40vw;
  width: 60%;
  display:block;
  margin:auto;
  position:absolute;
  transition:1s;
}
.photo img{
  height:35vw;
  display:block;
  margin:2vw auto 3vw;
  border:5px solid black;
  box-shadow:30px 0px 10px -3px black;
}
.filter{
  padding-bottom:40vw;
  position:absolute;
  width:100%;
  background-image:linear-gradient(to right,black,rgba(255, 255, 255, 0) 5%);
  z-index:5;
}
.button{
  font-size: 2em;
  width:1.2em;
  height:1.2em;
  border:2px solid white;
  box-shadow: 2px 2px 5px 0 black;
  line-height:1.3em;
  text-align: center;
  color:white;
  background-color: black;
}
.button a{
  color:white;
}
.buttonL{
  position:absolute;
  top:20vw;
  left:2.5%;
  z-index:10;
}
.buttonR{
  position:absolute;
  top:20vw;
  right:2.5%;
  z-index:10;
}
.groupNav{
  display:flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  flex-wrap: wrap;
  height:20vh;
  margin-top:10vh;
}
.groupNav1{
  align-self: end;
}
.groupNav2{
  align-self: center;
}
.groupNav3{
  align-self: end;
}
.groupNavItem{
  font-size:28px;
  color:black;
  border:2px solid black;
  width:100%;
  min-width:100px;
  max-width:150px;
  text-align:center;
  border-radius:100px/38px;
  line-height: 50px;
  transition:0.5s;
}
.groupNavItem:hover{
  background-color: rgba(0, 0, 0, 0.2);
  transition:0.5s;
}
.actItem{
  background-color: black;
  color:white;
}
.actItem:hover{
  background-color: black;
  color:white;
}
.navCol{
  display:flex;
  width:30%;
}
.navCol1{
  justify-content: right;
}
.navCol2{
  justify-content: center;
}
.navCol3{
  justify-content: left;
}
.row1{
  justify-content: center;
  align-items: center;
}
.row2{
  justify-content: space-around;
  align-items: center;
}
.borderWin{
  border:2px solid black;
  margin:10vh auto 20vh;
  position:relative;
}
.groupTitle{
  width:30%;
  height:14vh;
  margin:0 auto;
  position:absolute;
  left:35%;
  top:-7vH;
  background-color: white;
  text-align: center;
}
.chTitle{
  height:9vh;
  font-size: 3em;
  
}
.enTitle{
  height:5vh;
  font-size: 1em;
  letter-spacing: 3px;
}
.slideWin{
  width:90%;
  height:40vw;
  padding:0%;
  margin:10vh auto 20px;
  position:relative;
  overflow:hidden;
  border:5px solid black;
  box-shadow:25px 0px 20px 15px inset black;
}
.slideDotList{
  height:50px;
  text-align: center;
}
.slideDot{
  width:20px;
  height:20px;
  background-color: white;
  border:2px solid black;
  border-radius:10px;
  display:inline-block;
  margin:0 10px 0;
  transition:0.3s;
}
.actDot{
  background-color: black;
  transition:0.3s;
}
.groupText{
  width:70%;
  margin: 5vh auto 20vh;
  font-size:1.5em;
}
.bottomLink{
  width:30%;
  height:8vh;
  color:black;
  border:2px solid black;
  position:absolute;
  left:35%;
  bottom:-4vh;
  z-index:2;
  background-color: white;
  font-size:1.5em;
  line-height: 8vh;
  text-align: center;
  transition: 0.5s;
}
.bottomLink:hover{
  color:white;
  background-color:black;
  transition:0.5s;
}
@media screen and (max-width:767px) {
  .buttonL{
    top:30vw;
  }
  .buttonR{
    top:30vw;
  }
}
@media screen and (max-width:575px) {
  .autoPlay{
    font-size:16px;
    min-width:100px;
  }
  .groupNavItem{
    font-size:24px;
    border-radius:100px/50px;
  }
  .groupText{
    font-size:1.2em;
  }
  .slideDot{
    width:15px;
    height:15px;
  }
  .bottomLink{
    width:40%;
    left:30%;
  }
}
</style>

<script>
  export default{
    name:'slide2',
    data(){
      return{
        actGroup:0,
        actPhoto:0,
        //gap是圖加上間距，不是只有間距
        gap:50,
        timeCut:0,
        picPosition:[],
        chGroupTitle:["行銷","設計","技術"],
        groupCount:[3,3,4],
        groupIndex:["marketing","design","technology"],
        enGroupTitle:["Marketing Team","Design Team","Technology Team"],
        groupText:[
          "2019年藍莓實驗室行銷團隊由數位廣告專家Jam設立，經歷兩年的媒體開發，逐漸有了穩定的轉換成效，加上藍莓實驗室堅強的技術後盾，跨媒體的受眾分析模型已經可以達到依公司規模及產業聲量鎖定適合的媒體商及代言網紅，達到即時、客製化及成本效益三方面的最優解。",
          "藍莓試驗室最早的部門之一，由獲得了德國紅點設計競賽獲獎人許雅靜帶領，部門包含了3D動畫師、跨國網站視覺規劃師，以及前資深前端工程師，視覺呈現可以配合高效能高、擴充性程序規劃，及針對跨國、跨子公司做設計整合，達到品牌形象不在止步於技術限制。",
          "藍莓實驗室最引以為傲的技術團隊，由多名參加黑客松的常客，以及曾參與框架開發的資深工程師們匯聚而成，數據庫規劃、雲端資源部署、API開發等技術規劃以敏捷、高擴充性為核心思路，並帶領多個傳產企業轉型數位系統，穩定累積企業主數位資產，讓公司能從科技面向不斷迭代業務範疇。"
        ]
      }
    },
    methods:{
      //切換圖組
      change(actN){
        const actG = document.getElementsByClassName('groupNavItem');
        const dotArr = document.getElementsByClassName('slideDot');
        this.stopPlay();
        dotArr[this.actPhoto].classList.remove('actDot');
        actG[this.actGroup].classList.remove('actItem');
        this.actGroup = actN;
        actG[actN].classList.add('actItem');
        this.actPhoto = 0;
      },
      //圖組切換後(actGroup改變)重新渲染圖片觸發
      startSlide(item){
        if(item == this.groupCount[this.actGroup]){
          const picArr = document.getElementsByClassName('photo');
          const dotArr = document.getElementsByClassName('slideDot');
          for(let i=0;i<picArr.length;i++){
            //photo框設為60%(photo框跟可視圖片不一樣大，圖片框寬度是用高度等比例算出來的，photo框僅僅是計算位置需要一個依據值)，所以用(100-60)/2開始計算位置
            picArr[i].style.left = (20 + this.gap * i) + "%";
            this.picPosition[i] = 20 + this.gap * i;
          }
          dotArr[this.actPhoto].classList.add('actDot');
        }
      },
      slideMove(){
        const picArr = document.getElementsByClassName('photo');
        const dotArr = document.getElementsByClassName('slideDot');
        this.stopPlay();
        dotArr[this.actPhoto].classList.remove('actDot');
        this.actPhoto += 1;
        if(this.actPhoto<this.groupCount[this.actGroup]){
          //不是最後一張圖片，所以遞延
          for(let i=0;i<picArr.length;i++){
            this.picPosition[i] -= this.gap;
            picArr[i].style.left = this.picPosition[i] + "%";
            dotArr[this.actPhoto].classList.add('actDot');
          }
        }else{
          //最後一張圖片，所以重置位置
          for(let i=0;i<picArr.length;i++){
            picArr[i].style.left = (20 + this.gap * i) + "%";
            this.picPosition[i] = 20 + this.gap * i;
          }
          this.actPhoto = 0;
          dotArr[this.actPhoto].classList.add('actDot');
        }
      },
      preSlide(){
        const picArr = document.getElementsByClassName('photo');
        const dotArr = document.getElementsByClassName('slideDot');
        this.stopPlay();
        dotArr[this.actPhoto].classList.remove('actDot');
        this.actPhoto -= 1;
        if(this.actPhoto>=0){
          //不是第一張圖片，所以遞延
          for(let i=0;i<picArr.length;i++){
            this.picPosition[i] += this.gap;
            picArr[i].style.left = this.picPosition[i] + "%";
            dotArr[this.actPhoto].classList.add('actDot');
          }
        }else{
          //第一張圖片，所以轉跳到最後一張圖片
          for(let i=0;i<picArr.length;i++){
            picArr[i].style.left = (20 - this.gap * ((picArr.length-1)-i)) + "%";
            this.picPosition[i] = 20 - this.gap * ((picArr.length-1)-i);
          }
          this.actPhoto = picArr.length-1;
          dotArr[this.actPhoto].classList.add('actDot');
        }
      },
      dotClick(dot){
        const picArr = document.getElementsByClassName('photo');
        const dotArr = document.getElementsByClassName('slideDot');
        this.stopPlay();
        dotArr[this.actPhoto].classList.remove('actDot');
        const targ=dot-this.actPhoto;
        for(let i=0;i<picArr.length;i++){
          this.picPosition[i] -= this.gap * targ;
          picArr[i].style.left = this.picPosition[i] + "%";
        }
        this.actPhoto = dot;
        dotArr[this.actPhoto].classList.add('actDot');
      },
      autoPlay(){
        const play=document.getElementsByClassName('play');
        const stop=document.getElementsByClassName('stop');
        play[0].style.visibility="hidden";
        stop[0].style.visibility="visible";
        this.timeCut = setTimeout(() => {
          this.slideMove();
          this.autoPlay();
        }, 3000);
      },
      stopPlay(){
        const play=document.getElementsByClassName('play');
        const stop=document.getElementsByClassName('stop');
        play[0].style.visibility="visible";
        stop[0].style.visibility="hidden";
        clearTimeout(this.timeCut);
      }
    },
    beforeUnmount() {
      clearTimeout(this.timeCut);
    }
  }

</script>