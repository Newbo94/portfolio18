<template>
    <header>

        <div class="header-topbar">
             <div class="social-media-header">
                        <a href="https://www.instagram.com/justwebwork/" target="_blank"><fa size="lg" :icon="['fab', 'instagram']" /></a>
                        <a href="https://github.com/Newbo94" target="_blank"><fa size="lg"  :icon="['fab', 'github-square']" /></a>
                        <a href="https://www.linkedin.com/in/jan-nilas-gerth-b87116114/" target="_blank"><fa size="lg"  :icon="['fab', 'linkedin']" />
</a>
                        <a href="https://www.behance.net/jannilasd1ff" target="_blank"><fa size="lg"  :icon="['fab', 'behance-square']" /></a>
                    </div>
        <span class="header-menu-icon is-size-5 ">M<span v-on:click="openNav"><img src="~assets/images/menu.svg" alt="menu-icon"></span>NU</span>
        </div>
        <div id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav">&times;</a>
        <div class="overlay-content">
             <nuxt-link class="is-size-2" to="/">HOME</nuxt-link>
          <nuxt-link  class="is-size-2" to="/portfolio">PORTFOLIO</nuxt-link>
            <a class="is-size-2" href="mailto:jannilas@gmail.com" target="_blank">KONTAKT</a>
            
        </div>
        </div>
    </header>
</template>



<script>
export default {
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
