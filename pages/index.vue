<template>
  <div class="deals-section">
    <h2 class="deals-section__headline">Top Deals</h2>
    <deal-list></deal-list>
    <deal-modal></deal-modal>
  </div>
</template>

<script>
import DealList from '../components/DealItems/DealList'
import DealModal from '../components/DealModal/DealModal'

export default {
  name: 'HomePage',

  components: {
    DealList,
    DealModal,
  },

  created() {
    this.$store.dispatch('LOAD_DEALS')
  },
}
</script>

<style lang="sass">
.deals-section
  color: #232C33
  font-family: 'Dosis', 'Helvetica Neue', Arial, sans-serif
  line-height: 1.4rem

  &__headline
    text-align: center

h2,
h3
  color: #2C5784
  font-weight: 400

a
  color: #5688C7
  text-decoration: none

  &:hover
    text-decoration: underline

  &:visited
    color: darkorchid

p
  font-size: 0.9rem

code
  background-color: #2C5784
  color: #ffffff
  font-size: 1rem
  letter-spacing: 2px
  padding: 0.2em
</style>
