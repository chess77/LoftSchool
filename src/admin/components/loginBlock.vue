<template lang="pug">
    .container
        .back
        .form__container
            form.form__login( method="POST", @submit.prevent="login")
                .form__block
                    .form__column.login
                        .form__row.login_exit
                            input.btn__control.cancel_login(type="reset" value="")
                h2.form__title_login Авторизация
                .form__block
                    .form__column.login
                        .form__row.login
                            .form__element-box
                                p Логин
                                .form__input__block
                                    input.form__input.form__name(
                                        type="text",
                                        placeholder="Пользователь",
                                        v-model="user.name"
                                        :class="{input_error: $v.user.name.$error||errorName}"
                                        @blur="$v.user.name.$touch()"
                                        @focus="errorName=false"
                                        )
                                    .color__span(v-if="$v.user.name.$error||errorName")  Заполните логин
                        .form__row.login
                            .form__element-box
                                p Пароль
                                .form__input__block
                                    input.form__input.form__password(
                                        type="password",
                                        placeholder="***********",
                                        v-model="user.password"
                                        :class="{input_error: $v.user.password.$error||errorPassword}"
                                        @blur="$v.user.password.$touch()"
                                        @focus="errorPassword=false"
                                        )
                                    .color__span(v-if="$v.user.password.$error||errorPassword")  Заполните пароль
                        .form__row.control-btns.login
                            button.control-btn.new__save__login(type="submit") СОХРАНИТЬ

</template>

<script>
import {required} from "vuelidate/lib/validators";
import $axios from "../requests";
import router from "../router";
import store from '../store/index.js'

export default {
    state:{
        data:[]
    },
    data() {
        return {
                user: {
                    name: '',
                    password: ''
            },
            errorName:'',
            errorPassword:''
        };
    },
    computed: {
        error_state() {
            return this.$store.getters.errorGet;
        }
    },
    validations: {
        user: {
            name: {required},
            password: {required},
        }
    },
     methods: {
         async login() {
             if (this.user.name ==="" || this.user.password==="") return
             try {
                 var response = await $axios.post("/login",  this.user);
                 const token = response.data.token;
                 localStorage.setItem("token", token);
                 $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
                 response = await $axios.get("/user");
                 store.commit("user/SET_USER", response.data.user);
                 this.$router.replace("/");
             } catch (error) {
                 store.commit('setError',error,{root: true})
             }
         },
        login_fr() {
            if(this.user.name.length===0) {
                this.errorName=true;
                return
            }
            else{
                this.errorName=false;
            }
            if(this.user.password.length===0 ) {
                this.errorPassword=true;
                return
            }
            else{
                this.errorPassword=false;
            }
                this.$store.dispatch("loginUser", {"name":this.user.name,"password":this.user.password})
            if (this.error_state){
                router.push({ path: '/login' })
            }
            else{router.push({ path: '/' })}
        }
    }
}
</script>

<style lang="postcss" scoped>

</style>