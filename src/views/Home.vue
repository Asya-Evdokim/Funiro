<template>
<main class="page">
    <main-slider/>
    <feature/>
    <products/>
    <tips-tricks/>
    <gallery/>         
</main>
</template>

<script>

import Feature from '../components/base/Feature.vue'
import Gallery from '../components/base/Gallery.vue'

import MainSlider from '../components/base/MainSlider.vue'
import Products from '../components/base/Products.vue'
import TipsTricks from '../components/base/TipsTricks.vue'



export default {
    components: {
        MainSlider,
        Feature,
        Products,
        TipsTricks,
        Gallery  
    },
}

</script>

<style scoped lang="scss">

</style>