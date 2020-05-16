<template lang="pug">
  .container
    .group.group__works-list
      form.form__works  
        h3.form__title Добавление работы
        .form__block
          .form__column
            .upload__image
              h5.title__upload-image Перетащите или загрузите для загрузки изображения
              button.upload__btn ЗАГРУЗИТЬ
          .form__column
            .form__row
              h6.input-title.work-edit__name Название
              input.input__item.input__work--name(value="")
            .form__row
              h6.input-title.work__link Ссылка
              input.input__item.input__work--link(value="")
            .form__row
              h6.input-title.info__desc Описание
              textarea.input__item.input__work--desc
            .form__row
              h6.input-title.work__tags Добавление тэга
              input.input__item.input__work--tags()
            .form__row

            .form__row.control-btns
              button.control-btn.new__reset(type="reset") Отмена
              button.control-btn.new__save(type="submit") СОХРАНИТЬ
      ul.group__list
        li.group__item.item__add-btn
          .add-btn__container
            button.items__add-btn--icon +
            button.items__add-btn--text Добавить работу
        li.group__item
          .work_prev
            img.prev__image(src="../images/content/work-1.png")
          .info__name Сайт школы образования
          .info__desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
          a.work__link(href="#") http://loftschool.ru
          .work__control-btns
            button.work__control-btn.work__edit Править
            button.work__control-btn.work__delete Удалить


</template>

<script>
  export default {
    
  }
</script>

<style lang="postcss" scoped>

</style>