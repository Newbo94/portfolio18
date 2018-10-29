<template>
  <div>
    <section class="section">
      <div class="container portfoliolist-container">
        <div 
          v-for="item in porfolioitems" 
          v-if="item.id == 1" 
          :key="item.id" 
          class="columns portfolio-columns">
          <div class="column has-pattern-top is-four-fifiths portfolio-image-card">
            <figure class="image is-480x480">
              <img 
                :src="item.img" 
                :alt="item.title">
            </figure>
          </div>
          <div class="column is-two-fifiths  portfolio-excerpt-card has-dropshadow">
            <h2 class="is-size-2">{{ item.title }}</h2>
            <span class="portfolio-tags"><p 
              v-for="item in item.tags" 
              :key="item.id"> | {{ item }} | </p></span>
            <p>{{ item.excerpt }}</p>
            <div class="has-pattern-bottom-right portfolio-singlelink"><nuxt-link :to="`/portfolioitem/${item.id}`" > Se projekt </nuxt-link></div>
          </div>
        </div>
      </div>
      <div class="portfolio-link">
        <nuxt-link 
          class=" is-uppercase has-text-centered" 
          to="/portfolio">Flere projekter </nuxt-link>
      </div>
    </section>
  </div>

   



</template>

<script>
import contactbox from "@/components/ContactBox.vue";
import axios from "axios";

export default {
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

