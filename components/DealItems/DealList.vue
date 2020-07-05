<template>
  <div class="deal-list">
    <p v-if="error" class="deal-list__error">{{ error }}</p>

    <template v-if="!error">
      <deal-card v-for="deal in deals" :key="deal.id" :deal="deal"> </deal-card>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DealCard from './DealCard'

export default {
  name: 'DealList',

  components: {
    DealCard,
  },

  computed: {
    ...mapState(['deals', 'error']),
  },
}
</script>

<style lang="sass">
.deal-list
  align-content: space-between
  display: grid
  grid-gap: 1%
  grid-template-columns: 30% 30% 30%
  justify-content: space-between

  @media only screen and (min-width: 75em)
    grid-template-columns: 24% 24% 24% 24%

  @media only screen and (max-width: 40em)
    grid-gap: 0.25%
    grid-template-columns: 49% 49%
</style>
