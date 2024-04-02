import { slides } from "./data.js";


const { createApp } = Vue;

createApp({
    data() {
        return {
            slides,
            activeIndexSlides: 0,
            activeSlide: null,
            

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
        play() {
            this.activeSlide = setInterval(this.nextClick, 1000)
        },
        stop() {
           clearInterval(this.activeSlide);
           this.activeSlide = null;
        },
        
    },
    mounted() {      
            this.play()     
    },
}).mount('#app');