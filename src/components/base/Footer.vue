<template>
  <footer class="footer">
    <div class="footer__container container grid">
      <div class="footer__main">
        <a href="#" class="footer__logo title-footer">Funiro.</a>
        <p class="footer__text">Worldwide furniture store since 2020. 
        We sell over 1000+ branded products on our website</p>
        <div class="footer__contacts contacts-footer">
          <a href="#" class="contacts-footer__item icon-location">Sawojajar Malang, Indonesia</a>
          <a href="tel:62894563455" class="contacts-footer__item icon-phone">+6289 456 3455</a>
          <a href="www.funiro.com" target="_blank" class="contacts-footer__item">www.funiro.com</a>
        </div>  
      </div>
      <div class="footer__menu menu-footer">
        <nav class="menu-footer__body">
          <ul class="menu-footer__list">
            <li class="menu-footer__item"   :class="{active: menuSpoiler.menu}">
              <a href="#" class="menu-footer__link title-footer" @click="toggleMenu">Menu</a>
              <button class="menu-footer__arrow icon-arrow-down" @click="toggleMenu"></button>
              <ul class="menu-footer__sub-list">
                <li class="menu-footer__sub-item" ><a href="#" class="menu-footer__sub-item">Products</a></li>
                <li class="menu-footer__sub-item"><a href="#" class="menu-footer__sub-item">Rooms</a></li>
                <li class="menu-footer__sub-item"><a href="#" class="menu-footer__sub-item">Inspirations</a></li>
                <li class="menu-footer__sub-item"><a href="#" class="menu-footer__sub-item">About Us</a></li>
                <li class="menu-footer__sub-item"><a href="#" class="menu-footer__sub-item">Terms & Policy</a></li>
              </ul>
              </li>
            <li class="menu-footer__item" :class="{active: menuSpoiler.account}">
              <a href="#" class="menu-footer__link title-footer" @click="toggleAccount" >Account</a>
              <button class="menu-footer__arrow icon-arrow-down" @click="toggleAccount" ></button>
              <ul class="menu-footer__sub-list">
                <li class="menu-footer__sub-item"><a href="#" class="menu-footer__sub-item">My Account</a></li>
                <li class="menu-footer__sub-item"><a href="#" class="menu-footer__sub-item">Checkout</a></li>
                <li class="menu-footer__sub-item"><a href="#" class="menu-footer__sub-item">My Cart</a></li>
                <li class="menu-footer__sub-item"><a href="#" class="menu-footer__sub-item">My catalog</a></li>
              </ul>
              </li>
            <li class="menu-footer__item" :class="{active: menuSpoiler.connect}">
              <a href="#" class="menu-footer__link title-footer" @click="toggleConnect">Stay Connected</a>
              <button class="menu-footer__arrow icon-arrow-down" @click="toggleConnect"></button>
              <ul class="menu-footer__sub-list">
                <li class="menu-footer__sub-item"><a href="https://www.facebook.com/" class="menu-footer__sub-item" target="_blank">Facebook</a></li>
                <li class="menu-footer__sub-item"><a href="https://www.instagram.com/" class="menu-footer__sub-item" target="_blank">Instagram</a></li>
                <li class="menu-footer__sub-item"><a href="https://twitter.com/" class="menu-footer__sub-item" target="_blank">Twitter</a></li>
              </ul>
              </li>
          </ul>
        </nav>
      </div>
      <div class="footer__subscribe subscribe">
        <h2 class="subscribe__title title-footer">Stay Updated</h2>
        <form action="#" class="subscribe__form">
          <input autocomplete="off" type="text" name="form[]" placeholder="Enter your email" class="subscribe__input">
          <button type="submit" class="subscribe__button icon-send"></button>
        </form>
      </div>
    </div>
  </footer>
</template>
<script>



export default {
  name: "Footer",
  components: {
    },

    data() {
      return {
        menuSpoiler: {
          menu: false,
          account: false,
          connect: false
        }
    }
},

methods: {
  toggleMenu() {
        this.menuSpoiler.menu = !this.menuSpoiler.menu;
        this.menuSpoiler.account = false;
        this.menuSpoiler.connect = false;
      },
  toggleAccount() {
        this.menuSpoiler.account = !this.menuSpoiler.account;
        this.menuSpoiler.connect = false;
        this.menuSpoiler.menu = false;
      },
  toggleConnect() {
        this.menuSpoiler.connect = !this.menuSpoiler.connect;
        this.menuSpoiler.account = false;
        this.menuSpoiler.menu = false;
      }       

}
}
</script>

<style scoped lang="scss">
.footer {

		&__container {
      display: grid;
      border-top: 1px solid #D8D8D8;
      padding-top: clamp(20px, 6vw, 80px);
      padding-bottom: clamp(20px, 6vw, 50px);

      @include respond-to('lg') {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 290px;
      }

      @include respond-to('sm') {
        display: block;
      }
		}

		&__main {
      grid-column: 1/4;
      display: grid;
      grid-gap: clamp(10px,1vw,16px);

      @include respond-to('lg') {
        grid-column: 2 span;
      }
		}

		&__text {
      color: $color-gray;
      padding-right: 50px;
		}

		&__menu {
      grid-column: 4/10;

      @include respond-to('lg') {
        grid-column: auto;
      }

      @include respond-to('sm') {
        padding: 20px 0;
      }
		}

		&__subscribe {
      grid-column: 10/13;

      @include respond-to('lg') {
        grid-column: auto;
      }
		}
}

.title-footer {
  font-size: clamp(20px, 3vw, 24px);
  line-height: 120%;
  font-weight: 700;
  color: #000;
}

.contacts-footer {
  display: grid;
  grid-gap: clamp(10px,1vw,16px);

		&__item {
      display: flex;
      align-items: baseline;
      color: $color-gray;
      transition: color 0.3s ease 0s;

      &::before {
       padding-right: 8px;
       font-size: 20px;
      }

      @media (any-hover: hover) {
        &:hover {
          color: $color-orange;
        }
      }
		}
}

.menu-footer {

		&__list {
      display: flex;

      @include respond-to('xs') {
        flex-direction: column;

      }
		}

    &__link {

      @include respond-to('xs') {
        flex: 1;

      }
    }

		&__item {
      flex: 0 1 30.3333%;

      &:not(:last-child) {
        padding-left: 13px;
        
        @include respond-to('xs') {
          padding-left: 0;
          padding-bottom: 20px;
        }
      }

      @include respond-to('xs') {
          position: relative;
        }

        &.active {
          .menu-footer__sub-list {
            display: list-item;
          }

          .menu-footer__arrow {
            transform: rotate(-180deg);
          }
        }
		}

		&__arrow {
      display: none;

      @include respond-to('xs') {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transition: all 0.3s ease 0s;
      }
		}

    &__sub-list {
      
      @include respond-to('xs') {
        display: none;       
      }
    }

		&__sub-item {
      color: $color-gray;
      padding-top: clamp(10px, 2vw, 16px);

      @media (any-hover: hover) {
        &:hover {
          color: $color-orange;
        }
      }

      
		}
}

.subscribe {

  display: flex;
  flex-direction: column;

		&__title {
      padding-bottom: clamp(10px, 2vw, 16px);
		}

		&__form {
      display: flex;
      padding-right: 4px;
		}

		&__input {
      flex: 1;
      border: none;
      background-color: #F4F5F7;
      padding: 10px 12px;
		}

		&__button {
      flex: 0 0 45px;
      height: 45px;
      font-size: 20px;
      background-color: $color-orange;
      color: #fff;
      margin-left: 4px;
      transition: background-color 0.3s ease 0s;

      @media (any-hover: hover) {
        &:hover {
          background-color:#e2b396;
        }
      }
		}
}
</style>