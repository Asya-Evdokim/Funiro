<template>
  <footer class="footer">
    <div class="footer__container container">
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
            <li class="menu-footer__item">
              <a href="#" class="menu-footer__link title-footer">Menu</a>
              <button class="menu-footer__arrow icon-arrow-down"></button>
              <ul class="menu-footer__sub-list">
                <li class="menu-footer__sub-item"><a href="#" class="menu-footer__sub-item">Products</a></li>
                <li class="menu-footer__sub-item"><a href="#" class="menu-footer__sub-item">Rooms</a></li>
                <li class="menu-footer__sub-item"><a href="#" class="menu-footer__sub-item">Inspirations</a></li>
                <li class="menu-footer__sub-item"><a href="#" class="menu-footer__sub-item">About Us</a></li>
                <li class="menu-footer__sub-item"><a href="#" class="menu-footer__sub-item">Terms & Policy</a></li>
              </ul>
              </li>
            <li class="menu-footer__item">
              <a href="#" class="menu-footer__link title-footer">Account</a>
              <button class="menu-footer__arrow icon-arrow-down"></button>
              <ul class="menu-footer__sub-list">
                <li class="menu-footer__sub-item"><a href="#" class="menu-footer__sub-item">My Account</a></li>
                <li class="menu-footer__sub-item"><a href="#" class="menu-footer__sub-item">Checkout</a></li>
                <li class="menu-footer__sub-item"><a href="#" class="menu-footer__sub-item">My Cart</a></li>
                <li class="menu-footer__sub-item"><a href="#" class="menu-footer__sub-item">My catalog</a></li>
              </ul>
              </li>
            <li class="menu-footer__item">
              <a href="#" class="menu-footer__link title-footer">Stay Connected</a>
              <button class="menu-footer__arrow icon-arrow-down"></button>
              <ul class="menu-footer__sub-list">
                <li class="menu-footer__sub-item"><a href="https://www.facebook.com/" class="menu-footer__sub-item">Facebook</a></li>
                <li class="menu-footer__sub-item"><a href="https://www.instagram.com/" class="menu-footer__sub-item">Instagram</a></li>
                <li class="menu-footer__sub-item"><a href="https://twitter.com/" class="menu-footer__sub-item">Twitter</a></li>
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
}
</script>

<style scoped lang="scss">

</style>