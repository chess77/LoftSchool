import Vue from "vue";
import Flickity from 'vue-flickity';
import axios from "axios";
const reviews_data = axios.create({
    baseURL: "https://webdev-api.loftschool.com"
});
const baseURL_pic= "https://webdev-api.loftschool.com";
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

    async created() {

                      // const data1 = require("../data/reviews.json");
                   //this.reviews = data1;
                 //  console.log(data1)
              //this.works = this.makeArrWithRequireImages(data);

        const  data = await reviews_data.get("/reviews/322")
            .then(response => {
                if (response && response.status === 200) {
                    this.flickityOptions.reviews = this.makeArrWithRequireImages( response.data) // this will be used in v-for inside flickity
                } else {
                    // raven....
                }
            })
        .then(response => {
                this.$nextTick(function () { // the magic
                    this.$refs.flickity.rerender()
                })
            })
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
                const requirePic =  (baseURL_pic+'/'+item.photo);
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