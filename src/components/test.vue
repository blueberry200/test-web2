<template>
  <div id="test">
    <div class="container">
      <div class="father">
        <div class="child" v-for="item in 12" >
          <img :src="require(`@/assets/img/fall/fall${item}.jpg`)" alt="photo" @load="test(item-1)">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.father{
position:relative;
width:100%;
}
.child{
  position:absolute;
  width:30%;
}
.child img{
  width:100%;
  z-index:9;
}
</style>

<script>
import { nextTick } from 'vue';

  export default{
    name:'test',
    data(){
      return{
        
      }
    },
    mounted(){
    },
    methods:{
      test(item){
        console.log(typeof item);
        let t1=document.getElementsByClassName('child');
        let t2=t1[item].offsetHeight;
        console.log('高度'+item+' '+t2);
      }
    }
  }

</script>