<template>
  <aboutUs />
  <history />
  <ourVision />
  <team />
</template>

<script>
import aboutUs from '@/components/aboutUs.vue'
import ourVision from '@/components/ourVision.vue'
import team from '@/components/team.vue'
import history from '@/components/history.vue'

export default {
  name: 'aboutUsView',
  components: {
    aboutUs,
    ourVision,
    team,
    history
  },

}

</Script>