<template>
<splide :options="options">
    <splide-slide>
        <img src="~@/assets/img/main-slider/01.jpg" alt="">
    </splide-slide>
    <splide-slide>
        <img src="~@/assets/img/main-slider/02.jpg" alt="">
    </splide-slide>
    <splide-slide>
        <img src="~@/assets/img/main-slider/03.jpg" alt="">
    </splide-slide>
</splide>
                  
</template>

<script>

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


export default {
    
    components: {
    Splide,
    SplideSlide,
  },

  data() {
      return {
          options: {
              type   : 'loop',
              padding: {
		        right: '5rem',
		        left : '5rem',
              },
              focus  : 'center',
          },
       };
  },
}


</script>

<style scoped lang="scss">

::v-deep .splide__slide {
    padding: 0 30px;
    width: auto !important;
}

::v-deep .splide__arrows {
    max-width: 1270px;
    margin: 0 auto;
    padding: 12px 15px 22px;
    display: flex;
    justify-content: flex-end;
}
::v-deep .splide__arrow {
    position: inherit;
    width: 48px;
    height: 48px;
    margin-left: 8px;
    background-color: $color-orange;

    svg  {
       path {
           fill: white;
       }
    }
}
::v-deep .splide__pagination {
    top: 4%;
    bottom: auto;
    left: 674px;
    width: max-content;
}
::v-deep .splide__pagination li {
     &:not(:last-child) {
       padding-right: 20px;
       @include respond-to('xs') {
         padding-right: 10px;
       }
    }

   
}

::v-deep .splide__pagination__page {
    width: 11px;
    height: 11px;
    

}  
::v-deep .splide__pagination__page.is-active {
       background: #E89F71;
       transform: scale(1);
       position: relative;
        &::before {
        content: "";
        border: 1px solid #E89F71;
        width: 27px;
        height: 27px;
        border-radius: 50%;
        top: -8px;
       left: -8px;
       position: absolute;
      }
    }
.splide__pagination__page.is-active {

}
</style>