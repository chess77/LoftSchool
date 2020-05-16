<template lang="pug">
  .maincontent__sibling
    adminHeader
    mainMenu
    .admin__body
      aboutBlock
      workBlock
      feedBlock
</template>

<script>
  import adminHeader from "./components/adminHeader";
  import mainMenu from "./components/mainMenu";
  import aboutBlock from "./components/aboutBlock";
  import workBlock from "./components/workBlock";
  import feedBlock from "./components/feedBlock";

  export default {
    components: {
      adminHeader,
      mainMenu,
      aboutBlock,
      workBlock,
      feedBlock
    }
  }
</script>

<style lang="postcss">
//------------------feeds-author----------------------

  .feed__author-info {
    display: flex;
    border-bottom: 1px solid #dedee0;
    margin-bottom: 30px;
  }

  .feed__avatar-container {
    margin-right: 20px;
    width: 50px;
    height: 50px;
  }

  .feed__avatar-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .author__name-position {
    margin-bottom: 30px;

    & .info__name {
      padding: 0px;
    }

    & .info__author-desc {
      padding: 0px;
      font-size: 16px;
      line-height: 30px;
      color: rgba(65, 76, 99, 0.6);
      font-weight: 600;
    }
  }

//------------------feeds----------------------
  .group__feeds-list {

    & .info__desc {
      padding: 0px 10px 55px 10px;
    }

    & .group__item {
      min-width: 300px;
      max-width: 340px;
      min-height: 316px;
      padding: 30px 20px 34px 20px;
      position: relative;
    }
  }

  .control-btns--for-feeds {
    display: flex;
    justify-content: flex-end;
  }

  .author__info {
    display: flex;
  }

  .author__name {
    width: 100%;
    margin-right: 30px;
  }

  .author__position {
    width: 100%;
  }

  .feed__add-btn {
    width: 100%;
    font-size: 16px;
    color: #008bff;
    font-weight: 600;
    border: none;
    cursor: pointer;
    
    &:hover {
      text-decoration-skip: 5px;
      text-decoration-line: underline;
    }
  }

  .avatar__container {
    border: none;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-image: url(./images/content/empty-avatar.png);
    margin-bottom: 30px;
  }

  .avatar__image {
    width: 100%;
    height: 100%;
    display: none;
    object-fit: cover;
  }

  //---------------work----------------

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

  .info__name {
    font-size: 18px;
    color: #414c63;
    font-weight: 700;
    padding-top: 225px;
    padding-bottom: 25px;
  }

  .info__desc {
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

  .group__item.item__add-btn {
    background: linear-gradient(90deg, #008bff 0%, #0066ef 45%);
    display: flex;
    justify-content: center;
  }

  .add-btn__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto 0;
    color: white;
    cursor: pointer;

    & .items__add-btn--icon {
      width: 150px;
      height: 150px;
      font-size: 54px;
      font-weight: 100;
      border-radius: 50%;
      border: 2px solid white;
      color: #ffffff;
      background-color: transparent;
      margin-bottom: 30px;
    }
    
    & .items__add-btn--text {
      width: 95px;
      font-size: 18px;
      line-height: 30px;
      color: #ffffff;
      font-weight: 700;
      text-align: center;
      background-color: transparent;
      border: none;
    }
  }

  .control-btn {
    border: none;
    font-size: 16px;
    cursor: pointer;
  }

  .new__reset {
      background-color: white;
    color: #008bff;
    font-weight: 600;
    cursor: pointer;
    margin-right: 55px;

    &:hover {
      text-decoration-line: underline;
    }
  }

  .new__save {
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

  .input__item {
    font-size: 16px;
    color: #414c63;
    font-weight: 600;
    border: none;
    border-bottom: 1px solid #0a001d;
    width: 100%;
  }

  .input__item.input__work--desc {
    border: 1px solid #d9dbe0;
    height: 145px;
    resize: none;
    overflow: scroll;
    color: #414c63;
    line-height: 30px;
  }

  .input-title {
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
    width: 60%;

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

  .form__feed {
    background-color: white;
    box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.1);
    padding: 20px 20px 34px 20px;
    margin-bottom: 30px;
    /* width: 100%; */

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
  //---------block-intro__title-------------

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
    //justify-content: space-between;

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
      margin-left: 30px;
    /* box-sizing: border-box; */
  }

  .form__group {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 350px;
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
      //content: "%";
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