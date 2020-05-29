<template lang="pug">
    .container
        .back
        .form__container
            form.form__login(:action="url", method="POST", @submit.prevent="login_fr")
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
                                    input.form__input.form__name(type="text", placeholder="Пользователь", v-model="user.name" )
                        .form__row.login
                            .form__element-box
                                p Пароль
                                .form__input__block
                                    input.form__input.form__password(type="text", placeholder="***********",v-model="user.password" )
                        .form__row.control-btns.login
                            button.control-btn.new__save__login(type="submit") СОХРАНИТЬ



</template>

<script>

import axios from "axios";
import mapActions from 'vuex';
import {baseURL, token} from "../store/modules/constants";
//import login from "../store/modules/login";

export default {
    state:{
        data:[]
    },

    data() {
        return {
            url: baseURL+"/login",
            user: {
                name: '',
                password: ''
            }
        };
    },
     methods: {
        //...mapActions( ["login/loginUser"]),


        login_fr() {
            //console.log(this.$store)
            this.$store.dispatch("loginUser", {"name":this.user.name,"password":this.user.password})
            this.$root.$router.push('/')
           // router.push({ path: '/' })



           // this.$store.dispatch("loginUser",{user:this.user})
            //this.$store.dispatch( "login",{user:this.user})
           // this.$store.dispatch("login.login")
        }
    }


}
</script>

<style lang="postcss" scoped>

</style>