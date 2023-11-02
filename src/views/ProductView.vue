<template>
  <section id="product">
    <div class="row justify-content-center">
      <div class="imgWindow col-9 col-sm-5">
        <div v-if="srcV">
        <img :src="require(`@/assets/img/${srcV}`)" />
        </div>
      </div>
      <div class="productCollect col-sm-5">
        <div class="infoCollect">
          <h3>{{ title }}</h3>
          <span class="forBottomBorder">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <p>{{ des }}</p>
        </div>
        <div class="pageCollect">
          <p>所有頁面</p>
          <div v-if="pagelist!==''">
            <pageCollectItem @update="changeImg"
              v-for="page in pagelist" 
              :ptitle="page.ptitle" 
              :psrc="page.psrc" 
              :pid="page.pid" 
              :srcV="this.srcV"
              :key="pid" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#product{
  position: relative;
  margin:0 auto;
  box-shadow: 0px 2px 22px rgba(0, 0, 0, 0.12);
}
.productCollect{
  position:relative;
  height: 80vh;
  padding: 40px;
  display:table;
}
.imgWindow{
  height: 75vh;
  overflow: scroll;
  border: 2px solid rgba(210, 173, 236, 0.248);
  border-radius: 15px;
  padding:0;
}
.infoCollect{
  margin:0 auto 5vh;
}
.infoCollect h3{
  color:rgb(226, 153, 51);
}
.infoCollect p{
  color:rgba(74, 80, 83, 0.842);
}
.imgWindow img{
  width: 100%;
}
.forBottomBorder{
  border-top: 2px solid rgba(83, 83, 214, 0.5);
}

</style>

<script>
import axios from 'axios';
import pageCollectItem from '@/components/pageCollect.vue';

export default {
  name: 'productView',
  data(){
    return{
      pagelist:'',
      srcV:this.srcstr
    }
  },
  computed:{
    title(){
      return this.$store.state.title;
    },
    des(){
      return this.$store.state.des;
    },
    srcstr(){
      return this.$store.state.srcstr;
    },
    id(){
      return this.$store.state.id;
    }
  },
  watch: {
    id: {
      handler(){
        let url = 'portfolioJson/'+this.id+'.json';
        axios.get(url).then((response) => {
        this.pagelist = response.data;
          }).catch(error => {
              console.log(error);
          })
      },
      immediate: true
    },
    srcstr: {
      handler(){
        this.srcV=this.srcstr
      },
      immediate: true
    }
  },
  components:{
    pageCollectItem
  },
  methods:{
    changeImg(val){
      this.srcV = val
    }
  }
}
</script>
