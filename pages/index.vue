<template>
  <div>
    <section class="hero custom-hero">
      <div class="hero-body is-vertical-center">
        <section class="container has-text-centered">
          <figure class=" custom-logo">
            <img 
              src="~/assets/images/justwebwork-logo.svg" 
              alt="Justwebwork Logo">
          </figure>
          <hr >
          <h1 class="is-size-4 is-uppercase primary-font is-bold has-text-weight-bold has-text-white " >Frontend development </h1>
          <h2 class="is-size-4 is-uppercase primary-font is-bold has-text-weight-bold has-text-white "> Ui/ux design </h2>
          <div class="custom-cta-hero">
            <nuxt-link 
              class="has-text-white" 
              to="/portfolio">Portfolio</nuxt-link>
            <a 
              class="has-text-white" 
              href="mailto:jannilas@gmail.com">Hire me</a>
          </div>
        </section>    
      </div>
    </section>
    <section class="section  about-container">
      <div class="container has-heading-bg">
        <div class="columns about-columns">
          <div class="column has-pattern-bottom is-three-fifths has-dropshadow is-about-text-container">
            <div class="columns ">
              <div class="column is-four-fifiths">
                <h2 class=" is-uppercase has-text-centered  is-size-1 is-size-2-mobile has-underline has-text-weight-bold">Om mig</h2>
                <p>
                  Hej! Mit navn er Jan-Nilas, jeg er 23 år gammel og står i starten af min karriere som Frontend webudvikler. Jeg er oprindelig fra Tyskland og har boet i Danmark i 21 år. Jeg er opvokset tosproget og behersker både dansk og tysk på modersmål niveau. Til dagligt læser jeg til webudvikler på UCL i Odense. Jeg er nu på 2. Semester og er derfor på jagt efter en praktikplads til mit 3. Semester.
                </p>
                <a href="/CV-Jan-Nilas-Gerthv2.pdf" target="_blank">Hent cv </a>
              </div>
            </div>
          </div>
          <div class="column is-two-fifths is-about-img-container"> 
            <figure class="image is-480x480 has-pattern-top ">
              <img 
                class="is-rounded " 
                src="~/assets/images/jan-nilas-gerth-profile.jpg" 
                alt="Jan-Nilas Gerh Profile picture">
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section class="skills-container ">
      <div class="container has-heading-bg">
        <div class="title">
          <h3 class="is-uppercase has-text-centered is-size-2-mobile is-size-1 has-underline has-text-weight-bold"> Mine <br > Færdigheder </h3>
        </div>
      </div>
      <div class="hero  skills-container-bg">
        <div class="container tab-container">
          <div class="tab tab-btn">
            <button 
              :class="[ activetab === 1 ? 'active' : '' ]" 
              class="tablinks" 
              @click="activetab=1">Web development</button>
            <button 
              :class="[ activetab === 2 ? 'active' : '' ]" 
              class="tablinks" 
              @click="activetab=2">Concept</button>
            <button 
              :class="[ activetab === 3 ? 'active' : '' ]" 
              class="tablinks" 
              @click="activetab=3">Design</button>
          </div>
          <div class="tabs">
            <div 
              v-if="activetab === 1" 
              id="web" 
              class="web tabcontent">
              <p> Mine webudviklings færdigheder, er først blevet udviklet på uddannelsen til multimediedesigner, hvor jeg første gang kom i berøring med HTML5 & CSS3. Jeg har siden arbejdet med forskellige sprog som C#, JavaScript, PHP, samt nogle forskellige frontend frameworks som Vue.js. Jeg har også udviklet i CMS Umbraco og WordPress, hvor jeg primært har arbejdet med WordPress.</p>
            </div>
            <div 
              v-else-if="activetab === 2" 
              id="concept" 
              class="web tabcontent">
              <p>Jeg har arbejdet en del med konceptudvikling og prøvet forskellige metoder. Jeg har f.eks. arbejdet meget med Design Thinking, for at få en bedre forståelse for brugeren. I min koncept fase har jeg altid brugeren i fokus, for at udvikle den bedste mulige oplevelse for denne.  </p>
            </div>
            <div 
              v-else-if="activetab === 3" 
              id="design" 
              class="web tabcontent">
              <p> I design fasen bruger jeg meget tid på at skabe det hel rigtige design til den given målgruppe. Design Thinking er den proces jeg bruger, men har også anvendt andre som f.eks. ”The Five Elements of UX”. Kompetencer i design og koncept udvikling styrker mig også i min webudviklings tilgang. Jeg har en bedre forståelse for hele processen og samtidig bedre forstå en designers tankegang.  </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container tech-skill-container">
        <div class="columns">
          <div class="column is-flex is-three-fifths custom-tech-skill">
            <h3 class="is-size-2 is-uppercase is-bold has-text-weight-bold">Tekniske <br> værktøjer</h3>
            <p>Jeg har arbejdet med en lang række forskellige værktøjer til at optimerer min udviklingsproces.  Til næsten alle projekter bruger jeg <b>Git</b> til version styringJeg er kompetent i to CMS – <b>Umbraco & Wordpress </b>. Jeg har arbejdet mest med Wordpress hvor jeg har udvikling flere Templates, mindre plugins osv.  I frontend udvikling har jeg arbejdet med JavaScript frameworket <b>Vue.js</b>. Jeg også komptent i <b>SASS</b>, <b>Gulp</b> og arbejdet lidt med <b>Webpack</b> </p>
          </div>
          <div class="column is-two-fifths ">
            <figure class="image is-480x480">
              <img 
                src="~/assets/images/skills-git-php-gulp-asp-umbraco.svg" 
                alt="Mine Tech skills">
            </figure>
          </div>
        </div>
      </div>
    </section>
    <div class="portfolio">  
      <h3 class="is-uppercase has-text-centered is-size-2-mobile  is-size-1 has-underline has-text-weight-bold has-heading-bg"> Projekter </h3>
      <portfoliolist /> 
    </div>
    <section class="section">
      <div class="container  instagram-container">
        <h3 class="is-uppercase has-heading-bg has-text-centered is-size-2-mobile  is-size-1 has-underline has-text-weight-bold">Instagram</h3>
        <template v-if="grams.length > 0">
          <div class="instagram-post-container">
            <div 
              v-for="gram in grams.slice(0,4)" 
              :key="gram" 
              class="instagram-single-post">
              <a 
                :href="gram.link" 
                target="_blank">
                <img 
                  :src="gram.images.standard_resolution.url" 
                  :alt="gram.text" >
              </a>
            </div>
          </div>
        </template>
        <div 
          v-else 
          class="loading"/>
        <div 
          v-if="error" 
          class="error">Sorry, the Instagrams couldn't be fetched.</div>
        <div class="instagram-feed-link"><a 
          target="_blank" 
          href="https://www.instagram.com/justwebwork/">SE HELE FEED</a></div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import portfoliolist from "@/components/PortfolioList.vue";

export default {
  components: {
    portfoliolist
  },

  data() {
    return {
      activetab: 1,
      access_token: "5624980958.e5777ce.6e0b8e460c23464e82709e76d00da666",
      url: "https://api.instagram.com/v1/users/self/media/recent/",
      username: "",
      grams: [],
      next_url: "",
      error: false,
      limit: 5
    };
  },
  computed: {
    instapage() {
      return "https://www.instagram.com/" + this.username;
    }
  },
  created() {
    this.getGrams();
  },

  methods: {
    getGrams() {
      axios
        .get(this.url + "?access_token=" + this.access_token)
        .then(({ data }) => {
          this.grams = data.data;
          this.username = data.data[0].user.username;
          this.next_url = data.pagination.next_url;
        })
        .catch(function(error) {
          console.log(error);
          this.error = true;
        });
    },
    getMoreGrams() {
      axios
        .get(this.next_url)
        .then(({ data }) => {
          this.grams = this.grams.concat(data.data);
          this.next_url = data.pagination.next_url;
        })
        .catch(function(error) {
          console.log(error);
          this.error = true;
        });
    }
  }
};
</script>

