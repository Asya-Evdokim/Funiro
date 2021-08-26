<template>
  <section class="page__tips tips">
      <div class="tips__container container">
          <h2 class="tips__title title">Tips & Tricks</h2>
          <splide class="tips__slides" :options="options">
              <splide-slide class="tips__slide" v-for="(item, id) in news" :key="`new${id}`">
                  <article class="tips__slide-item item-slide">
                      <a href="#" class="item-slide__img">
                          <img :src="require(`@/assets/img/tips/${item.img}`)" alt="">
                      </a>
                      <div class="item-slide__body">
                          <h5 class="item-slide__title" v-html="item.title"></h5>
                          <p class="item-slide__text" v-html="item.date"></p>
                      </div>
                  </article>
              </splide-slide>
          </splide>  
      </div>
  </section>
</template>

<script>

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
    name: "TipsTricks",
    
    components: {
        Splide,
        SplideSlide,
    },

    data() {
        return {
            options: {
                type: 'loop',
                perPage: 3,
                perMove: 1,
	            rewind: true,
               
                breakpoints: {
                    '768': {
                        perPage: 2,
			            gap: '1rem',
		            },
                    '480': {
                        perPage: 1,
                        gap    : '1rem',
                    },
	            }   
            },

            news: [
                {
                    title: 'How to create a living room to love',
                    date: '20 jan 2020',
                    img: '01.jpg',
                },
                {
                    title: 'Solution for clean look working space',
                    date: '10 jan 2020',
                    img: '02.jpg',
                },
                {
                    title: 'Make your cooking activity more fun with good setup',
                    date: '20 jan 2020',
                    img: '03.jpg',
                },
                {
                    title: 'How to create a living room to love',
                    date: '10 jan 2020',
                    img: '01.jpg',
                },
                {
                    title: 'How to create a living room to love',
                    date: '20 jan 2020',
                    img: '02.jpg',
                },
                {
                    title: 'How to create a living room to love',
                    date: '30 jan 2020',
                    img: '03.jpg',
                },
                {
                    title: 'How to create a living room to love',
                    date: '20 jan 2020',
                    img: '01.jpg',
                },
                {
                    title: 'How to create a living room to love',
                    date: '20 jan 2020',
                    img: '02.jpg',
                },

            ]
        };
    }
}
</script>

<style scoped lang="scss">

.tips {

		&__title {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 44px;
		}

		&__slides {
            padding: 32px 0 58px 0;

            @include respond-to('xs')  {
                padding-bottom: 0;
            }            
		}

		&__slide {
            &:not(:last-child) {
                padding-right: 20px;
            }
            @include respond-to('xxs')  {
                &:not(:last-child) {
                    padding-right: 0;
                }
            }            
		}
}

.item-slide {

    transition: transform .5s;

        &::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: opacity 2s cubic-bezier(.165, .84, .44, 1);
            box-shadow: 0 8px 17px 0 rgba(97, 97, 97, .06), 0 6px 20px 0 rgba(0, 0, 0, 0);
            content: '';
            opacity: 0;
            z-index: -1;
        }
        @media (any-hover: hover) {
            &:hover,
            &:focus {
                transform: scale3d(1.006, 1.006, 1);
                &::after {
                    opacity: 1;
                }
            }
        }
         img {
            width: 100%;
        }
        
		&__title {
            padding: 16px 20px 0 16px;
            font: $font-size-h5;
             @include respond-to('xs')  {
                font-size: 16px;
            } 
		}

		&__text {
            font-size: 14px;
            color: #898989;
            padding: 8px 0 16px 16px;       
		}
}

::v-deep .splide__arrow {
    top: 48%;
}

::v-deep .splide__arrow--prev {
    left: -22px;
    
    @include respond-to('xxs')  {
        display: none;
    } 
}
::v-deep .splide__arrow--next {
    right: -22px;

    @include respond-to('xxs')  {
        right: 0;        
    } 
}
::v-deep .splide__arrow {
    width: 48px;
    height: 48px;
    background-color: white;
    box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.16);

    @include respond-to('xxs')  {
        width: 28px;
        height: 28px;
        top: 85%;
    }

    svg  {
       path {
           fill: $color-orange;
       }
    }
}

::v-deep .splide__pagination {
    
    @include respond-to('md') {
           display: none;
    }
}

::v-deep .splide__pagination li {
     @media (min-width: $md3+px) {
         &:not(:last-child) {
             padding-right: 20px;
        }
    }
}

::v-deep .splide__pagination__page {
    @media (min-width: $md3+px) {
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
</style>