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
                groupCells: true,
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
    },
    methods: {
        next() {
            this.$refs.flickity.next();
        },

        previous() {
            this.$refs.flickity.previous();
        }
    }
});