import Vue from "vue";
import Flickity from 'vue-flickity';

new Vue({
    el: ".reviews__content1",

    components: {
        Flickity

    },

    data() {
        return {
            flickityOptions: {

                initialIndex: 0,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: false,
                groupCells: 2,
                freeScroll: false,
                contain: true,
                reviews: [],
                // any options from Flickity can be used
            }
        }
    },

    created() {

        const data = require("../data/reviews.json");
        this.reviews = data;
        this.works = this.makeArrWithRequireImages(data);
    },
    methods: {
        next() {
            this.$refs.flickity.next();
            this.checkArrows();
        },

        previous() {
            this.$refs.flickity.previous();
            //console.log(this.$ref.flickity.selectedIndex);

            this.checkArrows();
        },
        makeArrWithRequireImages(array) {
            return array.map((item) => {
                const requirePic = require(`../images/content/${item.photo}`);
                item.photo = requirePic;
                return item;
            });
        },
        checkArrows(){
            console.log(this.$refs.flickity.selectedIndex());
            console.log(this.$refs.flickity.selectedIndex());
            if (this.$refs.flickity.selectedIndex() == 0){
                //document.getElementById("backBtn").disabled="disabled";
                console.log(111);
                //document.getElementById("backBtn").classList.remove('review-slider__btn');
                //.getElementById("backBtn").classList.add('review-slider__btn__notactive');
                document.getElementById("backBtn").disabled;
                this.$el.querySelector('.review-slider__btn--next').disabled;
                //this.$el.querySelector('.review-slider__btn--back').style.display="none";

                //this.$el.querySelector('.review-slider__btn--back').style.cursor= "not-allowed";
            } else if(this.$refs.flickity.selectedIndex()>=this.$refs.flickity.slides()){
                this.$el.querySelector('.review-slider__btn--next').style.display="none";
            } else{
                this.$el.querySelector('.review-slider__btn--back').style.display="inline-block";
                this.$el.querySelector('.review-slider__btn--next').style.display="inline-block";
            }
        },
    }
});