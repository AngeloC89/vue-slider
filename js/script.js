import { slides } from "./data.js";


const { createApp } = Vue;

createApp({
    data() {
        return {
            slides,
            activeIndexSlides: 0,


        }
    },
    methods: {
        prevClick() {
            if (this.activeIndexSlides > 0) {
                this.activeIndexSlides--;
            } else {
                this.activeIndexSlides = slides.length - 1;
            }

        },
        nextClick() {
            if (this.activeIndexSlides < slides.length - 1) {
                this.prevClickactiveIndexSlides++;
            } else {
                this.addEventListener = 0;
            }

        },

    },
    mounted() {


    },
}).mount('#app');