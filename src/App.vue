  <template>
    <div id="app">
      <Header/>
      <main class="main">

      </main>
      <Footer/>
    </div>
</template>
<script>


import Footer from "./components/base/Footer";
import Header from "./components/base/Header";


export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss">
div {
  color: $color-text;
}

</style>
