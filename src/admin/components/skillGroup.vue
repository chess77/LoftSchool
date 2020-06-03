<template lang="pug">
    .skill_group
        .group__skill
            ul.skill__list

                skillsItem(v-for="skill in category.skills"
                    :key="skill.id"
                    :skill="skill")
        .group__skill_form
            form.form__group-skill(
                @submit.prevent="addNewSkill"
                :class={blocked: loading}
            )
                .skill_name_container
                    input.skill__new-name(
                        placeholder="Новый навык"
                        v-model="skill.title"
                        :class="{input_error: errorTitle }"
                        @blur="$v.skill.title.$touch()"
                        @focus="errorTitle=false"
                        )
                    .color__span(v-if="$v.skill.title.$error || errorTitle")  Заполните название


                .percent__conteiner
                    input.skill__new-rate(
                        placeholder="0"
                        v-model="skill.percent"
                        :class="{input_error: $v.skill.percent.$error||errorPercent}"
                        @blur="$v.skill.percent.$touch()"
                        @focus="errorPercent=false"
                        )
                    .color__span(v-if="$v.skill.percent.$error")  Заполните процент


                button(type="submit" ).add__skill.btn__add--plus +




</template>
<script>
    import skillsItem from "./skillItem";
    import "babel-polyfill"
    import { required, maxValue, between ,integer,minValue} from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                errorTitle:false,
                errorPercent:false,
                loading: false,
                skill: {
                    title: "",
                    percent: 0,
                    category: this.category.id
                }
            };
        },
        validations: {
            skill: {
                title: {required},
                percent:{required, minValue:0,maxValue:100,integer}
            }
        },
        props: {
            category: {
                type: Object,
                default: () => {},
                required: true
            }
        },
        components: {
            skillsItem
        },
        methods:{

            async addNewSkill() {
                this.loading = true;
                if(this.skill.title=="" ) {

                    this.errorTitle=true;
                    return
                }
                else{
                    this.errorTitle=false;
                }
                if(this.skill.persent=="" ) {
                    this.errorPercent=true;
                    return
                }
                else{
                    this.errorPercent=false;
                }

                try {

                    await this.$store.dispatch('skills/addSkill',this.skill);
                    this.skill.title = "";
                    this.skill.percent = "";
                    this.errorPercent=false;
                    this.errorTitle=false;
                    this.$v.$reset();
                } catch (error) {
                    // handling error
                } finally {
                    this.loading = false;
                    this.errorPercent=false;
                    this.errorTitle=false;
                }
            },

        }
    }
</script>