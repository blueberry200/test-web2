<template>
  <div class="pageWin">
    <a href="#" @click.prevent=""><img :src="require(`@/assets/img/${psrc}`)" @click="clickImg()"/></a>
    <p>{{ ptitle }}</p>
  </div>
</template>

<style scoped>
.pageWin{
  width:80px;
  display:inline-block;
  padding:5px;
  margin:0 30px 5px 0;
}
.pageWin img{
  width:100%;
  height: 14vh;
  object-fit: cover;
  object-position: 50% top;
  box-shadow: 0px 2px 22px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
.pageWin p{
  text-align: center;
  color: rgba(36, 33, 33, 0.715);
  margin:5px;
}
.pageWin img:hover{
  box-shadow: 0px 2px 22px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  transition: 0.3s;
}
</style>

<script>
  export default{
    name:'pageCollectItem',
    props:{
      pid:String,
      ptitle:String,
      psrc:String,
      srcV:String
    },
    data(){
      return{
          resrc:this.psrc
      }
    },
    methods:{
      clickImg(){
          this.$emit('update',this.resrc);
      }
    }
  }

</script> 