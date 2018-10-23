<template>
<div class="portfolio-overview">
    <hero />

       <section class="section">
   <h1 class="is-uppercase has-heading-bg has-text-centered is-size-1 has-underline has-text-weight-bold">Mine<br> projekter</h1>
        <div class="container portfoliolist-container">
            <div v-for="item in porfolioitems" :key="item.id" class="columns portfolio-columns">
                <div class="column  is-four-fifiths portfolio-image-card">
                    <figure class="image is-480x480">
                        <img :src="item.img" :alt="item.title">
                    </figure>
                </div>
              <div class="column is-two-fifiths portfolio-excerpt-card has-dropshadow">
                <h2 class="is-size-2">{{item.title}}</h2>
                 <span class="portfolio-tags"><p v-for="item in item.tags" :key="item.id">{{item}}</p></span>
                <p>{{item.excerpt}}</p>
                <div class="portfolio-singlelink"><nuxt-link :to="`/portfolioitem/${item.id}`" > Se projekt </nuxt-link></div>
              </div>
            </div>
        </div>
      
    </section>
</div>
</template>

<script>
import hero from "@/components/MainHero.vue";
import axios from "axios";

export default {
  components: {
      hero,
  },
  
  data() {
    return {
      porfolioitems: null
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      axios
        .get("/data/portfolio.json")
        .then(response => (this.porfolioitems = response.data));
    }
  }
};
</script>

