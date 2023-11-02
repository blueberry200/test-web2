<template>
  <div id="slide1">
    <div class="container">
      <div class="row justify-content-center g-0">
        <a class="col-1 leftBtn button" href="#" @click.prevent="preSlide()"><i class='bx bxs-chevrons-left'></i></a>
        <div class="col-4 slideWinF">
          <div class="slideWin">
            
              <div class="photo" v-for="item in imgCount" >
                <img :src="require(`@/assets/img/alcohol/alcohol${item}.jpg`)" alt="photo" @load="startSlide(item)" @click="stop()">
              </div>
              <div class="alcoholName">
                <div class="chineseName">{{ chineseN[actIndex] }}</div>
                <div class="englishName">{{ englishN[actIndex] }}</div>
              </div>
              <div class="photoBack" v-for="item in imgCount">
              </div>
            
          </div>
        </div>
        <a class="col-1 rightBtn button" href="#" @click.prevent="nextSlide()"><i class='bx bxs-chevrons-right'></i></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
#slide1{
  margin:auto;
  padding-top:60vw;
  padding-bottom:10vw;
  background: border-box url("@/assets/alcoholBack.jpg") center top no-repeat black;
  background-size:100%;
  position:relative;
}
#slide1:before {
  content: "";
  background:linear-gradient(to left, black,rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0.3),rgba(0, 0, 0, 0.3), black);
  height:100%;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}
.photo img{
  width:80%;
  display:block;
  margin:20px auto;
  border: 2px solid black;
}
.slideWin{
  position:relative;
  height:55vw;
  perspective: 8000px;
  perspective-origin:0% -100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transform: translateZ(0);
  scale: 1;
  z-index: 0;
}
.photo{
  width:100%;
  display:block;
  position:absolute;
  top:0;
  left:0;
  transition: 1.5s;
  backface-visibility: hidden;
  background: linear-gradient(-45deg, #23d5ab, #23a6d5, #e73c7e, #ee7752);
  background-size: 300% 300%;
  animation:backTran 6s ease infinite;
}
.photoBack{
  width:100%;
  display:block;
  height:15vw;
  position:absolute;
  top:0;
  left:0;
  transition: 1.5s;
  background: linear-gradient(-45deg, #23d5ab, #23a6d5, #e73c7e, #ee7752);
  background-size: 300% 300%;
  animation:backTran 6s ease infinite;
}
.activeSlide{
  transition: 2s;
}
.row{
  position:relative;
}
.button{
  position:absolute;
  bottom:5%;
  width:10%;
  font-size: 4em;
  display:flex;
  justify-content: center;
}
.button i{
  color:aqua;
  display:block;
  margin: auto;
}
.leftBtn{
  position:absolute;
  left:15%;
}
.rightBtn{
  position:absolute;
  right:15%;
}
.alcoholName{
  width:200%;
  position:absolute;
  left:-50%;
  bottom:0%;
  justify-content: center;
  color:yellow;
  transition:1s;
  pointer-events: none;
}
.chineseName{
  font-size:4em;
  text-align: center;
  font-family:"DFKai-SB","STKaiti";
}
.englishName{
  font-size:2em;
  text-align: center;
  font-family: Garamond, serif;
  font-style: italic;
}
@media screen and (max-width:991px) {
  .slideWin{
    height:60vw;
  }
  .chineseName{
    font-size:3.5em;
  }
  .englishName{
    font-size:1.7em;
  }
}
@media screen and (max-width:767px) {
  .button{
    z-index:30;
  }
  .leftBtn{
    left:10%;
  }
  .rightBtn{
    right:10%;
  }
  .chineseName{
    font-size:3em;
  }
  .englishName{
    font-size:1.5em;
  }
}
@media screen and (max-width:575px) {
  .button{
    font-size: 2.5em;
  }
  .slideWin{
    height:70vw;
  }
  .chineseName{
    font-size:2em;
  }
  .englishName{
    font-size:1em;
  }
}
@keyframes backTran {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>

<script>
  export default{
    name:'slide1',
    data(){
      return{
        imgCount:7,
        degArr:[],
        actIndex:0,
        timeCut:0,
        radiusWidth:140,
        radiusHeight:20,
        actSlideScale:100,
        finalSlideScale:20,
        slideFix:[],
        chineseN:["擊沈俾斯麥","霓虹夜色","櫻桃皇后","百加得蘭姆酒","黃昏之際","丹尼爾威士忌","心動時刻"],
        englishN:["Utopias Beer","Neon Fruit Sour","Brazilian Cherry Wine","Bacardi Rum","Southern Rhone White Blend","Daniel's Whisky","Rosadoli Rose Wine"]
      }
    },
    methods:{
      startSlide(item){
        if(item==this.imgCount){
          const slideList = document.getElementsByClassName('photo');
          const slideListBack = document.getElementsByClassName('photoBack');
          slideList[this.actIndex].classList.add('activeSlide');
          slideListBack[this.actIndex].classList.add('activeSlide');
          //計算z-index，中間最高，其次依序為左一右一左二右二...
          let alterIndex=this.actIndex;
          for(let i=0;i<this.imgCount;i++){
            alterIndex=(alterIndex+((-1)**i)*i);
            if(alterIndex<0){
              alterIndex=alterIndex+this.imgCount;
            }
            alterIndex=alterIndex%this.imgCount;
            //乘2倍，slideListBack再-1是為了把z-index的次序中間穿插圖片的卡背
            slideList[alterIndex].style.zIndex = 2*(this.imgCount-i);
            slideList[alterIndex].style.transform = "translateZ("+(100*(this.imgCount-i)-1000)+"px)";
            slideListBack[alterIndex].style.zIndex = 2*(this.imgCount-i)-1;
            slideListBack[alterIndex].style.transform = "translateZ("+(100*(this.imgCount-i)-1000-1)+"px)";
            //為了呈現遠近視覺觀感，越靠後的圖片寬度越低，actSlideScale為原寬度，finalSlideScale為微調總寬度
            slideList[alterIndex].style.width = (this.actSlideScale-this.finalSlideScale*(Math.ceil(i/2)/Math.floor(this.imgCount/2)))+"%";
            slideListBack[alterIndex].style.width = (this.actSlideScale-this.finalSlideScale*(Math.ceil(i/2)/Math.floor(this.imgCount/2)))+"%";
            //因為上面調整了寬度，所以位置要微調
            this.slideFix[alterIndex]= ((this.actSlideScale-this.finalSlideScale*(Math.ceil(i/2)/Math.floor(this.imgCount/2)))-100)/2;
          }
          for(let i=0;i<this.imgCount;i++){
            //依據順位計算自轉角度，達成環繞效果
            slideList[(this.actIndex + i) % this.imgCount].style.transform = slideList[(this.actIndex + i) % this.imgCount].style.transform+" rotateY("+(360/this.imgCount*i)+"deg)";
            slideListBack[(this.actIndex + i) % this.imgCount].style.transform = slideListBack[(this.actIndex + i) % this.imgCount].style.transform+" rotateY("+(360/this.imgCount*i)+"deg)";
            //儲存初始角度
            this.degArr[i]=360/this.imgCount*i;
            // x軸定位，以簡諧運動計算，三角函數的cos(起點+等分照片個數)算完再乘以x軸公轉半徑，最後微調圖片因寬度調整造成的誤差
            slideList[(this.actIndex + i) % this.imgCount].style.left = (this.radiusWidth*Math.cos(Math.PI/2-(i*(360/this.imgCount)*(Math.PI/180)))-this.slideFix[i])+"%";
            slideListBack[(this.actIndex + i) % this.imgCount].style.left = (this.radiusWidth*Math.cos(Math.PI/2-(i*(360/this.imgCount)*(Math.PI/180)))-this.slideFix[i])+"%";
            // y軸定位，以簡諧運動計算，三角函數的sin(起點+等分照片個數)算完再乘以y軸公轉半徑
            slideList[(this.actIndex + i) % this.imgCount].style.top = this.radiusHeight*Math.sin(Math.PI/2-(i*(360/this.imgCount)*(Math.PI/180)))+"%";
            slideListBack[(this.actIndex + i) % this.imgCount].style.top = this.radiusHeight*Math.sin(Math.PI/2-(i*(360/this.imgCount)*(Math.PI/180)))+"%";
          }
          this.timeCut = setTimeout(() => {
            this.slideMove();
         }, 3000);
        }
      },
      slideMove(){
        clearTimeout(this.timeCut);
        const slideList = document.getElementsByClassName('photo');
        const slideListBack = document.getElementsByClassName('photoBack');
        slideList[this.actIndex].classList.remove('activeSlide');
        slideListBack[this.actIndex].classList.remove('activeSlide');
        this.actIndex = (this.actIndex + 1) % this.imgCount;
        slideList[this.actIndex].classList.add('activeSlide');
        slideListBack[this.actIndex].classList.add('activeSlide');
        let alterIndex=this.actIndex;
        for(let i=0;i<this.imgCount;i++){
          alterIndex=(alterIndex+((-1)**i)*i);
          if(alterIndex<0){
            alterIndex=alterIndex+this.imgCount;
          }
          alterIndex=alterIndex%this.imgCount;
          slideList[alterIndex].style.zIndex = 2*(this.imgCount-i);
          slideList[alterIndex].style.transform = "translateZ("+(100*(this.imgCount-i)-1000)+"px)";
          slideListBack[alterIndex].style.zIndex = 2*(this.imgCount-i)-1;
          slideListBack[alterIndex].style.transform = "translateZ("+(100*(this.imgCount-i)-1000-1)+"px)";
          slideList[alterIndex].style.width = (this.actSlideScale-this.finalSlideScale*(Math.ceil(i/2)/Math.floor(this.imgCount/2)))+"%";
          slideListBack[alterIndex].style.width = (this.actSlideScale-this.finalSlideScale*(Math.ceil(i/2)/Math.floor(this.imgCount/2)))+"%";
          
        }
        for(let i=0;i<this.imgCount;i++){
          //計算每個照片下一個自轉的角度
          this.degArr[(this.actIndex + i) % this.imgCount] = this.degArr[(this.actIndex + i) % this.imgCount]-(360/this.imgCount);
          //依照以上計算後的自轉角度旋轉
          slideList[(this.actIndex + i) % this.imgCount].style.transform = slideList[(this.actIndex + i) % this.imgCount].style.transform+" rotateY("+(this.degArr[(this.actIndex + i) % this.imgCount])+"deg)";
          slideListBack[(this.actIndex + i) % this.imgCount].style.transform = slideListBack[(this.actIndex + i) % this.imgCount].style.transform+" rotateY("+(this.degArr[(this.actIndex + i) % this.imgCount])+"deg)";
          slideList[(this.actIndex + i) % this.imgCount].style.left = (this.radiusWidth*Math.cos(Math.PI/2-(i*(360/this.imgCount)*(Math.PI/180)))-this.slideFix[i])+"%";
          slideListBack[(this.actIndex + i) % this.imgCount].style.left = (this.radiusWidth*Math.cos(Math.PI/2-(i*(360/this.imgCount)*(Math.PI/180)))-this.slideFix[i])+"%";
          slideList[(this.actIndex + i) % this.imgCount].style.top = this.radiusHeight*Math.sin(Math.PI/2-(i*(360/this.imgCount)*(Math.PI/180)))+"%";
          slideListBack[(this.actIndex + i) % this.imgCount].style.top = this.radiusHeight*Math.sin(Math.PI/2-(i*(360/this.imgCount)*(Math.PI/180)))+"%";
        }
        this.timeCut = setTimeout(() => {
          this.slideMove();
        }, 3000);
      },
      nextSlide(){
        clearTimeout(this.timeCut);
        this.slideMove();
      },
      preSlide(){
        clearTimeout(this.timeCut);
        const slideList = document.getElementsByClassName('photo');
        const slideListBack = document.getElementsByClassName('photoBack');
        slideList[this.actIndex].classList.remove('activeSlide');
        slideListBack[this.actIndex].classList.remove('activeSlide');
        this.actIndex = (this.actIndex +this.imgCount - 1) % this.imgCount;
        slideList[this.actIndex].classList.add('activeSlide');
        slideListBack[this.actIndex].classList.add('activeSlide');
        let alterIndex=this.actIndex;
        for(let i=0;i<this.imgCount;i++){
          alterIndex=(alterIndex+((-1)**i)*(-i));
          if(alterIndex<0){
            alterIndex=alterIndex+this.imgCount;
          }
          alterIndex=alterIndex%this.imgCount;
          slideList[alterIndex].style.zIndex = 2*(this.imgCount-i);
          slideList[alterIndex].style.transform = "translateZ("+(100*(this.imgCount-i)-1000)+"px)";
          slideListBack[alterIndex].style.zIndex = 2*(this.imgCount-i)-1;
          slideListBack[alterIndex].style.transform = "translateZ("+(100*(this.imgCount-i)-1000-1)+"px)";
          slideList[alterIndex].style.width = (this.actSlideScale-this.finalSlideScale*(Math.ceil(i/2)/Math.floor(this.imgCount/2)))+"%";
          slideListBack[alterIndex].style.width = (this.actSlideScale-this.finalSlideScale*(Math.ceil(i/2)/Math.floor(this.imgCount/2)))+"%";
          
        }
        for(let i=0;i<this.imgCount;i++){
          this.degArr[(this.actIndex + i) % this.imgCount] = this.degArr[(this.actIndex + i) % this.imgCount]+(360/this.imgCount);
          slideList[(this.actIndex + i) % this.imgCount].style.transform = slideList[(this.actIndex + i) % this.imgCount].style.transform+" rotateY("+(this.degArr[(this.actIndex + i) % this.imgCount])+"deg)";
          slideListBack[(this.actIndex + i) % this.imgCount].style.transform = slideListBack[(this.actIndex + i) % this.imgCount].style.transform+" rotateY("+(this.degArr[(this.actIndex + i) % this.imgCount])+"deg)";
          slideList[(this.actIndex + i) % this.imgCount].style.left = (this.radiusWidth*Math.cos(Math.PI/2-(i*(360/this.imgCount)*(Math.PI/180)))-this.slideFix[i])+"%";
          slideListBack[(this.actIndex + i) % this.imgCount].style.left = (this.radiusWidth*Math.cos(Math.PI/2-(i*(360/this.imgCount)*(Math.PI/180)))-this.slideFix[i])+"%";
          slideList[(this.actIndex + i) % this.imgCount].style.top = this.radiusHeight*Math.sin(Math.PI/2-(i*(360/this.imgCount)*(Math.PI/180)))+"%";
          slideListBack[(this.actIndex + i) % this.imgCount].style.top = this.radiusHeight*Math.sin(Math.PI/2-(i*(360/this.imgCount)*(Math.PI/180)))+"%";
        }
        this.timeCut = setTimeout(() => {
          this.slideMove();
        }, 3000);
      },
      stop(){
        clearTimeout(this.timeCut);
      }
    },
    beforeUnmount() {
      clearTimeout(this.timeCut);
    }
  }

</script>