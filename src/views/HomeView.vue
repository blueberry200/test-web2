<template>
  <startBanner />
  <service />
  <homeVideo />
  <partWeb2 />
  <testimonial />
</template>

<script>
import startBanner from '@/components/startBanner.vue'
import service from '@/components/service.vue'
import testimonial from '@/components/testimonial.vue'
import partWeb2 from '@/components/partWeb2.vue'
import homeVideo from '@/components/homeVideo.vue'


export default {
  name: 'HomeView',
  components: {
    startBanner,
    service,
    testimonial,
    partWeb2,
    homeVideo,
  }
}
</script>
