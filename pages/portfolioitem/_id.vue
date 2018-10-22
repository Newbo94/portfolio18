<template>
<div v-if="item">
    <p> {{item.id}}  </p>
    </div>
</template>
 
 <script>
 import axios from "axios";

 export default {
    data(){
        return {
            item: null,
        }
    },
    
    mounted() {
        this.getItemById();
    },

    methods: {
        getItemById() {
            let itemId = this.$route.params.id;
            axios 
            .get("/data/portfolio.json")
            .then(response => {this.item = response.data.find(r => r.id === itemId)})
        }
    }
 }
 </script>
 