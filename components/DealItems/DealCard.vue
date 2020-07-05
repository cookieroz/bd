<template>
  <div class="deal-card" @click="onCardClick">
    <h3 class="deal-card__headline">
      <deal-headline :headline="headlineText"></deal-headline>
    </h3>

    <div class="deal-card__content">
      <deal-image :image-alt="headlineText" :image-url="deal.image">
      </deal-image>

      <p v-if="deal.description_preview" class="deal-card__preview">
        {{ deal.description_preview }}
      </p>
    </div>
  </div>
</template>

<script>
import DealHeadline from './DealHeadline'
import DealImage from './DealImage'

export default {
  name: 'DealCard',

  components: {
    DealHeadline,
    DealImage,
  },

  props: {
    deal: {
      type: Object,
      required: true,
    },
  },

  computed: {
    headlineText() {
      return this.deal.teaser_headline || this.deal.headline
    },
  },

  methods: {
    onCardClick() {
      this.$store.dispatch('UPDATE_SELECTED_DEAL', { selectedDeal: this.deal })
    },
  },
}
</script>

<style lang="sass">
.deal-card
  border: 2px dotted transparent
  cursor: pointer
  padding: 0.5em

  &:hover
    border-color: #5688C7

  &__headline
    text-align: center
</style>
