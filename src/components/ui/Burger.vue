<template>
  <button type="button" class="icon-menu" :class="{_active: menuBurger.burger}" @click="toggleBurger">
              <span></span>
              <span></span>
              <span></span>
        </button>
</template>

<script>
export default {
    name: "Burger",
  components: {
    },

    data() {
      return {
        menuBurger: {
          burger: false
        }
      }
    }, 
    methods: {
      toggleBurger() {
        this.menuBurger.burger = !this.menuBurger.burger;
        
      }
    }

}
</script>

<style scoped lang="scss">

.icon-menu {
  display: none;

  @include respond-to('xs') {
    display: block;
    position: relative;
    //position: absolute;
    //top: 18px;
    //right: 10px;
    //width: 30px;
    flex: 0 0 30px;
    height: 18px;
    cursor: pointer;
    z-index: 5;

    span {
      transition: all 0.3s ease 0;
      top: calc(50%-1px);
      left: 0;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #000;
      &:first-child {
        top: 0;
      }
      &:last-child {
        top: auto;
        bottom: 0;
      }
    }
    &._active {
        span {
            transform: scale(0);
            &:first-child {
                transform: rotate(-45deg);
                top: calc(50% - 1px);
            }

            &:last-child {
                transform: rotate(45deg);
                bottom: calc(50% - 1px);
            }
        }
    }
  }
} 


</style>