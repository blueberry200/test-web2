<template>
  <portfolioList />
  <partWeb />
</template>

<script>
import portfolioList from '@/components/portfolioList.vue'
import partWeb from '@/components/partWeb.vue'

export default {
  name: 'ProductListView',
  components: {
    portfolioList,
    partWeb
  }
}
</script>
