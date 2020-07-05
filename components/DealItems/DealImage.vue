<template>
  <div class="deal-image">
    <img
      :class="['deal-image__image', imageExtraClasses]"
      :src="imageUrl"
      :alt="imageAlt"
    />
  </div>
</template>

<script>
export default {
  name: 'DealImage',

  props: {
    imageAlt: {
      type: String,
      default: '',
      required: false,
    },
    imageExtraClasses: {
      type: String,
      default: '',
      required: false,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="sass">
.deal-image
  text-align: center

  &__image
    height: auto
    max-width: 100%
</style>
