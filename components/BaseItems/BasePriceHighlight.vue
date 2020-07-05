<template>
  <span :class="['price-highlight', extraClasses]">{{ formattedPrice }}</span>
</template>

<script>
export default {
  name: 'PriceHighlight',

  props: {
    currency: {
      type: String,
      default: '$',
      required: false,
    },
    extraClasses: {
      type: String,
      default: '',
      required: false,
    },
    price: {
      type: String,
      required: true,
    },
  },

  computed: {
    formattedPrice() {
      return this.currency + this.price
    },
  },
}
</script>
