<template>
<section class="page__furniture furniture">
    <div class="furniture__container">
        <p class="furniture__text">Share your setup with</p>
        <h2 class="furniture__title title">#FuniroFurniture</h2>
        <div class="furniture__body">
            <kinesis-container class="furniture__items">
                
                <div class="furniture__column">
                    <kinesis-element :strength="10">
                        <div class="furniture__row row__left-top">
                            <router-link to="/galleryPage" class="furniture__row-item"><img src="~@/assets/img/furniture/09.jpg" alt=""></router-link>
                            <router-link to="/galleryPage" class="furniture__row-item"><img src="~@/assets/img/furniture/01.jpg" alt=""></router-link>
                            <router-link to="/galleryPage" class="furniture__row-item"><img src="~@/assets/img/furniture/02.jpg" alt=""></router-link>
                        </div>             
                    </kinesis-element>
                    <kinesis-element :strength="20">
                        <div class="furniture__row row__left-bottom">
                            <router-link to="/galleryPage" class="furniture__row-item"><img src="~@/assets/img/furniture/04.jpg" alt=""></router-link>
                            <router-link to="/galleryPage" class="furniture__row-item"><img src="~@/assets/img/furniture/06.jpg" alt=""></router-link>
                            <router-link to="/galleryPage" class="furniture__row-item"><img src="~@/assets/img/furniture/07.jpg" alt=""></router-link>
                        </div>             
                    </kinesis-element>
                </div> 
                <div class="furniture__column">
                    <kinesis-element :strength="20">
                        <div class="furniture__row row__center">
                            <router-link to="/galleryPage" class="furniture__row-item"><img src="~@/assets/img/furniture/03.jpg" alt=""></router-link>                            
                        </div>             
                    </kinesis-element>
                </div>
                <div class="furniture__column">
                    <kinesis-element :strength="10">
                        <div class="furniture__row row__right-top">
                            <router-link to="/galleryPage" class="furniture__row-item"><img src="~@/assets/img/furniture/04.jpg" alt=""></router-link>
                            <router-link to="/galleryPage" class="furniture__row-item"><img src="~@/assets/img/furniture/05.jpg" alt=""></router-link>
                            <router-link to="/galleryPage" class="furniture__row-item"><img src="~@/assets/img/furniture/01.jpg" alt=""></router-link>
                        </div>             
                    </kinesis-element>
                    <kinesis-element :strength="20">
                        <div class="furniture__row row__right-bottom">
                            <router-link to="/galleryPage" class="furniture__row-item"><img src="~@/assets/img/furniture/08.jpg" alt=""></router-link>
                            <router-link to="/galleryPage" class="furniture__row-item"><img src="~@/assets/img/furniture/09.jpg" alt=""></router-link>
                            <router-link to="/galleryPage" class="furniture__row-item"><img src="~@/assets/img/furniture/07.jpg" alt=""></router-link>
                        </div>             
                    </kinesis-element>
                </div>                                                 
            </kinesis-container>  
        </div>
    </div>    
</section>  
</template>

<script>

import { KinesisContainer, KinesisElement} from 'vue-kinesis';

export default {
    name: "Gallery",

     components: {
        KinesisContainer,
        KinesisElement,        
    },

    data() {
      return {
         
       };
  },
}
</script>

<style scoped lang="scss">

.furniture {
    overflow: hidden;
    margin-top: 44px;

		&__container {
		}

		&__text {
            text-align: center;
            font-size: 20px;
            font-weight: 600;
		}

		&__title {
            padding-top: 10px;
            text-align: center;
		}

        &__items {
            display: grid;
            grid-template-columns: auto;
            grid-auto-flow: column;
            align-items: center;
            gap: 16px;

            @media (any-hover: none) {
                overflow: auto;
                -webkit-overflow-scrolling: touch;
            }

            @media (any-hover: hover) {
                justify-content: center;
            }

		}



		&__body {
            position: relative;                  
		}

		&__column {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin: 0 -8px;
            &:first-child {
                justify-content: flex-end;
            }            
		}

		&__row {
            display: inline-grid;
            padding: 8px;
            gap: 16px;
            grid-template-columns: auto;
            grid-auto-flow: column;

            &:not(:last-child) {
                margin: 0 0 16px 0;
            }

		}

		&__row-item {
		}
}

.row {

		&__left-top {
            justify-content: flex-end;
            align-items: flex-end;
            
		}

		&__left-bottom {
            justify-content: flex-end;
            align-items: flex-start;
		}

		&__center {
            display: block;
		}

		&__right-top {
            align-items: flex-end;
		}

		&__right-bottom {
            align-items: flex-start;
		}
}
</style>