<template>
    <div>
        <our-products/>
        <router-link to="/ourProducts" class="products__button btn">Show More</router-link>
    </div>
</template>

<script>
import OurProducts from '../../views/OurProducts.vue'
export default {
  components: { OurProducts },
   
}
</script>

<style scoped lang="scss">

.products__items {
    @include respond-to('xs') {
        &:not(:first-child) {
            display: none;
        }
    }
}

		.products__button {
            display: block;
            margin: 0 auto;
            width: 245px;
            border: 1px solid #E89F71;
            padding: 12px 15px;
            color: $color-orange;
            transition: all 0.3s ease 0s;

            @media (any-hover: hover) {
                &:hover {
                    background-color: $color-orange;
                    color: #fff;
                    opacity: 0.72;
                }
            }
		}
</style>