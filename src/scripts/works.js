import Vue from "vue";

const prevs = {
    template: "#slider-prevs",
    props: ["works"]
}

const btns = {
    template: "#slider-btns"
}

const works = {
    template: "#slider-works",
    props: ["works"]
}

new Vue({
    el: "#slider-component",
    template: "#slider-container",
    data() {
        return {
            works: []
        };
    },
    components: {
        prevs, btns, works
    },
    methods: {
        makeArrWithRequiredImages(data) {
            return data.map( item => {
                const requiredPic = require(`../images/content/${item.prev}`);
                item.prev = requiredPic;
                return item;
            })
        }
    },
    mounted() {
        const data = require("../data/works.json");
        this.works = this.makeArrWithRequiredImages(data);
    }
});