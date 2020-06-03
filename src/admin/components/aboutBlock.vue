<template lang="pug">
  .container


    .block-intro__title
      h2.admin__title Блок &laquo;Обо мне&raquo;
      button.add__group.btn__add--plus(@click="addCategory=true") Добавить группу
    .group.group__skills-list
      ul.group__list
        li.group__item(v-if="addCategory")
          .form__group
            .group__name
              form.form__group-name(@submit.prevent="createCategory")
                .input__new__category_block
                    input.group__new-name(
                            placeholder="Название новой группы"

                            name="myTitle"
                            type="text"
                            v-model="category.title"
                            :class="{input_error: $v.category.title.$error}"
                            @blur="$v.category.title.$touch()"
                            )

                    .control__btns
                      input.btn__control.set__new-name(type="submit" value="")
                      input.btn__control.delete__new-name(type="reset" value="")

                    .color__span(v-if="$v.category.title.$error")  Заполните категорию

            .group__skill
              form.form__group-skill(
                  :class="{blocked: loading}")
                .new_skill_container
                    input.skill__new-name(
                        placeholder="Новый навык"
                        v-model="category.skill"
                        :class="{input_error: $v.category.skill.$error}"
                        @blur="$v.category.skill.$touch()"
                        :disabled="loading"

                        )
                    .color__span(v-if="$v.category.skill.$error")  Заполните навык
                .percent__conteiner
                   input.skill__new-rate(
                       placeholder="100"
                       v-model="category.rate"
                       @blur="$v.category.rate.$touch()"
                       :class="{input_error: $v.category.rate.$error}"
                       :disabled="loading"
                       )
                   .color__span(v-if="$v.category.rate.$error")  Заполните процент
                button.add__skill.btn__add--plus(:class="{blocked__button: loading}") +

        li.group__item(
            v-for="category in categories.slice().reverse()" :key="category.id"
            v-if="categories.length"
            )
            .form__group
              .group__name
                form.form__group-name(id="group" @submit.prevent="editCategory(editedCategory)")
                  input.group__new-name(:value='category.category' )
                  .control__btns
                    input.btn__control.set__new-name(type="submit" value="")
                    input.btn__control.delete__new-name(type="button", @click="removeExistedCategory(category.id)")
              skillsGroup(
                  :category="category"
              )

</template>

<script>
import skillsGroup from "./skillGroup";
import { required, maxValue, between ,integer,minValue} from 'vuelidate/lib/validators'

import store from '../store/index.js'

export default {
    data() {
        return {
            loading:true,
            addCategory:false,
            test: "",
            category: {
                title: '',
                skill: '',
                rate: ''
            },
            editedCategory: { ...this.category },


        };
    },

    // Модель для валидации, которую Vuelidate превратит в computed-поле $v
    validations: {
        category: {
            title: {required},
            skill: {required},
            rate: {required, minValue:0,maxValue:100,integer}
        }
    },

    components: {
        skillsGroup,

    },
    created () {
        this.$store.dispatch('skills/getCategories');
       // this.$refs.errorShow();
      },
    computed:{
       categories(){
          return this.$store.state.skills.categories
      },

    },
    methods:{
        createCategory(){
            this.$store.dispatch('skills/createCategory',{"title":this.category.title});
            this.addCategory=false;
            this.category.title='';
            this.loading=false
        },
        removeExistedCategory(category){
            this.$store.dispatch('skills/removeCategory',category);
            this.addCategory=false
        },
        editCategory(category){
            this.$store.dispatch('skills/editCategory',category);
        },
    }
}
</script>

<style lang="postcss" scoped>

</style>