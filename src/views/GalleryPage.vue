<template>
  <section class="gallery container">
    <ul class="home__body">
      <li><router-link to="/" class="home">Home</router-link></li>
      <li class="icon-arrow-link"></li>
      <li><span>Furniture</span></li>
    </ul>         
  <h2 class="gallery__title title container">Furniture</h2>   
  <div class="gallery__items grid">
    <figure  v-for="(src, index) in imgs"
      :key="index"
      class="pic gallery__item"
      @click="() => showImg(index)">
      <img :src="src"  alt="#" class="gallery__img"></figure>

     <vue-easy-lightbox
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide">
    </vue-easy-lightbox>
  </div>
</section>
</template>

<script>
export default {
    data() {
    return {
      imgs: [
        '/gallery/01.jpg',
        '/gallery/02.jpg',
        '/gallery/03.jpg',
        '/gallery/04.jpg',
        '/gallery/05.jpg',
        '/gallery/06.jpg',
        '/gallery/07.jpg',
        '/gallery/08.jpg',
        '/gallery/09.jpg',   
      ],  
      visible: false,
      index: 0   // default: 0
    }
  },
  methods: {

    showImg (index) {
        this.index = index
        this.visible = true
      },
    showSingle() {
      this.show()
    },
    show() {
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  }

}
</script>

<style scoped lang="scss">


.icon-arrow-link {
  &::before {
    font-size: 10px;
  }
}
.gallery {
    
    overflow: hidden;     

		&__title {
            text-align: center;
            padding: 40px 0;

            @include respond-to('xs') {
                padding: 20px 0;
            }

		}

		&__items {
            grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    
            @include respond-to('sm') {
                grid-gap: 5px;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            }

            
		}

		&__item {
            
		}


		&__img {
             width: 100%;
        height: 100%;
        object-fit: cover;

        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);

        &:hover {
          transition: filter .7s ease-in-out;
          -webkit-filter: grayscale(0%);
          filter: grayscale(0%);
        }
		}
}

.pic {
}

</style>