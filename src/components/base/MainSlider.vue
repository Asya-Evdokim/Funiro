<template>
  <section class="page__main-slaider main-slaider">  
      <div class="main-slaider__container">
          <div class="main-slaider__body">
              <div class="main-slaider__content content-main">
                  <h1 class="content-main__title">
                       High-Quality
                       Furniture Just
                       For You
                  </h1>
                  <p class="content-main__text">
                      Our furniture is made from selected and best quality materials that are suitable for your dream home
                  </p>
                  <a href="#" class="content-main__button btn">Shop Now</a>
              </div>
              <slider/>
          </div>
      </div>
  </section>
</template>

<script>
import Slider from '../ui/Slider.vue'

export default {
  components: { Slider },

}
</script>

<style scoped lang="scss">
.page {
  //flex: 1 1 auto;
		&__main-slaider {

		}
}
.main-slaider {
    background-color: $color-main;

		&__container {
      

      @media (min-width: $md2 +px) {
        position: relative;
        &::before {
        content: "";
        background: #F9F1E7;
        position: absolute;
        top: -126px;
        width: 100vw;
        right: 43%;
        height: 100%;
      }
    }        
	}

		&__body {
      

      @media (min-width: $md1 +px) {
        padding: 14px 0 0 0;
        position: relative;
        z-index: 2;
      }    
		}

		&__content {
       @include respond-to('sm') {
        
      }
		}
}

.content-main {
    //position: relative;
    z-index: 2;
    padding: 20px;
    background: rgba(255, 255, 255, 0.72);
    -webkit-backdrop-filter: blur(31px);
    backdrop-filter: blur(31px);
    @media (min-width: $md1 +px) {
      padding: 60px;
      position: absolute;
      width: 494px;
      height: 553px;
      left: 99px;
    }

		&__title {
      font: $font-size-h1;
      padding-top: 6px;      

      @include respond-to('md') {
        font-size: clamp(24px, 5vw, 56px);
      }
		}

		&__text {
      color: #898989;
      font-size: clamp(16px, 2vw, 20px);
      line-height: 150%;
      padding: 16px 22px 48px 0;

      @include respond-to('xs') {
        padding: 16px 0;
      }
		}

		&__button {
      background: $color-orange;
      color: #FFFFFF;
      font: $font-size-small;
      width: 100%;
      padding: 22px 15px;
      font-size: clamp(16px, 2vw, 20px);
      line-height: 150%;

      @include respond-to('xs') {
        padding: 15px;
      }

      @media (any-hover: hover) {
        &:hover {
          background: $color-hover-orange;
        }
      }
		}
}
</style>