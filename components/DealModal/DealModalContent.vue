<template>
  <div class="deal-modal__content">
    <deal-image
      :image-alt="selectedDeal.teaser_headline"
      :image-url="selectedImageUrl"
    >
    </deal-image>

    <p class="deal-modal__start-end">
      <deal-start-expires-text
        :expires-at="selectedDeal.expires_at"
        :starts-at="selectedDeal.starts_at"
      >
      </deal-start-expires-text>
    </p>

    <template v-if="selectedDeal.description">
      <div class="deal-modal__description" v-html="selectedDeal.description">
        {{ selectedDeal.description }}
      </div>
    </template>

    <deal-prices
      extra-classes="deal-modal__prices"
      :original-price="selectedDeal.msrp"
      :shipping-cost="selectedDeal.shipping_cost"
      :shipped-price="selectedDeal.shipped_price"
    >
    </deal-prices>

    <template v-if="selectedDeal.instructions">
      <div class="deal-modal__instructions" v-html="selectedDeal.instructions">
        {{ selectedDeal.instructions }}
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DealImage from '../DealItems/DealImage'
import DealPrices from '../DealItems/DealPrices'
import DealStartExpiresText from '../DealItems/DealStartExpiresText'

export default {
  name: 'DealModalContent',

  components: {
    DealImage,
    DealPrices,
    DealStartExpiresText,
  },

  computed: {
    selectedImageUrl() {
      return this.selectedDeal.image_urls['310x310']
    },

    ...mapState(['selectedDeal']),
  },
}
</script>

<style lang="sass" scoped>
.deal-modal
  &__start-end,
  &__prices
    text-align: center

  &__start-end
    font-style: italic

.deal-image
  text-align: center
</style>
