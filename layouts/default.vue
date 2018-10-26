<template>
  <div class="app">
    <mainheader />
  
    <nuxt/>
    <contact />
    <mainfooter/>
  </div>
</template>

<script>
import mainheader from '@/components/MainHeader.vue'
import contact from '@/components/ContactBox.vue'
import mainfooter from '@/components/MainFooter.vue'
export default {
  components: {
    mainheader,
    mainfooter,
    contact
  }
}
</script>
