<template lang="pug">

    li.group__item(v-if="editmode === false")
        .group__content
            .work_prev
                img.prev__image(:src="`${work.photo}`")
            .info___tech_block
                .works-slider__tag-item(v-for="tech in edited_tegs" style="{color: black}") {{tech}}
            .info__name_work {{work.title}}
            .info__desc {{work.description}}
            a.work__link(href="#") {{work.link}}
            .work__control-btns
                button.work__control-btn.work__edit(@click="editmode=true") Править
                button.work__control-btn.work__delete(type="button" @click="removeExistedWork") Удалить



    li.group__item_edit(v-else )


        form.form__feed(@submit.prevent="editExistedWork" )
            .form__block
                .form__column
                    .avatar__container(:style="{backgroundImage:`url(${editedWork.photo})`}")

                        .avatar__image(:style="{backgroundImage:`url(${imagePreview})`}")
                            img(:src="`url(${imagePreview})`" hidden=true)
                            input.feed__add-btn(type='file' ref="file" @change="editImage" )
                            .img_footer Изменить фото
                .form__column
                    .form__row
                        .author__info
                            .author__name
                                h6.input-title Название
                                input.input__item(
                                    v-model='editedWork.title'
                                    :class="{input_error: $v.editedWork.title.$error}"
                                    @blur="$v.editedWork.title.$touch()")
                                .color__span(v-if="$v.editedWork.title.$error")  Заполните название
                            .author__position
                                h6.input-title Ссылка
                                input.input__item(
                                    v-model='editedWork.link'
                                    :class="{input_error: $v.editedWork.link.$error}"
                                    @blur="$v.editedWork.link.$touch()")
                                .color__span(v-if="$v.editedWork.link.$error")  Заполните ссылку
                    .form__row
                        h6.input-title Описание
                        textarea.input__item.input__work--desc(
                            v-model='editedWork.description'
                            :class="{input_error: $v.editedWork.description.$error}"
                            @blur="$v.editedWork.description.$touch()")
                        .color__span(v-if="$v.editedWork.description.$error")  Заполните текст
                    .form__row
                        h6.input-title.work__tags Тэг
                        input.input__item.input__work--tags(v-model='editedWork.techs')

                    .form__row.div_tag
                        .div_tag(v-for="teg in tegs")
                            button.btn__tag(@click="delTech(teg)") {{teg}}
                    .form__row.control-btns.control-btns--for-feeds
                        button.control-btn.new__reset(type="reset" @click="editmode = false") Отмена
                        button.control-btn.new__save(type="submit") СОХРАНИТЬ




</template>
<script>
    import requests from "../requests";
    import {required} from "vuelidate/lib/validators";

    export default {
        //const baseUrl = requests.baseURL,
        data() {
            return {
                baseUrl : requests.baseURL,
                editmode: false,
                editedWork: { ...this.work },
                imagePreview:'',
                showPreview: false,
                editFile:'',

            };
        },
        validations: {
            editedWork: {
                title: {required},
                techs: {required},
                link: {required},
                description: {required},
            }
        },
        computed:{
            edited_tegs(){
                return (this.work.techs).split(',')
            },
            tegs: {
                // геттер:
                get: function () {

                    if (this.editedWork.techs.length>0)
                    {
                        return (this.editedWork.techs).split(',')
                    }
                },
                // сеттер:
                set: function (newValue) {
                    this.editedWork.techs = newValue.join(',');
                }
            },

        },
        props: {
            work: {
                type: Object,
                default: () => {},
                required: true
            }
        },
        methods:{
            editImage(event) {
                // Reference to the DOM input element
                let image_ = event.target;
                // Ensure that you have a file before attempting to read it
                if (image_.files && image_.files[0]) {
                    // create a new FileReader to read this image and convert to base64 format
                    let reader = new FileReader();
                    // Define a callback function to run, when FileReader finishes its job
                    try {
                        reader.onload = (e) => {
                            // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                            // Read image as base64 and set to imageData
                            this.imagePreview = e.target.result;
                            this.showPreview = true;
                        }
                    }catch (e) { console.log(444)

                    }
                    // Start the reader job - read file as a data url (base64 format)
                    reader.readAsDataURL(image_.files[0]);

                }
            },
            delTech(teg){
                this.tegs = this.tegs.filter(item => item !== teg);
            },
            async removeExistedWork() {
                try {
                    await this.$store.dispatch('works/removeWork',this.work);
                } catch (error) {}
            },

            async editExistedWork() {
                this.editFile = this.$refs.file.files[0];

                const formData=new FormData();

                formData.append("title",this.editedWork.title);
                formData.append("techs",this.editedWork.techs);
                formData.append("photo", this.editFile);
                formData.append("max:", "1500kb");
                formData.append("link",this.editedWork.link);
                formData.append("description",this.editedWork.description);
                try {
                    await this.$store.dispatch('works/editWork',{"editWork":this.editedWork.id,"formData":formData});
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
    .div_tag{
        display: flex;
    }
    .info___tech_block{
        display: flex;
        color: red;
        z-index: 1000;
        position: relative;
       // margin-top: -70px;
    }
    .group__content{
        display: block;
        margin-top: 130px;
    }
    .works-slider__tag-item {
        margin-right: 15px;
        margin-bottom: 15px;
        background-color: #ffffff;
        border-radius: 28px;
        padding: 18px 20px;
        color: #686d76;
    }
    .info__name_work{

    }
</style>