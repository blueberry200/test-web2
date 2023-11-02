<template>
      <div class="row list-Item">
        <div class="portfolioText col-sm-6">
          <h3>{{ title }}</h3>
          <span class="forBottomBorder">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <p>{{ des }}</p>
          <a class="nav-link scrollto seeMoreBtn" @click.prevent="toPro()" href="#">瞭解更多</a>
        </div>
        <div class="portfolioImg col-sm-6">
          <img :src="require(`@/assets/img/${srcstr}`)" />
        </div>
      </div>
</template>

<style scoped>
.list-Item{
  position: relative;
  margin: 20px auto;
  box-shadow: 0px 2px 22px rgba(0, 0, 0, 0.12);
}
.portfolioText{
  position:relative;
  height: 64vh;
  padding: 40px;
  display:table;
}
.portfolioImg{
  padding: 40px;
}
.portfolioText h3{
  color:rgb(226, 153, 51);
}
.portfolioText p{
  color:rgba(74, 80, 83, 0.842);
}
.portfolioImg img{
  width: 100%;
  height: 50vh;
  object-fit: cover;
  object-position: 50% top;
  box-shadow: 0px 2px 22px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
}
.forBottomBorder{
  border-top: 2px solid rgba(83, 83, 214, 0.5);
}
.seeMoreBtn{
  color: #3B261E;
  font-size: 16px;
  background-color: #f7fbfe;
  padding: 10px 25px;
  border-style: solid;
  border-color: #3B261E;
  border-width: 1px;
  letter-spacing: 0.1em;
  position: absolute;
  bottom: 40px;
  transition: 0.3s;
}
.seeMoreBtn:hover{
  background-color: #3B261E;
  color: #f7fbfe;
}
</style>

<script>
  export default{
    name:'portfolioItem',
    data(){
      return{
        productObj:{
          title: this.title,
          des: this.des,
          srcstr: this.srcstr,
          id: this.id
        }
      }
    },
    props:{
      title:String,
      des:String,
      srcstr:String,
      id:String
    },
    methods:{
      async toPro(){
        await this.$store.commit('setProduct', this.productObj);
        this.$router.push({
          name:"product"
        })
      }
    }
  }

</script>