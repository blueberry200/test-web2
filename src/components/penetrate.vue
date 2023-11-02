<template>
  <div id="penetrate">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10 col-md-7">
          <div class="picWin">
            <img class="picBack" src="@/assets/img/penetrate/penetrateBack2.jpg">
            <img class="moveItem" src="@/assets/img/penetrate/moveItem.png"/>
            <div class="filters" v-for="item in filterCount">
            </div>
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
  overflow:hidden;
}
.moveItem{
  width:50%;
  position:absolute;
  top:-50%;
  left:0;
  z-index:5;
  animation-name:move;
  animation-duration:4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.picBack{
  width:100%;
}
.filters{
  position:absolute;
  width:100%;
  z-index:10;
  background-image: url("@/assets/img/penetrate/penetrateBack2.jpg");
}
@keyframes move {
  0%{top:-50%}
  25%{top:25%}
  50%{top:100%}
  75%{top:25%}
  100%{top:-50%}
}
</style>

<script>

  export default{
    name:'penetrate',
    data(){
      return{
        filterHeight:5,
        heightFix:6,
        alter:1
      }
    },
    computed:{
      filterCount(){
        return 100/(this.filterHeight*2);
      }
    },
    mounted(){
      setTimeout(() => {
        this.setPosition();
      }, 0);
    },
    methods:{
      setPosition(){
          let filters = document.getElementsByClassName('filters');
          for(let i=0;i<filters.length;i++){
            filters[i].style.height=this.filterHeight+"%";
            filters[i].style.left="0%";
            filters[i].style.backgroundSize="100%";
            filters[i].style.top=(this.filterHeight*this.alter+i*this.filterHeight*2)+"%";
            filters[i].style.backgroundPosition="50% "+(this.filterHeight*this.alter+i*this.filterHeight*2+i*this.heightFix/filters.length)+"%";
          }
        
      }
    }
  }

</script>