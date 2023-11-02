<template>
  <portfolioBanner />
  <productList />
  <keepWork />
</template>

<script>
// @ is an alias to /src
import portfolioBanner from '@/components/portfolioBanner.vue'
import keepWork from '@/components/keepWork.vue'
import productList from '@/components/productList.vue'


export default {
  name: 'InformationView',
  components: {
    portfolioBanner,
    productList,
    keepWork
  }
}
</script>
