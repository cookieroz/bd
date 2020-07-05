<template>
  <div class="deal-modal">
    <base-modal v-if="hasSelectedDeal" show-close @closeModal="onCloseModal">
      <h2 slot="modalHeader" class="deal-modal__headline-link">
        <deal-headline
          :deal-link="selectedDeal.go_link"
          :headline="selectedDeal.headline"
        >
        </deal-headline>
      </h2>

      <deal-modal-content slot="modalContent"></deal-modal-content>
    </base-modal>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import BaseModal from '../BaseItems/BaseModal'
import DealHeadline from '../DealItems/DealHeadline'
import DealModalContent from './DealModalContent'

export default {
  name: 'DealModal',

  components: {
    BaseModal,
    DealHeadline,
    DealModalContent,
  },

  computed: {
    ...mapGetters(['hasSelectedDeal']),

    ...mapState(['selectedDeal']),
  },

  methods: {
    onCloseModal() {
      this.$store.dispatch('UPDATE_SELECTED_DEAL', { selectedDeal: {} })
    },
  },
}
</script>

<style lang="sass" scoped>
.deal-modal__headline-link
  font-weight: 300
  text-align: center
</style>
