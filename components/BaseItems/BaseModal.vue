<template>
  <div :class="['modal', wrapperClasses]">
    <div class="modal__content">
      <div v-if="showClose" class="modal__close" @click="$emit('closeModal')">
        &times;
      </div>

      <slot name="modalHeader"></slot>

      <slot name="modalContent"></slot>

      <slot name="ModalFooter"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseModal',

  props: {
    showClose: Boolean,
    wrapperClasses: {
      type: String,
      default: '',
      required: false,
    },
  },
}
</script>

<style lang="sass">
.modal
  align-items: center
  background-color: rgba(0, 0, 0, 0.5)
  bottom: 0
  display: flex
  justify-content: center
  left: 0
  position: fixed
  right: 0
  top: 0
  z-index: 9

  &__content
    background-color: white
    margin: 1em
    max-width: 600px
    max-height: 90vh
    overflow: scroll
    padding: 0.75em
    position: relative

  &__close
    color: #2C5784
    cursor: pointer
    font-size: 40px
    font-weight: 900
    line-height: 20px
    position: absolute
    right: 0
    top: 0
</style>
