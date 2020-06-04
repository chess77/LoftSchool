<template lang="pug">
    li.group__item(v-if="editmode === false")
        .feed__author-info
            .feed__avatar-container
                img.feed__avatar-image(:src="`${review.photo}`")
            .author__name-position
                .info__name {{review.author}}
                .info__author-desc {{review.occ}}

        .info__desc {{review.text}}
        .work__control-btns
            button.work__control-btn.work__edit(@click="editmode=true") Править
            button.work__control-btn.work__delete(type="button" @click="removeExistedReview") Удалить
    li.group__item_edit(v-else )
                form.form__feed(@submit.prevent="editExistedReview" )
                    .form__block
                        .form__column
                            .avatar__container(:style="{backgroundImage:`url(${editedReview.photo})`}")
                                .avatar__image(:style="{backgroundImage:`url(${imagePreview})`}")
                                    img(:src="`url(${imagePreview})`" hidden=true)
                                    input.feed__add-btn(type='file' ref="file" @change="editImage" )
                                    .img_footer Изменить фото
                        .form__column
                            .form__row
                                .author__info
                                    .author__name
                                        h6.input-title Имя автора
                                        input.input__item(
                                            v-model='editedReview.author'
                                            :class="{input_error: $v.editedReview.author.$error}"
                                            @blur="$v.editedReview.author.$touch()")
                                        .color__span(v-if="$v.editedReview.author.$error")  Заполните автора
                                    .author__position
                                        h6.input-title Титул автора
                                        input.input__item(
                                            v-model='editedReview.occ'
                                            :class="{input_error: $v.editedReview.occ.$error}"
                                            @blur="$v.editedReview.occ.$touch()")
                                        .color__span(v-if="$v.editedReview.occ.$error")  Заполните должность
                            .form__row
                                h6.input-title Описание
                                textarea.input__item.input__work--desc(
                                    v-model='editedReview.text'
                                    :class="{input_error: $v.editedReview.text.$error}"
                                    @blur="$v.editedReview.text.$touch()")
                                .color__span(v-if="$v.editedReview.text.$error")  Заполните текст
                            .form__row.control-btns.control-btns--for-feeds
                                button.control-btn.new__reset(type="reset" @click="editmode=false") Отмена
                                button.control-btn.new__save(type="submit") СОХРАНИТЬ
</template>
<script>
    import requests from "../requests";
    import {required} from "vuelidate/lib/validators";
    import store from "../store";
    export default {
        data() {
            return {
                baseUrl : requests.baseURL,
                editmode: false,
                editedReview: { ...this.review },
                imagePreview:'',
                showPreview: false,
                editFile:'',
            };
        },
        validations: {
            editedReview: {
                author: {required},
                occ:{required},
                text:{required},
            }
        },
        props: {
            review: {
                type: Object,
                default: () => {},
                required: true
            }
        },
        methods:{
            editImage(event) {
                let image_ = event.target;
                if (image_.files && image_.files[0]) {
                    let reader = new FileReader();
                    try {
                        reader.onload = (e) => {
                            this.imagePreview = e.target.result;
                            this.showPreview = true;
                        }
                    }catch (e) { console.log(444)
                    }
                    reader.readAsDataURL(image_.files[0]);
                }
            },
            async removeExistedReview() {
                try {
                    await this.$store.dispatch('reviews/removeReview',this.review);
                } catch (error) {}
            },
            async editExistedReview() {
                this.editFile = this.$refs.file.files[0];
                const formData=new FormData();
                formData.append("photo", this.editFile);
                formData.append("author",this.editedReview.author);
                formData.append("occ",this.editedReview.occ);
                formData.append("text",this.editedReview.text);
                try {
                    await this.$store.dispatch('reviews/editReview',{"editReview":this.editedReview.id,"formData":formData});
                    this.editmode = false;
                } catch (error) { console.log("Ошибка Formdata")
                }
            },

            cancelEditReview(){
                this.editmode = false;
            }
        }
    }
</script>
<style lang="postcss" scoped>

</style>