<template lang="pug">
    .container
        .back
        .form__container
            form.form__login
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
                                    input.form__input.form__name(type="text", placeholder="Пользователь" )
                        .form__row.login
                            .form__element-box
                                p Пароль
                                .form__input__block
                                    input.form__input.form__password(type="text", placeholder="***********" )
                        .form__row.control-btns.login
                            button.control-btn.new__save__login(type="submit") СОХРАНИТЬ



</template>

<script>
export default {
    data() {
        return {

        };
    },
    
}
</script>

<style lang="postcss" scoped>

</style>