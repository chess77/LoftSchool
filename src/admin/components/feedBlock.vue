<template lang="pug">
  .container
    .group.group__feeds-list
      form.form__feed
        h3.form__title Новый отзыв
        .form__block
          .form__column
            .avatar__container
              img.avatar__image
            button.feed__add-btn Добавить фото
          .form__column
            .form__row
              .author__info
                .author__name
                  h6.input-title Имя автора
                  input.input__item(value="Ковальчук Дмитрий")
                .author__position
                  h6.input-title Титул автора
                  input.input__item(value="Основатель LoftSchool")
            .form__row
              h6.input-title Описание
              textarea.input__item.input__work--desc Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей
            .form__row.control-btns.control-btns--for-feeds
              button.control-btn.new__reset(type="reset") Отмена
              button.control-btn.new__save(type="submit") СОХРАНИТЬ
      ul.group__list
        li.group__item.item__add-btn
          .add-btn__container
            button.items__add-btn--icon +
            button.items__add-btn--text Добавить отзыв
        li.group__item
          .feed__author-info
            .feed__avatar-container
              img.feed__avatar-image(src="../images/content/author-1.png")
            .author__name-position
              .info__name Владимир Сабанцев
              .info__author-desc Предприниматель
          .info__desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
          .work__control-btns
            button.work__control-btn.work__edit Править
            button.work__control-btn.work__delete Удалить
        li.group__item
          .feed__author-info
            .feed__avatar-container
              img.feed__avatar-image(src="../images/content/author-1.png")
            .author__name-position
              .info__name Владимир Сабанцев
              .info__author-desc Предприниматель
          .info__desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
          .work__control-btns
            button.work__control-btn.work__edit Править
            button.work__control-btn.work__delete Удалить
        li.group__item
          .feed__author-info
            .feed__avatar-container
              img.feed__avatar-image(src="../images/content/author-1.png")
            .author__name-position
              .info__name Владимир Сабанцев
              .info__author-desc Предприниматель
          .info__desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
          .work__control-btns
            button.work__control-btn.work__edit Править
            button.work__control-btn.work__delete Удалить
        li.group__item
          .feed__author-info
            .feed__avatar-container
              img.feed__avatar-image(src="../images/content/author-1.png")
            .author__name-position
              .info__name Владимир Сабанцев
              .info__author-desc Предприниматель
          .info__desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
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