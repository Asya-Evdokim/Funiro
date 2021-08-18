  <template>
    <div id="app">
      <Header/>
      <main class="page">
        <main-slider/>
        <feature/>

      </main>
      <Footer/>
    </div>
</template>
<script>
import Feature from './components/base/Feature.vue';


import Footer from "./components/base/Footer";
import Header from "./components/base/Header";
import MainSlider from './components/base/MainSlider.vue';


export default {
  name: 'App',
  components: {
    Header,
    Footer,
    MainSlider,
    Feature,
  },
}
</script>

<style lang="scss">
div {
  color: $color-text;
}

</style>
