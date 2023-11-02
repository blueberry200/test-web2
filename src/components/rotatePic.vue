<template>
  <div id="rotatePic">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-7 d-flex justify-content-center">
          <div class="picWin">
            <img class="heightSet" src="@/assets/img/rotatePic/rotateP1.jpg" />
            <div class="pic1" v-for="item in picCount"></div>
            <div class="pic2" v-for="item in picCount"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .picWin{
    position:relative;
    width:100%;
  }
  .heightSet{
    width:100%;
    opacity:0;
  }
  .pic1{
    background-image:url("@/assets/img/rotatePic/rotateP1.jpg");
    width:100%;
    position:absolute;
    z-index:5;
    backface-visibility:hidden;
  }
  .pic2{
    background-image:url("@/assets/img/rotatePic/rotateP2.jpg");
    width:100%;
    position:absolute;
    transform:rotateX(180deg);
  }
</style>

<script>
  export default{
    name:'rotatePic',
    data(){
      return{
        picCount:8,
        heightFix:14
      }
    },
    methods:{
      setPosition(){
        let pic1 = document.getElementsByClassName('pic1');
        let pic2 = document.getElementsByClassName('pic2');
        for(let i=0;i<pic1.length;i++){
          pic1[i].style.top=(100/this.picCount*i)+"%";
          pic1[i].style.height=100/this.picCount+"%";
          pic1[i].style.backgroundSize="100%";
          //backgroundPosition會有誤差，要微調
          pic1[i].style.backgroundPosition="50% "+(100/this.picCount*i+i*this.heightFix/pic1.length)+"%";
          pic2[i].style.top=(100/this.picCount*i)+"%";
          pic2[i].style.height=100/this.picCount+"%";
          pic2[i].style.backgroundSize="100%";
          pic2[i].style.backgroundPosition="50% "+(100/this.picCount*i+i*this.heightFix/pic2.length)+"%";
        }
      },
      firstRotate(){
        setTimeout(() => {
          let pic1 = document.getElementsByClassName('pic1');
          let pic2 = document.getElementsByClassName('pic2');
          for(let i=0;i<pic1.length;i++){
            pic1[i].style.transform = "rotateX(540deg)";
            pic2[i].style.transform = "rotateX(720deg)";
          }
          this.rotateBackward();
        }, 2000)
      },
      rotateForward(){
        setTimeout(() => {
          let pic1 = document.getElementsByClassName('pic1');
          let pic2 = document.getElementsByClassName('pic2');
          for(let i=0;i<pic1.length;i++){
            pic1[i].style.transform = "rotateX(540deg)";
            pic2[i].style.transform = "rotateX(720deg)";
          }
          this.rotateBackward();
        }, 5000)
      },
      rotateBackward(){
        setTimeout(() => {
          let pic1 = document.getElementsByClassName('pic1');
          let pic2 = document.getElementsByClassName('pic2');
          for(let i=0;i<pic1.length;i++){
            pic1[i].style.transform = "rotateX(0deg)";
            pic2[i].style.transform = "rotateX(180deg)";
          }
          this.rotateForward();
        }, 5000)
      }
    },
    mounted(){
      this.setPosition();
      setTimeout(() => {
        
        let pic1 = document.getElementsByClassName('pic1');
        let pic2 = document.getElementsByClassName('pic2');
        for(let i=0;i<pic1.length;i++){
          pic1[i].style.transition = "1.5s";
          pic2[i].style.transition = "1.5s";
          //錯開每個slice翻轉時間
          pic1[i].style.transitionDelay = (2.5/this.picCount*i)+"s";
          pic2[i].style.transitionDelay = (2.5/this.picCount*i)+"s";
        }
        this.firstRotate();
      }, 0);
    }
  }

</script>