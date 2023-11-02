<template>
  <section id="cascade">
    <div id="titleContainer">
      <div class="title">瀑布流</div>
      <div class="titleContext">根據不同的螢幕大小有不同的欄數喔～</div>
    </div>
    <div id="photosContainer">
      <div class="photo" v-for="item in imgCount">
        <img :src="require(`@/assets/img/fall/fall${item}.jpg`)" alt="photo" @load="cascade(item)">
      </div>
    </div>
  </section>
</template>

<style scoped>
#cascade{
  width:100%;
  margin:30px 0px 40px;
  height:auto;
  justify-items: center;
  display:flex;
  justify-content:center;
  flex-wrap: wrap;
}
#titleContainer{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width:100%
}
#titleContainer .title{
  color: brown;
  border-color: brown;
  border-bottom: 4px solid;
  margin-bottom:20px;
  margin-top:40px;
  width:40%;
  font-size: 4em;
  text-align: center;
  padding-bottom:15px;
  font-family: "DFKai-SB","STKaiti";
  box-shadow:0 15px 10px -15px brown;
}
.titleContext{
  color: brown;
  margin-bottom:70px;
  width:80%;
  font-size: 1.5em;
  text-align: center;
  font-family: "DFKai-SB","STKaiti";
}
#photosContainer{
  width:90%;
  position: relative; 
  display:flex;
  justify-content:center;
}
.photo{
  width:22%;
  height: auto;
  position: absolute;
  overflow:auto;
}
.photo img{
  width:100%;
  display:block;
  border-radius:15px;
  box-shadow: 0 0 10px 0 rgb(0 0 0 30%);
}
@media screen and (max-width: 992px) {
  .photo{
    width:26%;
  }
}
@media screen and (max-width: 768px) {
  .photo{
    width:40%;
  }
}
@media screen and (max-width: 576px) {
  #titleContainer .title{
    font-size:3.5em;
    width:70%;
  }
}
</style>

<script>

  export default{
    name:'cascade',
    mounted(){
      window.onresize = () => {
        this.cascade(this.imgCount);
      }
    },
    data(){
      return{
        imgCount:12
      }
    },
    methods:{
      cascade(item){
        if(item==this.imgCount){
          const gap = 18;
          const photosContainer = document.getElementById('photosContainer');
          const photosContainerWidth = photosContainer.offsetWidth;
          const photos = document.getElementsByClassName('photo');
          const photoWidth = photos[0].offsetWidth;
          const columnsCount = parseInt((photosContainerWidth) / ( photoWidth + gap ));
          //計算微調成置中的起始點
          const startPoint = (photosContainerWidth - ((photoWidth * columnsCount) + gap * (columnsCount-1))) / 2;
          const firstRowPhotosHeightArray = [];
          for (let i = 0; i < photos.length; i++){
            if (i < columnsCount){
              photos[i].style.top = 0;
              photos[i].style.left = startPoint + (photoWidth + gap) * i + 'px';
              firstRowPhotosHeightArray.push(photos[i].offsetHeight);
            }else{
              let minHeight = Math.min(...firstRowPhotosHeightArray);
              let index = firstRowPhotosHeightArray.indexOf(minHeight);
              photos[i].style.top = minHeight + gap + 'px';
              photos[i].style.left = photos[index].offsetLeft + 'px';
              firstRowPhotosHeightArray[index] = firstRowPhotosHeightArray[index] + photos[i].offsetHeight + gap;
            }
          }
          let maxHeight = Math.max(...firstRowPhotosHeightArray);
          let index2 = firstRowPhotosHeightArray.indexOf(maxHeight);   
          document.getElementById("photosContainer").style.height = firstRowPhotosHeightArray[index2] + 'px';
        }
      }           
    }
  }
  

</script>