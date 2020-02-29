<template lang="pug">
  .menu
    .container
      nav.menu__container
        ul.menu__list
          li.menu__item Обо мне
          li.menu__item Работы
          li.menu__item Отзывы
</template>

<style lang="postcss" scoped>
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
</style>