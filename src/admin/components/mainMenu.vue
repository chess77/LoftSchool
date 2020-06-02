<template lang="pug">
  .menu
    .container
      nav.menu__container
        ul.menu__list

          li.menu__item(v-for="tab in tabs")
              router-link(
                  :data-text="tab.title"
                  :to="tab.href"
                  exact-active-class="active"
                ).tabs__link

</template>

<script>

    export default {
        data() {
            return {
                tabs: [
                    { title: "Обо мне", href: "/" },
                    { title: "Отзывы", href: "/reviews" },
                    { title: "Работы", href: "/works" }
                ]
            };
        },
        computed:{
            user_state() {
                return this.$store.getters.userIsLoggedIn;
            }
        }
    };
</script>

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
    border-bottom: 3px solid transparent;

  }

  .tabs__link{
      vertical-align: middle;
      white-space: nowrap;
      display: flex;
      height: 100%;
      align-items: center;
      cursor: pointer;
      width: 125px;
      justify-content: center;
      border-bottom: 3px solid transparent;
      text-decoration: none;

  &:before {
       content: attr(data-text);
   }
  &:hover,
  &.active {
       color: #383bcf;
       font-weight: 600;
       border-color: currentColor;
   }
  }
</style>