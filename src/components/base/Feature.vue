<template>
  <section class="page__features features">
      <div class="features__container container">
          <div class="features__item">
            <cup/>
            <h3 class="features__title">High Quality</h3>
            <p class="features__text">crafted from top materials</p>
          </div>
          <div class="features__item">
            <protection/>
            <h3 class="features__title">Warrany Protection</h3>
            <p class="features__text">Over 2 years</p>
          </div>
          <div class="features__item">
            <shipping/>
            <h3 class="features__title">Free Shipping</h3>
            <p class="features__text">Order over 150 $</p>
          </div>
          <div class="features__item">
            <support/>
            <h3 class="features__title">24 / 7 Support</h3>
            <p class="features__text">Dedicated support</p>
          </div>
      </div>
  </section>
</template>

<script>
import Cup from '../icon/Cup.vue'
import Protection from '../icon/Protection.vue'
import Shipping from '../icon/Shipping.vue'
import Support from '../icon/Support.vue'
export default {
  components: { Cup, Protection, Shipping, Support },

}
</script>

<style scoped lang="scss">

.features {
  padding-top: 88px;
  padding-bottom: 88px;
		&__container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
		}

		&__item {
      display: grid;
      padding: 15px 10px;
      grid-template: auto auto / 85px 1fr;
		}

    svg {
      text-align: center;
      align-self: center;
      grid-row: span 2;

      @media (max-width: $md3 +px) {
        padding: 0 15px 0 0;
      }
    }

		&__title {
      font-size: 18px;
      font-weight: 600;
      line-height: 150%;
		}

		&__text {
      color: #898989;
		}
}
</style>