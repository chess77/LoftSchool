import Vue from "vue";
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);
import { required, maxLength } from 'vuelidate/lib/validators';


new Vue({
    el: "#reviews-check-form",
    template: '#reviews-check-template',
    data() {
        return {
            errorEmail:false,
            errors: [],
            name:null,
            email: null,
            content:null
        };
    },
    validations: {
        name: {
            required,
        },
        email: {
            required,
        },
        content: {
            required,
        },
    },
    methods: {
        checkForm: function (e) {
            this.errors = [];

            if (!this.name) {
                this.errors.push('Укажите имя.');
                this.errorName=true;
            }
            if (!this.content) {
                this.errors.push('ведите текст.');
            }
            if (!this.email) {
                this.errors.push('Укажите электронную почту.');
                this.errorEmail=true;
            } else if (!this.validEmail(this.email)) {
                this.errors.push('Укажите корректный адрес электронной почты.');
            }

            if (!this.errors.length) {
                return true;
            }

            e.preventDefault();
            if (this.errors.length) {
                alert("Пожалуйста, исправьте ошибки!: \n" + this.errors);
                //this.errorName=false;

            }
            else {alert("Форма отправлена")


            }
            //console.log(this.errors);
        },

        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
});