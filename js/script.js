import { slides } from "./data.js";


const{createApp} = Vue;

createApp({
    data(){
        return {
            slides,
            activeIndexSlides: 0,

         
        }
    },
    methods: {
        
          
        },
    mounted(){

    },
}).mount('#app');