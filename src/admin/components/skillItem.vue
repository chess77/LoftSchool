<template lang="pug">
    li.skill__item(v-if="editmode === false")
        .skill__name {{skill.title}}
        .skill__percent {{skill.percent}}
        .skill__control
        .skill__control
            button.skill__redactor(@click="editmode=true")
            button.skill__remove(type="button",@click="removeExistedSkill")
    li.skill__item(v-else)
        input.skill__new-name(
            placeholder="Новый навык"
            v-model="editedSkill.title"
            :class="{input_error: $v.editedSkill.title.$error}"
            @blur="$v.editedSkill.title.$touch()"


        )
        .percent__conteiner
            input.skill__new-rate(
                placeholder="0"
                v-model="editedSkill.percent"
                :class="{input_error: $v.editedSkill.percent.$error}"
                @blur="$v.editedSkill.percent.$touch()")
        .skill__control
            button.skill__redactor(type="button",@click="editExistedSkill")
            button.skill__remove(type="button",@click="editmode = false")
        .group__skill_error
            .color__span(v-if="$v.editedSkill.title.$error")  Заполните название
            .color__span(v-if="$v.editedSkill.percent.$error")  Заполните процент



</template>
<script>
    import "babel-polyfill"
    import { required, maxValue, between ,integer,minValue} from 'vuelidate/lib/validators'
    export default {
        data() {
            return {
                editmode: false,
                editedSkill: { ...this.skill }
            };
        },
        validations: {
            editedSkill: {
                title: {required},
                percent: {required, minValue:0,maxValue:100,integer}
            }
        },
        props: {
            skill: {
                type: Object,
                default: () => {},
                required: true
            }
        },
        methods:{

            async removeExistedSkill() {
                try {
                    await this.$store.dispatch('skills/removeSkill',this.skill);
                } catch (error) {}
            },

            async editExistedSkill() {
                try {
                    await this.$store.dispatch('skills/editSkill',this.editedSkill);
                    this.editmode = false;
                } catch (error) {
                }
            }
        }
    }
</script>