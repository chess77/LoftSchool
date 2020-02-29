<template lang="pug">
  .container
    .block-intro__title
      h2.admin__title Блок &laquo;Обо мне&raquo;
      button.add__group.btn__add--plus Добавить группу
    .group.group__skills-list
      ul.group__list
        li.group__item
          .form__group
            .group__name
              form.form__group-name
                input.group__new-name(placeholder="Название новой группы")
                .control__btns
                  input.btn__control.set__new-name(type="submit" value="")
                  input.btn__control.delete__new-name(type="reset" value="")
            .group__skill
              form.form__group-skill
                input.skill__new-name(placeholder="Новый навык")
                .percent__conteiner
                   input.skill__new-rate(placeholder="100")
                button.add__skill.btn__add--plus +
          li.group__item
            .form__group
              .group__name
                form.form__group-name
                  input.group__new-name(placeholder="Название новой группы" value="Workflow")
                  .control__btns
                    input.btn__control.set__new-name(type="submit" value="")
                    input.btn__control.delete__new-name(type="reset" value="")
              .group__skill
                ul.skill__list
                  li.skill__item
                    .skill__name Git
                    .skill__percent 100 %
                    .skill__control
                      .skill__redactor
                      .skill__remove
                  li.skill__item
                    .skill__name Terminal
                    .skill__percent 90 %
                    .skill__control
                      .skill__redactor
                      .skill__remove
                  li.skill__item
                    .skill__name Gulp
                    .skill__percent 80 %
                    .skill__control
                      .skill__redactor
                      .skill__remove
                  li.skill__item
                    .skill__name Webpack
                    .skill__percent 85 %
                    .skill__control
                      .skill__redactor
                      .skill__remove
              .group__skill
                form.form__group-skill
                  input.skill__new-name(placeholder="Новый навык")
                  .percent__conteiner
                    input.skill__new-rate(placeholder="100")
                  button.add__skill.btn__add--plus +
          li.group__item
            .form__group
              .group__name
                form.form__group-name
                  input.group__new-name(placeholder="Название новой группы" value="Frontend")
                  .control__btns
                    input.btn__control.set__new-name(type="submit" value="")
                    input.btn__control.delete__new-name(type="reset" value="")
              .group__skill
                ul.skill__list
                  li.skill__item
                    .skill__name Html5
                    .skill__percent 100 %
                    .skill__control
                      .skill__redactor
                      .skill__remove
                  li.skill__item
                    .skill__name CSS3
                    .skill__percent 90 %
                    .skill__control
                      .skill__redactor
                      .skill__remove
                  li.skill__item
                    .skill__name JavaScript
                    .skill__percent 80 %
                    .skill__control
                      .skill__redactor
                      .skill__remove
                  li.skill__item
                    .skill__name Jquery и Vue.js
                    .skill__percent 85 %
                    .skill__control
                      .skill__redactor
                      .skill__remove
              .group__skill
                form.form__group-skill
                  input.skill__new-name(placeholder="Новый навык")
                  .percent__conteiner
                    input.skill__new-rate(placeholder="100")
                  button.add__skill.btn__add--plus +
</template>

<script>
export default {
    
}
</script>

<style lang="postcss" scoped>

</style>