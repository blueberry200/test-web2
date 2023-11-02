<template>
  <div id="fall">
    <div class="container">
      <button @click="test()">test</button>
      <div class="row justify-content-around" v-if="fullWidth>992">
        <div class="cc col-3" v-for="item in 4">
          <div class="picCol"></div>
        </div>
      </div>
      <div class="row justify-content-around" v-else-if="fullWidth>768">
        <div class="picCol col-4" v-for="item in 3"></div>
      </div>
      <div class="row justify-content-around" v-else-if="fullWidth>576">
        <div class="picCol col-6" v-for="item in 2"></div>
      </div>
      <div class="row justify-content-around" v-else>
        <div class="picCol col-10" v-for="item in 1"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.picCol{
  padding:0;
  position:absolute;
  border:2px solid black;
  width:100%;
  z-index:5;
}
.cc{
  position:relative;
}

</style>

<script>
import { nextTick, vShow } from 'vue'

  export default{
    name:'fall',
    data(){
      return{
        fullWidth:0,
        heightArr:[]
      }
    },
    mounted(){
      this.fullWidth = window.innerWidth;
      this.paintPic();
      window.onresize = () => {
        this.fullWidth=window.innerWidth;
      }
    },
    methods:{
      async paintPic(){
        let picColCollect=document.getElementsByClassName('picCol');
        let imgC=[];
/*        for(var k=0;k<12;k++){
          let imgE=document.createElement('img');
          await imgE.setAttribute('src',require(`@/assets/img/fall/fall${k+1}.jpg`));
          imgE.setAttribute('width','100%');
          imgE.setAttribute('display','block');
          imgC[k]=imgE;
        }*/
        let imgE=document.createElement('img');
        await imgE.setAttribute('src',require(`@/assets/img/fall/fall1.jpg`));
        imgE.setAttribute('width','100%');
        imgE.setAttribute('display','block');
        imgC[0]=imgE;
        await picColCollect[0].appendChild(imgC[0]);
        await nextTick(()=>{ console.log(picColCollect[0].offsetHeight)});
/*       for(var i=0;i<1;i++){
          if(i<picColCollect.length){
              picColCollect[i].appendChild(imgC[i]);
              nextTick(()=>{ console.log(picColCollect[i-1].offsetHeight)});
          }else{
            nextTick(()=>{
              let tmpH=picColCollect[0].offsetHeight;
              let tmpIndex=0;
              for(var j=0;j<picColCollect.length;j++){
                if(picColCollect[j].offsetHeight<tmpH){
                tmpIndex=j;
                tmpH=picColCollect[j].offsetHeight;
                }
              }
              picColCollect[tmpIndex].appendChild(imgC[i]);
              this.heightArr[tmpIndex]=picColCollect[tmpIndex].offsetHeight;
              
            })
          }       
        }*/
      },
      async test(){

        let tt=document.getElementsByClassName('picCol');
        console.log(tt[0].offsetHeight);
      }
    }
  }

</script>