<template>
  <button type="button" class="icon-menu">
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

}
</script>

<style scoped lang="scss">

.icon-menu {
  display: none;

  @include respond-to('sm') {
    display: block;
    position: absolute;
    top: 18px;
    right: 10px;
    width: 30px;
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
                top: calc(50%- 1px);
            }
        }
    }
  }
} 
</style>