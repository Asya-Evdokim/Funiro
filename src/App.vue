  <template>
    <div id="app">
      <Header/>
      <main class="main">
        <main-slider/>

      </main>
      <Footer/>
    </div>
</template>
<script>


import Footer from "./components/base/Footer";
import Header from "./components/base/Header";
import MainSlider from './components/base/MainSlider.vue';


export default {
  name: 'App',
  components: {
    Header,
    Footer,
    MainSlider,
  },
}
</script>

<style lang="scss">
div {
  color: $color-text;
}

</style>
