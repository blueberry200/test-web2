<template>
    <headertag />
    <footertag />
</template>

<script>
import footertag from '@/components/footer.vue'
import headertag from '@/components/header.vue'

  export default{
    components: {
        headertag,
        footertag
    }
  }
  
</script>