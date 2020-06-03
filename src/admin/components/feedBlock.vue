<template lang="pug">
  .container


    .group.group__feeds-list
      form.form__feed(v-if="addReview" @submit.prevent="handleFileChange")
        h3.form__title Новый отзыв
        .form__block
          .form__column
            .avatar__container


              .avatar__image(:style="{backgroundImage:`url(${imagePreview})`}")
                img(:src="`url(${imagePreview})`" hidden=true)
                input.feed__add-btn(type='file' ref="file" @change="previewImage" )
                .img_footer Добавить фото


          .form__column
            .form__row
              .author__info
                .author__name
                  h6.input-title Имя автора
                  input.input__item(
                      v-model='author.name'
                      :class="{input_error: $v.author.name.$error}"
                      @blur="$v.author.name.$touch()")
                  .color__span(v-if="$v.author.name.$error")  Заполните автора
                .author__position
                  h6.input-title Титул автора
                  input.input__item(
                      v-model='author.title'
                      :class="{input_error: $v.author.title.$error}"
                      @blur="$v.author.title.$touch()")
                  .color__span(v-if="$v.author.title.$error")  Заполните должность
            .form__row
              h6.input-title Описание
              textarea.input__item.input__work--desc(
                  v-model='author.desc'
                  :class="{input_error: $v.author.desc.$error}"
                  @blur="$v.author.desc.$touch()"
                  )
               .dfg(style="{color: black}") {{$v.author.desc.$error}}
               .color__span(v-if="$v.author.desc.$error")  Заполните текст
            .form__row.control-btns.control-btns--for-feeds
              button.control-btn.new__reset(@click="addReview=false") Отмена
              button.control-btn.new__save(type="submit") СОХРАНИТЬ

      ul.group__list
        li.group__item.item__add-btn
          .add-btn__container
            button.items__add-btn--icon(@click="addReview=true") +
            button.items__add-btn--text(@click="addReview=true") Добавить отзыв

        reviewItem(
            v-for="review in reviews"
            :key="review.id"
            :review="review")


</template>
<script>
    import reviewItem from "./reviewItem";
    import {renderer} from "../helpers/pictures"
    import {required,numeric} from "vuelidate/lib/validators";
    //import modalError from "./modalError";

    import "babel-polyfill"
    import store from "../store";
    export default {
        data() {
            return {

                imagePreview:null,
                showPreview:false,
                addReview:false,
                author: {
                    name: '',
                    title:'',
                    desc:'',
                    photo:{}
                },
                file:'',
            };
        },
        validations: {
            author: {
                name: {required},
                title:{required},
                desc:{required},
            }
        },
        components: {
            reviewItem,
        },
        computed:{
            reviews(){
                return this.$store.state.reviews.reviews
            },

        },
        created () {
            this.$store.dispatch('reviews/getReviews');
        },
        methods:{
            async handleFileChange(event){




                this.file = this.$refs.file.files[0];

                const formData=new FormData();
                formData.append("photo", this.file);
                formData.append("author",this.author.name);
                formData.append("occ",this.author.title);
                formData.append("text",this.author.desc);




                try{
                    await this.$store.dispatch('reviews/createReview', formData);
                    this.addReview=false;
                    this.author.name='';
                    this.author.title='';
                    this.author.desc='';
                    this.file=null
                }catch (error) {
                    store.commit('setError',error,{root: true})
                }



            },



            previewImage(event) {
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
            }
        }
    }
</script>
<style lang="postcss" scoped>

</style>