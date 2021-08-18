<template>
  <header class="header">
    <div class="header__wrapper container">
      
        <div class="header__left">
          <a href="#" class="header__logo">Funiro.</a>
          <div class="header__menu menu">
            <nav class="menu__body" :class="{_active: menuBurger.burger}">
            <ul class="menu__list">
              <li class="menu__item" :class="{active: menuVisible.products}">
                <a href="#" class="menu__link" @click="toggleProducts">Products</a>
                <button data-spoller type="button" class="menu__arrow icon-arrow-down" @click="toggleProducts"></button>
                <ul class="menu__sub-list">
                  <li class="menu__sub-item"><a href="" class="menu__sub-link">Product 1</a>
                  </li>
                  <li class="menu__sub-item"><a href="" class="menu__sub-link">Product 2</a>
                  </li>
                  <li class="menu__sub-item"><a href="" class="menu__sub-link">Product 3</a>
                  </li>
                </ul>
                
              </li>
              <li class="menu__item" :class="{active: menuVisible.rooms}">
                <a href="#" class="menu__link" @click="toggleRooms">Rooms</a>
                 <button data-spoller type="button" class="menu__arrow icon-arrow-down" @click="toggleRooms"></button>
                <ul class="menu__sub-list">
                  <li class="menu__sub-item"><a href="" class="menu__sub-link">Room 1</a>
                  </li>
                  <li class="menu__sub-item"><a href="" class="menu__sub-link">Room 2</a>
                  </li>
                  <li class="menu__sub-item"><a href="" class="menu__sub-link">Room 3</a>
                  </li>
                </ul>
              </li>
              <li class="menu__item">
                <a href="" class="menu__link">Inspirations</a>
              </li>
            </ul>
          </nav>
          </div>
          
        </div>
        <div class="header__search">
          <div class="search-form">
            <button type="button" class="search-form-icon icon-search"></button>
            <form action="#" class="search-form__item">
              <button type="button" class="search-form-btn icon-search"></button>
              <input autocomplete="off" type="text" class="search-form__input" name="form[]" placeholder="Search for minimalist chair">
            </form>
          </div>
        </div>
        <div class="header__right">
          <a href="" class="header-icon__item icon-favorite"> </a>
          <div href="" class="header-icon__item cart-header">
            <a href="" class="cart-header__icon icon-cart"><span>1</span></a>
            <div class="cart-header__body">
              <ul href="" class="cart-header__list cart-list"></ul> 
            </div>
          </div>
         <a href="#" class="header__login">
           <img class="header__avatar" src="~@/assets/img/logo.jpg" alt="Avatar" >
           </a>
        </div>
        <button type="button" class="icon-menu" :class="{_active: menuBurger.burger}" @click="toggleBurger">
              <span></span>
              <span></span>
              <span></span>
        </button>
    </div>
  </header>
</template>


<script>

export default {
  name: "Header",
  components: {
    },

    data() {
      return {
        menuBurger: {
          burger: false
        },

        menuVisible: {
          products: false, 
          rooms: false
        }
      }
    }, 
    methods: {
      toggleBurger() {
        this.menuBurger.burger = !this.menuBurger.burger;
      },

      toggleProducts() {
        this.menuVisible.products = !this.menuVisible.products;
        this.menuVisible.rooms = false;
      }, 

      toggleRooms() {
        this.menuVisible.rooms = !this.menuVisible.rooms;
        this.menuVisible.products = false;
      }
    }
}
</script>

<style scoped lang="scss">
.header {
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  background-color: $color-main;

  
  
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 5px;
    padding-bottom: 5px;
    min-height: 125px;
    @media (max-width: $md2 +px) {
      min-height: 80px;
    }
    @media (max-width: $md3 +px) {
      min-height: 50px;
    }
	}

	&__left {
    display: flex;
    align-items: center;
    flex: 0 0 494/1240 * 100%;
    z-index: 2;

    @media (max-width: $md2 +px) {
      flex: 1 1 auto;
    }
	}

	&__logo {
    color: #000;
    font: 700 24px / 120% $font-base;

    @media (max-width: $md2 +px) {
      padding-right: 20px;
    }

    
	}
  
  &__search {
    margin-right: 32px;

    @media (min-width: $md2 +px) {
      flex-grow: 1;
      z-index: 1;
    }
	}

	&__right {
    display: grid;
    grid-gap: 32px;
    grid-template-columns: auto;
    grid-auto-flow: column;
    align-items: center;
      
     // display: flex;
     // flex: 0 0 152px;
     // justify-content: space-between;
     // align-items: center;
	}

	&__avatar {
    width: 40px;
    border-radius: 50%;
	}
}

.menu {
  flex: 0 1 420px;

  &__body {
    @include respond-to('xs') {
      position: fixed;
      width: 100vw;
      height: 100vh;
      overflow: auto;
      top: 0;
      left: -100%;
      background-color: $color-main;
      transition: left 0.3s ease 0s;
      padding: 70px 15px 30px 15px;

      &::before {
        content: " ";
        position: fixed;
        width: 100%;
        height: 50px;
        top: 0;
        left: -100%;
        //background-color: $color-main;
      }

      &._active {
        left: 0;
        &::before {
          left: 0;
        }
      }
    }
  }

  &__list {
    @media (min-width: $md3+px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
	}

	&__item {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 3px;
    padding: 5px 0;

    @media (any-hover: hover) {
      &:hover {
        .menu__sub-list {
          transform: translate(0, 0);
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }
        .menu__arrow {
          transform: rotate(-180deg);
        }
        .menu__arrow, 
        .menu__link {
          color: $color-orange;
        }
      }
    }
    @include respond-to('md') {
      &.active {
        .menu__sub-list {
          position: relative;
          transform: translate(0, 0);
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }
        .menu__arrow {
          transform: rotate(-180deg);
        }
        .menu__arrow, 
        .menu__link {
          color: $color-orange;
        }
      }
    }
    @include respond-to('xs') {
      &.active {
        .menu__sub-list {
          transform: translate(0, 0);
          opacity: 1;
          visibility: visible;
           pointer-events: auto;
        }
        .menu__arrow {
          transform: rotate(-180deg);
        }
        .menu__arrow, 
        .menu__link {
          color: $color-orange;
        }
      }
    }
	}

	&__link {
    transition: color 0.3s ease 0;

    @include respond-to('xs') {
      font: $font-size-h5;
    }
	}

	&__arrow {
    font-size: 10px;
    margin-left: 8px;
    transition: all 0.3s ease 0s;
	}

	&__sub-list {
    background-color: $color-orange;
    padding: 15px;
    flex: 1 1 100%;
    z-index: 5;
    opacity: 0;
    visibility: hidden;
    min-width: 200px;
    left: 0;
    position: absolute;
    top: 100%;
    transition: all 0.3s ease 0s;
    transform: translate(0, 10px);
    pointer-events: none;
	}

	&__sub-item {
    &:not(:last-child){
       margin: 0 0 5px 0;
       @include respond-to('xs') {
         margin: 0 0 10px 0;
       }
    }

    @include respond-to('xs') {
         font-size: 18px;
       }
	}
	&__sub-link {
    color: #fff;

    @media (any-hover: hover) {
      &:hover {
        text-decoration: underline;
      }
      
    }
	}
}

.search-form {
  max-width: 473px;

  &__item {
    display: flex;
    align-items: center;
    background-color: #fff;
    
    @include respond-to('sm') {
      position: relative;
      transition: all 1s;
      width: 50px;
      height: 50px;
      box-sizing: border-box;
      border-radius: 25px;
      border: 4px solid white;
      padding: 5px;

      &:hover {
        width: 200px;
        cursor: pointer;

        .search-form__input {
          display: block;
          padding: 0 46px 0 20px;
        }
        .search-form-btn {
        background-color: $color-orange;
       color: white; 
       z-index: 2;

       }

      }
    }
	}

		&__input {
      width: 100%;
      font-size: 14px;
      height: 45px;
      border: none;
      padding: 0 20px 0 0;

      @include respond-to('sm') {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;;
        height: 42.5px;
        line-height: 30px;
        outline: 0;
        border: 0;
        display: none;
        font-size: 1em;
        border-radius: 20px;
        padding: 0 20px;
      }
		}
}
.search-form-icon {
  display: none;
}
.search-form-btn {
  flex: 0 0 45px;
  color: #333;

  @include respond-to('sm') {
    padding: 10px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    font-size: 22px;
    transition: all 1s;
  }
}

.header-icon {
  &__item {
    font-size: 22px;
    color: #262F56;
    transition: color 0.3s ease 0s;
    
    @media (any-hover: hover) {
      &:hover {
        color: $color-orange;
      }
    }
  }
}

.cart-header {
  &__icon {
    display: block;
    position: relative;

    span {
      position: absolute;
      top: -10px;
      right: -10px;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $color-orange;
      color: #fff;
       font-size: 12px;
    }
	}
}

.icon-menu {
  display: none;

  @include respond-to('xs') {
    margin: 0 10px;
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
