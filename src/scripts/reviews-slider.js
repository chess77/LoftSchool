import Vue from "vue";
import Flickity from 'vue-flickity';

new Vue({
    el: ".reviews__content1",

    components: {
        Flickity

    },

    data() {

        return {
            errors: [],
            _name: null,
            _email: null,
            _content: null,
            statusSliderback:  false,
            statusSlidernext: false,
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
            if (this.$refs.flickity.selectedIndex() == 0){
                this.statusSliderback=true;
                this.statusSlidernext=false;
                document.getElementById("backBtn").disabled=true;
            } else
                if(this.$refs.flickity.selectedIndex()
                    ==this.$refs.flickity.slides().length-1)
                {
                    document.getElementById("nextBtn").disabled=true;
                    this.statusSlidernext=true;
                    this.statusSliderback=false;
                } else
                    {
                    this.statusSliderback=false;
                    this.statusSlidernext=false;
                    document.getElementById("backBtn").disabled=false;
                    document.getElementById("nextBtn").disabled=false;
                     }
        },
    }
});