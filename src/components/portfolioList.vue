<template>
  <section id="portfolioList">
    <div class="container">
      <h1>視覺範本</h1>
      <div v-if="itemlist!==''">
        <portfolioItem 
          v-for="item in itemlist" 
          :title="item.title" 
          :des="item.des" 
          :srcstr="item.srcstr"
          :id="item.id"
          :key="id" />
      </div>
    </div>
  </section>
</template>

<style scoped>
#portfolioList{
  background: #f7fbfe;
}

</style>

<script>
import axios from 'axios';
import portfolioItem from '@/components/portfolioItem.vue';

  export default{
    name:'portfolioList',
    data() {
      return{
        itemlist:''
      }
    },
    mounted() {
      let url = 'portfolioItem.json';
      axios.get(url).then((response) => {
      this.itemlist = response.data;
        }).catch(error => {
            console.log(error);
        })
    },
    components:{
      portfolioItem
    }
  }

</script>