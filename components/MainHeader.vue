<template>
  <header>

    <div class="header-topbar">
      <div class="social-media-header">
        <a 
          href="https://www.instagram.com/justwebwork/" 
          target="_blank"><fa 
            :icon="['fab', 'instagram']" 
            size="lg" /></a>
        <a 
          href="https://github.com/Newbo94" 
          target="_blank"><fa 
            :icon="['fab', 'github-square']" 
            size="lg" /></a>
        <a 
          href="https://www.linkedin.com/in/jan-nilas-gerth-b87116114/" 
          target="_blank"><fa 
            :icon="['fab', 'linkedin']" 
            size="lg" />
        </a>
        <a 
          href="https://www.behance.net/jannilasd1ff" 
          target="_blank"><fa 
            :icon="['fab', 'behance-square']" 
            size="lg" /></a>
      </div>
      <span class="header-menu-icon is-size-5 ">M<span @click="openNav"><img 
        src="~assets/images/menu.svg" 
        alt="menu-icon"></span>NU</span>
    </div>
    <div 
      id="myNav" 
      class="overlay">
      <a 
        href="javascript:void(0)" 
        class="closebtn" 
        @click="closeNav">&times;</a>
      <div class="overlay-content">
        <nuxt-link 
          class="is-size-2" 
          to="/">HOME</nuxt-link>
        <nuxt-link 
          class="is-size-2" 
          to="/portfolio">PORTFOLIO</nuxt-link>
        <a 
          class="is-size-2" 
          href="mailto:jannilas@gmail.com" 
          target="_blank">KONTAKT</a>
            
      </div>
    </div>
  </header>
</template>



<script>
export default {

    watch: {
    '$route' () {
      document.getElementById("myNav").style.width = "0%";
    }
  },
    methods: {
        openNav: function () {
            document.getElementById('myNav').style.width = "100%";
        },
        closeNav: function() {
            document.getElementById("myNav").style.width = "0%";
        }
    }
}
</script>
