<template lang="pug">  
  .admin-head
    .container
      .admin-head__admin-panel
        .user-info    
          .user-info__avatar
            img(src="./images/content/user.jpg").user-info__avatar-image
          .user-info__name Маргарита Андрюхина
        .place Панель администрирования
      .btn-exit Выйти
</template>

<style lang="postcss">

  body {
    margin: 0;
    padding: 0;
  }

  .maincontent {
    display: flex;
    align-items: center;
  }

  .container {
    margin: 0 auto;
    width: 95%;
    display: flex;
    align-items: center;
  }

  .wrapper.admin-wrapper {
    color: #ffffff;
    font-family: "Open Sans";
  }

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
    /* line-height: 34px; */
    opacity: 0.8;
    font-weight: 400;
  }

  .btn-exit {
    font-size: 16px;
    /* line-height: 24px; */
    opacity: 0.8;
    font-weight: 400;
    /* justify-self: right; */
    /* align-content: right; */
  }

</style>