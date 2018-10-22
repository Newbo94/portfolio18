<template>
  <div class="app">
    <mainheader />
    <nuxt/>
    <mainfooter/>
  </div>
</template>

<script>
import mainheader from '@/components/MainHeader.vue'
import mainfooter from '@/components/MainFooter.vue'
export default {
  components: {
    mainheader,
    mainfooter
  }
}
</script>
