<template>
  <section class="page-products products">
      <div class="products__container container">
          <div class="products__body">
              <h2 class="products__title title">Our Products</h2>
              <div class="products__items">
                  <article v-for="(item, id) in ourProducts" :key="`product${id}`" class="products__item item-product">
                      <div class="item-product__labels" v-if="item.label.type !== 'hidden'">
                          <div class="item-product__label" :class="{'item-product__label-sale': item.label.type === 'percent'}">{{item.label.type === "percent" ? item.label.value : "New"}}</div>
                      </div>
                      <a href="#" class="item-product__image">
                          <img :src="require(`@/assets/img/products/${item.img}`)" alt="product">
                      </a>
                      <div class="item-product__body">
                          <div class="item-product__content">
                              <h5 class="item-product__title" v-html="item.title"></h5>
                              <p class="item-product__text" v-html="item.description"></p>
                          </div>
                          <div class="item-product__prices">
                              <span class="item-product__price">Rp {{item.price}}</span>
                              <span class="item-product__price-old" v-if="item.oldPrice !== null">Rp {{item.oldPrice}}</span>
                          </div>            
                      </div>
                      <div class="item-product__actions action-product">
                              <div class="action-product__body">
                                  <a href="#" class="action-product__button btn">Add to cart</a>
                                  <div class="action-product__item">
                                      <a href="#" class="action-product__link icon-share">Share</a>
                                      <a href="#" class="action-product__link icon-favorite">Like</a>
                                  </div>        
                              </div>
                          </div>
                  </article>
              </div> 
              
          </div>
      </div>
  </section>
</template>

<script>

export default {
  

    data() {
        return {
            ourProducts: [
                {
                    label: {
                        type: 'percent',
                        value: '30%',
                    },
                    title: 'Syltherine',
                    description: 'Stylish cafe chair',
                    img: '01.jpg',
                    price: '2.500.000',
                    oldPrice: '3.500.000',
                },
                 {
                    label: {
                        type: 'percent',
                        value: '30%',
                    },
                    title: 'Leviosa',
                    description: 'Stylish cafe chair',
                    img: '02.jpg',
                    price: '2.500.000',
                    oldPrice: null,
                },
                {
                    label: {
                        type: 'percent',
                        value: '50%',
                    },
                    title: 'Lolito',
                    description: 'Luxury big sofa',
                    img: '03.jpg',
                    price: '7.000.000',
                    oldPrice: '14.000.000',
                },
                {
                    label: {
                        type: 'new',
                        value: null,
                    },
                    title: 'Respira',
                    description: 'Minimalist fan',
                    img: '04.jpg',
                    price: '500.000',
                    oldPrice: null,
                },
                {
                    label: {
                        type: 'hidden',
                        value: null,
                    },
                    title: 'Grifo',
                    description: 'Night lamp',
                    img: '05.jpg',
                    price: '1.500.000',
                    oldPrice: null,
                },
                {
                    label: {
                        type: 'new',
                        value: null,
                    },
                    title: 'Muggo',
                    description: 'Small mug',
                    img: '06.jpg',
                    price: '150.000',
                    oldPrice: null,
                },
                {
                    label: {
                        type: 'percent',
                        value: '50%',
                    },
                    title: 'Pingky',
                    description: 'Cute bed set',
                    img: '07.jpg',
                    price: '7.000.000',
                    oldPrice: '14.000.000',
                },
                {
                    label: {
                        type: 'new',
                        value: null,
                    },
                    title: 'Potty',
                    description: 'Minimalist flower pot',
                    img: '08.jpg',
                    price: '500.000',
                    oldPrice: null,
                },
            ]
        };
    }

}
</script>

<style scoped lang="scss">

.products {

		&__title {
            display: flex;
            justify-content: center;
            padding: 6px 0;            
		}

		&__items {
            padding: 24px 0;
            display: grid;
            grid-gap: 32px;
            grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
		}

        

}

.item-product {
    position: relative;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease 0s;

    @media (any-hover: hover) {

         &:hover {
             .action-product {
                 display: contents;                 
            
                    &__body {
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        width: 100%;
                        background: rgba(58, 58, 58, 0.72);                        
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    &__button {
                        max-width: 202px;
                        background-color: #fff;
                        color: $color-orange;
                        padding: 12px 58px;
                        &:hover {
                            background-color: rgb(223, 221, 221);                            
                        }
                    }
                    &__item {
                        display: flex;
                        justify-content: space-between;
                        width: 184px;
                        padding-top: 24px;
                    }
                    &__link {
                        color: #fff;
                        display: flex;
                        transition: color 0.3s ease 0s;
                            &:hover {
                                color: $color-orange;
                            }

                        &::before {
                            padding-right: 8px;
                            font-size: 20px;
                        }
                    }
             }
        }
    }

		&__label {
            position: absolute;
            top: 24px;
            right: 24px;
            border-radius: 50%;
            width: 48px;
            height: 48px;
            text-align: center;
            padding: 12px 4px;
            background-color: #2EC1AC;
            color: #fff;
        }

		&__label-sale {
            background-color: #E97171;
		}

		&__image {
            img {
                width: 100%;
            }
		}

		&__body {
            padding: 16px 30px 30px 16px;
            background-color: #F4F5F7;
		}

		&__title {
            font: $font-size-h5;

            @include respond-to('xs')  {
                font-size: 20px;
            }  
		}

		&__text {
            color: #898989;
            padding: 8px 0;
		}


		&__prices {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
		}

		&__price {
            font-size: 20px;
            font-weight: 600;
            line-height: 150%;
		}

		&__price-old {
            text-decoration-line: line-through;
            color: #B0B0B0;
		}
}
.action-product {
    display: none;
	
}


</style>