<template>
<div>
       <section class="section">
        <div class="container">
            <div v-for="item in porfolioitems" :key="item.id" v-if="item.id === 1" class="columns">
                <div class="column">
                    <figure class="image is-480x480">
                        <img :src="item.img" :alt="item.title">
                    </figure>
                </div>
              <div  class="column">
                <h2>{{item.title}}</h2>
                <span><p>{{item.tags[0]}} {{item.tags[1]}} </p></span>
                <p>{{item.excerpt}}</p>
              </div>
            </div>
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

