  <template>
    <div id="app">
      <Header/>
      <router-view/>
      <Footer/>
    </div>
</template>
<script>
import Footer from './components/base/Footer.vue'
import Header from './components/base/Header.vue'

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
