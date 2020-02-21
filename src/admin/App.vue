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
        .group
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
            
              
          
            



</template>

<style lang="postcss">
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
    /* align-items: center; */
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
  }

  .group__item {
    height: 388px;
    width: 525px;
    background-color: white;
    box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.1);
    padding: 20px 20px 34px 20px;
    margin-bottom: 30px;
  }

  .form__group {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .group__name {
    padding-bottom: 15px;
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
    margin: 0px 10px 0px 10px;
  }

  .skill__percent {
    margin-right: 60px;
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