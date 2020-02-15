import Vue from "vue";

const prevs = {
    template: "#slider-prevs",
    props: ["id", "prev"],
}

const btns = {
    template: "#slider-btns"
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
        prevs, btns
    },
    mounted() {
        const data = require("../data/works.json");
        this.works = data;
    }
});