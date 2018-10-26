<template>
  <div>
    <footer>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-4 is-offset-4 ">
              <div class="social-media-footer">
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
            </div>
          </div> 
          <div class="columns">
            <div class="column is-4 is-offset-4 footer-menu">
              <nuxt-link 
                class="has-text-white " 
                to="/portfolio">PORTFOLIO </nuxt-link>
              <nuxt-link 
                class="has-text-white custom-footer--link" 
                to="/">
                <figure class=" custom-logo--footer">
                  <img 
                    src="~assets/images/justwebwork-logo.svg" 
                    alt="Justwebwork Logo">
                </figure>
              </nuxt-link>
              <a 
                class="has-text-white" 
                href="mailto:jannilas@gmail.com" 
                target="_blank">KONTAKT</a>
            </div>
          </div>
        </div>
      </section>
      <span class="has-text-centered is-size-7 has-text-white is-copyright">
        &copy; JUSTWEBWORK  {{ new Date().getFullYear() }}
      </span> 
    </footer>
  </div>
</template>


<script>
export default {

    
}
</script>
