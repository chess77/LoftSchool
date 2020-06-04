import Vue from "vue";
import axios from "axios";
import { baseURL } from "../admin/store/modules/constants";
const works_data = axios.create({
    baseURL: "https://webdev-api.loftschool.com",
});
const baseURL_pic = "https://webdev-api.loftschool.com";
const btns = {
    template: "#slider-btns",
};
const thumbs = {
    template: "#slider-thumbs",
    props: ["works", "currentWork"],
};

const display = {
    template: "#slider-display",
    components: { thumbs, btns },
    props: ["currentWork", "works", "currentIndex"],
    computed: {
        reversedWorks() {
            const works = [...this.works];
            return works.reverse();
        },
    },
};

const tags = {
    template: "#slider-tags",
    props: ["tags"],
};

const info = {
    template: "#slider-info",
    components: { tags },
    props: ["currentWork"],
    computed: {
        tagsArray() {
            return this.currentWork;
        },
    },
};

new Vue({
    el: "#slider-component",
    template: "#slider-container",
    components: { display, info },
    data() {
        return {
            works: {},
            currentIndex: 0,
        };
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex];
        },
    },
    watch: {
        currentIndex(value) {
            this.makeInfiniteLoopForIndex(value);
        },
    },
    methods: {
        makeInfiniteLoopForIndex(value) {
            const worksAmountFromZero = this.works.length - 1;
            if (value > worksAmountFromZero) this.currentIndex = 0;
            if (value < 0) this.currentIndex = worksAmountFromZero;
        },
        handleSlide(direction) {
            switch (direction) {
                case "next":
                    this.currentIndex++;
                    break;
                case "prev":
                    this.currentIndex--;
                    break;
            }
        },

        selectItem(item) {
            this.currentIndex = item;
        },
        makeArrWithRequireImages(array) {
            return array.map((item) => {
                const requirePic = baseURL_pic + "/" + item.photo;
                item.photo = requirePic;
                return item;
            });
        },
    },
    async created() {
        const { data } = await works_data.get("/works/322");
        this.works = this.makeArrWithRequireImages(data);
    },
});
