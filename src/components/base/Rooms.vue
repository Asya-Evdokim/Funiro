<template>
<section class="page__rooms rooms">
    <div class="rooms__container container">
        <div class="rooms__main">
            <div class="rooms__body">
                <h2 class="rooms__title title">50+ Beautiful rooms inspiration</h2>
                <p class="rooms__text">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <a href="#" class="rooms__button btn">Explore More</a>
            </div>
            <div class="rooms__slider">
                <splide :options="options">
                    <splide-slide v-for="(item, id) in ourProducts" :key="`product${id}`">
                        <img :src="require(`@/assets/img/rooms/${item.img}`)" alt="">
                        <a href="#" class="slide-main__content">
                            <p class="slide-main__text" v-html="item.description"></p>
                            <h3 class="slide-main__title icon-arrow-link" v-html="item.title"></h3>
                        </a>
                    </splide-slide>
                </splide>
            </div>
        </div>    
        
    </div>

</section>  
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
                type: 'loop',
                perPage: 3,
	            perMove: 1,
            },


            ourProducts: [
                {
                    title: 'Inner Peace',
                    description: '1 —— Bed Room',
                    img: '01.jpg',
                },
                 {
                    title: 'Inner Peace',
                    description: '2 —— Kitchen',
                    img: '02.jpg',
                },
                 {
                    title: 'Inner Peace',
                    description: '3 —— Hallway',
                    img: '03.jpg',
                },
                {
                    title: 'Inner Peace',
                    description: '3 —— Hallway',
                    img: '03.jpg',
                },
                {
                    title: 'Inner Peace',
                    description: '3 —— Hallway',
                    img: '03.jpg',
                },
                {
                    title: 'Inner Peace',
                    description: '3 —— Hallway',
                    img: '03.jpg',
                },
                {
                    title: 'Inner Peace',
                    description: '3 —— Hallway',
                    img: '03.jpg',
                },
                {
                    title: 'Inner Peace',
                    description: '3 —— Hallway',
                    img: '03.jpg',
                },
                {
                    title: 'Inner Peace',
                    description: '3 —— Hallway',
                    img: '03.jpg',
                },
            ]
        };
  }

}
</script>

<style scoped lang="scss">
.page {

		&__rooms {

		}
}
.rooms {

    background-color: #FCF8F3;
    //overflow: hidden;

		&__container {
		}

		&__main {
            padding-top: 44px;
            //display: flex;
            //align-items: center;
		}

		&__body {
            //flex: 1 0 378px;
            
		}

		&__title {
		}

		&__text {
            padding: 8px 0 24px 0;
		}

		&__button {
            padding: 12px 40px;
            background-color: $color-orange;
            color: #fff;

            @media (any-hover: hover) {
                &:hover {
                    background: $color-hover-orange;
                }
            }
		}

		&__slider {
            //padding-left: 86px;
		}
}
.container {
}
.title {
}
.btn {
}
.slide-main {

		&__content {
		}

		&__text {
		}

		&__title {
		}
}
.icon-arrow-link {
}


</style>