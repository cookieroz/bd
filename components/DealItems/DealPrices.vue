<template>
  <p :class="['deal-prices', extraClasses]">
    Price was
    <price-highlight
      extra-classes="deal-prices__msrp_price"
      :price="originalPrice"
    ></price-highlight>
    and now
    <price-highlight
      extra-classes="deal-prices__discounted_price"
      :price="dealPrice"
    ></price-highlight
    >{{ dealPriceEndText }}.
  </p>
</template>

<script>
import PriceHighlight from '../BaseItems/BasePriceHighlight'

export default {
  name: 'DealPrices',

  components: {
    PriceHighlight,
  },

  props: {
    extraClasses: {
      type: String,
      default: '',
      required: false,
    },
    originalPrice: {
      type: String,
      default: '',
      required: false,
    },
    price: {
      type: String,
      default: '',
      required: false,
    },
    shippingCost: {
      type: String,
      default: '',
      required: false,
    },
    shippedPrice: {
      type: String,
      default: '',
      required: false,
    },
  },

  computed: {
    dealPrice() {
      return this.shippedPrice || this.price
    },

    dealPriceEndText() {
      return this.hasShippingCost ? ' including shipping' : ''
    },

    hasShippingCost() {
      return +this.shippingCost > 0
    },
  },
}
</script>
