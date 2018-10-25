<template>
<div>
    <hero />

    <section class="section single-portfolio" v-if="portfolioitem">
        <div class="container">
            <div class="columns portfolio-item"> 
                <div class="column is-6">
                <div class="has-dropshadow single-portfolio-card-box">
                 <h1 class="is-size-2"> {{portfolioitem.title}}  </h1>
                <span class="portfolio-tags"><p v-for="item in portfolioitem.tags" :key="item.id">{{item}}</p></span>  
                <p>{{portfolioitem.bodytext}} </p>
                </div>
            <nuxt-link class="is-uppercase has-text-centered"  to="/portfolio">Flere projekter </nuxt-link>
                </div>
                <div class="column is-6">
                    <figure class="image is-480x480">
                        <img :src="portfolioitem.img" :alt="portfolioitem.title">
                    </figure>
                </div>
            </div>
        </div>
        
    </section>

    <div v-else>
        no matching item
    </div>
    </div>
</template>
 
 <script>
 import axios from "axios";
 import hero from "@/components/MainHero.vue";

 export default {
     components: {
         hero,
     },

    data(){
        return {
            portfolioitem: null,
        }
    },
    
    mounted() {
        this.getItemById();
    },

    methods: {
        getItemById() {
            let itemId = this.$route.params.id;
            console.log(typeof itemId);
            axios 
            .get("/data/portfolio.json")
            .then(response => {this.portfolioitem = response.data.find(r => r.id === itemId);
             console.log(this.portfolioitem);
            
            
            })
            .catch(error => console.log(error));
            
           
        }
    }
 }
 </script>
 