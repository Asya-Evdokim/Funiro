<template>
<splide :options="options">
    <splide-slide>
        <img src="~@/assets/img/main-slider/01.jpg" alt="">
        <a href="#" class="slide-main__content">
            <h3 class="slide-main__title">Bohauss</h3>
            <p class="slide-main__text">Luxury big sofa 2-seat</p>
            <span class="slide-main__price icon-arrow-link">Rp 17.000.000</span>
        </a>
    </splide-slide>
    <splide-slide>
        <img src="~@/assets/img/main-slider/02.jpg" alt="">
        <a href="#" class="slide-main__content">
            <h3 class="slide-main__title">Lolito</h3>
            <p class="slide-main__text">Cute bed set</p>
            <span class="slide-main__price icon-arrow-link">Rp 1.000.000</span>
        </a>
    </splide-slide>
    <splide-slide>
        <img src="~@/assets/img/main-slider/03.jpg" alt="">
        <a href="#" class="slide-main__content">
            <h3 class="slide-main__title">Respira</h3>
            <p class="slide-main__text">Minimalist fan</p>
            <span class="slide-main__price icon-arrow-link">Rp 7.000.000</span>
        </a>
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
              breakpoints: {
                  '991': {
                    perPage: 1,
                    perMove: 1,
	                rewind: true,
                    padding: {
		                right: '0rem',
		                left : '0rem',
                    },
                    gap: '1rem',
		        },
                	            
	        },
          },
       };
  },
}


</script>

<style scoped lang="scss">

::v-deep .splide__slide {
   
   padding: 0 15px; 

   @media (min-width: $md1+px) {        
        width: auto !important; 
        position: relative;
        padding: 0 30px;
   }
    img {
        width: 100%;
    }
}

::v-deep .splide__arrows {
    max-width: 1270px;
    margin: 0 auto;
    @media (min-width: $md1+px) {        
        padding: 12px 15px 22px;
        display: flex;
        justify-content: flex-end;
    }    
}

::v-deep .splide__arrow {
    background-color: $color-orange;

     @media (min-width: $md1+px) {
        position: inherit;
        width: 48px;
        height: 48px;
        margin-left: 8px;
    }
    
    svg  {
       path {
           fill: white;
       }
    }
}
::v-deep .splide__pagination {
    
     @media (min-width: $md1+px) {
        top: 4%;
        bottom: auto;
        left: 674px;
        width: max-content;
    }
    @include respond-to('md') {
        display: none;
    }
}
::v-deep .splide__pagination li {
    
    @media (min-width: $md1+px) {
        &:not(:last-child) {
            padding-right: 20px;
        }
    }
}

::v-deep .splide__pagination__page {
    @media (min-width: $md1+px) {
        width: 11px;
        height: 11px;
    }
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

.slide-main {
    
		&__content {
            min-width: 295px;
            max-height: 300px;
            overflow: auto;
            display: flex;
            flex-direction: column;
            background: rgba(255, 255, 255, 0.72);
            backdrop-filter: blur(31px);
            padding: 12px;

            @media (min-width: $md2+px) {
                position: absolute;
                padding: 24px;
                bottom: 40px;
                right: 58px;
            }                        
		}

		&__title {
            font-size: clamp(18px, 5vw, 28px);
            font-weight: 600;
            line-height: 120%;            
		}

		&__text {
            color: $color-gray;
            margin: 4px 0 0 0;
            @include respond-to('xs')  {
                font-size: 12px;
            }              
		}

		&__price {
            font-size: 20px;
            font-weight: 600;
            line-height: 150%;
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
            margin-top: 8px;
            @include respond-to('xs')  {
                font-size: 16px;
            }
		}
}
.icon-arrow-link {

    &::before {
        font-size: 12px;
        margin-right: 5px;
        margin-top: 4px;
    }    
}

</style>