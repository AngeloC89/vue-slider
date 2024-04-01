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
                this.activeIndexSlides++;
            } else {
                this.activeIndexSlides = 0;
            }
        },
        goToSlide(index) {
            this.activeIndexSlides = index;
        },
        stop() {

            this.activeSlide = clearInterval(this.activeSlide)
        },
        play() {
            this.activeSlide = setInterval(this.nextClick, 3000)
        }
    },
    mounted() {      
            this.activeSlide = setInterval(this.nextClick, 3000)       
    },
}).mount('#app');