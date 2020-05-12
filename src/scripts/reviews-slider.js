import Vue from "vue";
import Flickity from 'vue-flickity';

new Vue({
    el: ".reviews__content1",

    components: {
        Flickity

    },

    data() {
        return {
            statusSlider_back:  false,
            statusSlider_next: false,
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
                this.statusSlider_back=true;
                this.statusSlider_next=false;
                document.getElementById("backBtn").disabled=true;
            } else if(this.$refs.flickity.selectedIndex()==this.$refs.flickity.slides().length-1){
                document.getElementById("nextBtn").disabled=true;
                this.statusSlider_next=true;
                this.statusSlider_back=false;
            } else{
                this.statusSlider_back=false;
                this.statusSlider_next=false;
                document.getElementById("backBtn").disabled=false;
                document.getElementById("nextBtn").disabled=false;
            }
        },
    }
});