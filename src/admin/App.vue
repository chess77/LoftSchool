<template lang="pug">
  .maincontent__sibling
    .admin-head
      .container
        .admin-head__admin-panel
          .user-info    
            .user-info__avatar
              img(src="./images/content/user.jpg").user-info__avatar-image
            .user-info__name Маргарита Андрюхина
          .place Панель администрирования
        a.btn-exit Выйти
    .menu
      .container
        nav.menu__container
          ul.menu__list
            li.menu__item Обо мне
            li.menu__item Работы
            li.menu__item Отзывы
    .admin__body
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
        .group.group__works-list
          form.form__works  
            h3.form__title Редактирование Работы
            .form__block
              .form__column
                .upload__image
                  h5.title__upload-image Перетащите или загрузите для загрузки изображения
                  button.upload__btn ЗАГРУЗИТЬ
              .form__column
                .form__row
                  h6.work__input-title.work-edit__name Название
                  input.input__work.input__work--name(value="Дизайн сайта для авто салона Porsche")
                .form__row
                  h6.work__input-title.work__link Ссылка
                  input.input__work.input__work--link(value="some/link/params")
                .form__row
                  h6.work__input-title.work__desc Описание
                  textarea.input__work.input__work--desc Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей
                .form__row
                  h6.work__input-title.work__tags Добавление тэга
                  input.input__work.input__work--tags(value="Jquery, Vue.js, HTML5")
                .form__row
                  button.btn__tag HTML
                  button.btn__tag CSS
                  button.btn__tag Javascript
                .form__row.control-btns
                  button.works__control-btn.works-new__reset(type="reset") Отмена
                  button.works__control-btn.works-new__save(type="submit") СОХРАНИТЬ
          ul.group__list
            li.group__item.works__add
              button.works__add-btn Добавить работу
            li.group__item
              .work_prev
                img.prev__image(src="./images/content/work-1.png")
              .work__name Сайт школы образования
              .work__desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              a.work__link(href="#") http://loftschool.ru
              .work__control-btns
                button.work__control-btn.work__edit Править
                button.work__control-btn.work__delete Удалить
            li.group__item
              .work_prev
                img.prev__image(src="./images/content/work-2.png")
              .work__name Ещё один сайт школы образования
              .work__desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              a.work__link(href="#") http://loftschool.ru
              .work__control-btns
                button.work__control-btn.work__edit Править
                button.work__control-btn.work__delete Удалить
            li.group__item
              .work_prev
                img.prev__image(src="./images/content/work-3.png")
              .work__name Третий сайт школы образования
              .work__desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              a.work__link(href="#") http://loftschool.ru
              .work__control-btns
                button.work__control-btn.work__edit Править
                button.work__control-btn.work__delete Удалить
</template>

<style lang="postcss">

  .work_prev {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;

    & .prev__image {
      width: 100%;
      height: 100%;
    }
  }

  .group__works-list {
    
    & .group__item {
      max-width: 340px;
      height: 555px;
      padding: 20px 20px 34px 20px;
      position: relative;
    }
  }

  .work__name {
    font-size: 18px;
    /* line-height: 30px; */
    color: #414c63;
    font-weight: 700;
    padding-top: 225px;
    padding-bottom: 25px;
  }

  .work__desc {
    font-size: 16px;
    line-height: 30px;
    color: rgba(65, 76, 99, 0.6);
    font-weight: 600;
    padding-bottom: 25px;
  }

  .work__link {
    display: inline-block;
    color: #008bff;
    font-size: 16px;
    line-height: 30px;
    font-weight: 600;
    margin-bottom: 50px;
    text-decoration-line: none;

    &:hover {
      text-decoration-line: underline;
    }
  }

  .work__control-btns {
    display: flex;
    justify-content: space-between;
  }

  .work__control-btn {
    color: #414c63;
    font-weight: 600;
    font-size: 16px;
    border: none;
    cursor: pointer;

    &:hover {
      text-decoration-line: underline;
    }
  }

  .work__edit {
    display: block;
    position: relative;
    padding-right: 30px;

    &:after {
      display: block;
      content: "";
      width: 17px;
      height: 17px;
      position: absolute;
      background-image: url(./images/design/pencil-edit-button.png);
      background-position: center center;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }

  .work__delete {
    position: relative;
    padding-right: 30px;

    &:after {
      display: block;
      content: "";
      width: 17px;
      height: 17px;
      position: absolute;
      background-image: url(./images/design/work-cancel.png);
      background-position: center center;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }

  .group__item.works__add {
    background: linear-gradient(90deg, #008bff 0%, #0066ef 45%);
    display: flex;
    justify-content: center;
  }

  .works__add-btn {
    width: 95px;
    font-size: 18px;
    line-height: 30px;
    color: #ffffff;
    font-weight: 700;
    text-align: center;
    background-color: transparent;
    border: none;
    position: relative;

    &:before {
      display: block;
      width: 150px;
      height: 150px;
      font-size: 54px;
      font-weight: 100;
      content: "+";
      border-radius: 50%;
      border: 2px solid #fff;
      background-position: center center;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      left: 50%;
      transform: translate(-50%, 50%);
    }
  }

  .works__control-btn {
    border: none;
    font-size: 16px;
  }

  .works-new__reset {
    color: #4b6fd7;
    font-weight: 600;
    cursor: pointer;
    margin-right: 55px;
  }

  .works-new__save {
    background: linear-gradient(70deg, #008bff 0%, #0066ef 45%);
    color: white;
    border-radius: 40px 40px;
    cursor: pointer;
    padding: 24px 40px;
    font-weight: 700;
  }

  .btn__tag {
    background-color: #f4f4f4;
    position: relative;
    padding: 10px 32px 10px 18px;
    font-size: 13px;
    color: #283340;
    font-weight: 600;
    border: none;
    border-radius: 20px 20px;
    margin-right: 10px;
    cursor: pointer;

    &:last-child {
      margin-right: 0px;
    }

    &:after {
      position: absolute;
      content: "";
      width: 10px;
      height: 10px;
      background-image: url(./images/design/cancel.png);
      background-position: center center;
      background-repeat: none;
      background-size: 100%;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
    }
  }

  .form__block {
    display: flex;
    flex-wrap: wrap;
  }

  .input__work {
    font-size: 16px;
    color: #414c63;
    font-weight: 600;
    border: none;
    border-bottom: 1px solid #0a001d;
    width: 100%;
  }

  .input__work.input__work--desc {
    border: 1px solid #d9dbe0;
    height: 145px;
    resize: none;
    overflow: scroll;
    color: #414c63;
    line-height: 30px;
  }

  .work__input-title {
    font-size: 16px;
    color: #414c63;
    font-weight: 600;
    opacity: 0.5;
    margin: 0px 0px 20px 0px;
  }

  .form__column {
    margin-right: 30px;

    &:last-child {
      margin-right: 0px;
       min-width: 350px;
       flex: 1;
    }
  }

  .form__row {
    margin: 30px 0px 0px 0px;

    &:first-child {
      margin: 0px;
    }
  }

  .title__upload-image {
    width: 220px;
    font-size: 16px;
    line-height: 34px;
    color: rgba(65, 76, 99, 0.5);
    font-weight: 600;
    margin: 0px 0px 10px 0px;
  }

  .upload__image {
    width: 495px;
    height: 275px;
    border: 1px dashed #414c63;
    background-color: #dee4ed;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .upload__btn {
    padding: 17px 48px;
    background: linear-gradient(90deg, #1e51dd 10%, #3f35cb 50%);
    font-size: 16px;
    color: #ffffff;
    font-weight: 700;
    border-radius: 30px 30px;
  }

  .form__works {
    background-color: white;
    box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.1);
    padding: 20px 20px 34px 20px;
    margin-bottom: 30px;
  }

  .form__title {
    font-size: 18px;
    color: #414c63;
    font-weight: 700;
    padding-bottom: 25px;
    margin-bottom: 50px;
    border-bottom: 1px solid #dedee0;
  }





//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
  body {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
    padding: 0;
  }

  .back {
    position: absolute;
    min-height: 100vh;
    width: 100%;
    background-image: url('./images/design/introduce.png');
    background-color: rgb(247, 249, 254);
    opacity: 0.1;
  }

  .maincontent {
    display: flex;
  }

  .container {
    margin: 0 auto;
    width: 95%;
    display: flex;
    align-items: center;
  }

  .wrapper.admin-wrapper {
    color: #ffffff;
    font-family: 'Open Sans', sans-serif;
    min-height: 100vh;
    width: 100%;
    
  }

  .maincontent__sibling {
    display: flex;
    width: 100%;
    flex-direction: column;
    z-index: 1;
  }

  //----------------------------------------
  //-----------.admin-head------------------

  .admin-head {
    background: linear-gradient(30deg, #3e3e59 30%, #454573 90%);
    width: 100%;
    height: 80px;
    display: flex;

    & .container {
      justify-content: space-between;
    }
  }

  .admin-head__admin-panel {
    display: flex;
    align-items: center;
  }

  .user-info {
    display: flex;
    align-items: center;
  }

  .user-info__avatar {
    width: 45px;
    height: 45px;
    position: relative;
    padding-right: 20px;
  }

  .user-info__avatar-image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .user-info__name {
    font-size: 18px;
    font-weight: 600;
    padding-right: 30px;
  }

  .place {
    font-size: 14px;
    opacity: 0.8;
    font-weight: 400;
  }

  .btn-exit {
    font-size: 16px;
    opacity: 0.8;
    font-weight: 400;
    cursor: pointer;
  }

  //----------------------------------------
  //--------------menu----------------------

  .menu {
    background: white;

    & .container{
      height: 100%;
    }
  }

  .menu__container {
    color: #2b3948;
    height: 100%;
  }

  .menu__list {
    display: flex;
    height: 100%;
    position: relative;
  }

  .menu__item {
    line-height: 80px;
    height: 100%;
    font-size: 16px;
    padding: 0px 30px;
    font-weight: 400;

    &:hover {
      color: #008bff;
      border-bottom: 3px solid #008bff;
    }
  }

  //----------------------------------------
  //---------block-intro__title-------------
  //

  .admin__body {
    & .container {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .block-intro__title {
    padding: 60px 90px 60px 0px;
  }

  .admin__title {
    display: inline-block;
    margin: 0px;
    padding-right: 90px;
    color: #2b3948;
  }

  .add__group {
    color: #4b6fd7;
    background-color: transparent;
    border: none;
    position: relative;
    height: 100%;
    font-size: 16px;
    font-weight: 600;

    &:before {
      content: "+";
      color: white;
      background: linear-gradient(90deg, #1e51dd 10%, #3f35cb 50%);
      border-radius: 50%;
      width: 20px;
      height: 20px;
      position: absolute;
      font-size: 15px;
      left: -30px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .group {
    width: 100%;
  }

  .group__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: start;
  }

  .group__item {
    min-height: 388px;
    width: 525px;
    background-color: white;
    box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.1);
    padding: 20px 20px 34px 20px;
    margin-bottom: 30px;
    /* box-sizing: border-box; */
  }

  .form__group {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .group__name {
    padding-bottom: 15px;
    margin-bottom: 30px;
    border-bottom: 1px solid #dedee0;
  }

  .form__group-name {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .group__new-name {
    border: none;
    border-bottom: 1px solid #0a001d;
    width: 275px;
    margin-right: 145px;
    padding-bottom: 17px;
    font-size: 18px;
    line-height: 34px;
    color: #414c63;
  }

  .control__btns {
    display: inline-flex;
  }

  .btn__control {
    width: 15px;
    height: 12px;
    border: none;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
  }

  .set__new-name {
    background-image: url(./images/design/tick.png);
    margin-right: 18px;
  }

  .delete__new-name {
    background-image: url(./images/design/cross.png);
    
  }

///SKILLS

  .group__skill {
    aling-content: flex-end;
    margin-top: auto;
  }

  .skill__list {
    color: #2b3948;
  }

  .skill__name {
    width: 300px;
  }

  .skill__item {
    display: flex;
    margin: 0px 10px 30px 10px;
    color: #414c63;
  }

  .skill__percent {
    margin-right: 60px;
    color: #2b3948;
  }

  .skill__control {
    display: flex;
    margin-left: auto;
  }

  .skill__redactor {
    width: 16px;
    height: 15px;
    margin-right: 20px;
    background-image: url(./images/design/pencil.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .skill__remove {
    width: 15px;
    height: 15px;
    background-image: url(./images/design/trash.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  /* .skill__control
    .skill__redactor
    .skill__remove */

  .form__group-skill {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 20px;

    & > *{
      border: none;
      border-bottom: 1px solid #0a001d;
    }
  }

  .skill__new-name {
    margin-right: 10px;
    font-size: 16px;
    color: #373e42;
    font-weight: 400;
    padding-bottom: 17px;
  }

  .percent__conteiner {
    margin-right: 30px;
    width: 75px;
    display: inline-block;
    position: relative;

    &:after {
      content: "%";
      display: inline-block;
      width: 13px;
      height: 13px;
      position: absolute;
      font-size: 16px;
      color: #414c63;
      top: 0;
      right: 11px;
    }
  }

  .skill__new-rate {
    font-size: 16px;
    /* color: #2b3948; */
    font-weight: 400;
    width: 100%;
    position: relative;
    display: inline-block;
    border: none;
    padding: 0px 10px 18px 10px;

    &::placeholder {
      color: #2b3948;
    }
  }

  .add__skill {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    font-size: 32px;
    border: none;
    line-height: 36px;
    font-family: "Open Sans";
    font-weight: 400;
    text-align: center;
    cursor: pointer;
    background: linear-gradient(90deg, #1e51dd 10%, #3f35cb 50%);
  }

</style>