import Vue from "vue";


new Vue({
    el: "#reviews-check-form",
    template: '#reviews-check-template',
    data() {
        return {
            errors: [],
            name:null,
            email: null,
            content:null


        };
    },
    methods: {
        checkForm: function (e) {
            console.log(111);
            this.errors = [];

            if (!this.name) {
                this.errors.push('Укажите имя.');
            }
            if (!this.content) {
                this.errors.push('ведите текст.');
            }
            if (!this.email) {
                this.errors.push('Укажите электронную почту.');
            } else if (!this.validEmail(this.email)) {
                this.errors.push('Укажите корректный адрес электронной почты.');
            }

            if (!this.errors.length) {
                return true;
            }

            e.preventDefault();
            if (this.errors.length){
                alert("Пожалуйста, исправьте ошибки!: \n"+this.errors);

            }
            //console.log(this.errors);
        },

        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
});