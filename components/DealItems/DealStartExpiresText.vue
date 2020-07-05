<template>
  <span class="deal-start-end-text">
    {{ startExpiresText }}
  </span>
</template>

<script>
export default {
  name: 'DealStartExpiresText',

  props: {
    expiresText: {
      type: String,
      default: 'expires on',
    },
    expiresAt: {
      type: String,
      required: true,
    },
    startsAt: {
      type: String,
      required: true,
    },
    startText: {
      type: String,
      default: 'Deal starts',
    },
  },

  computed: {
    expiresDateTime() {
      return this.formatDateTime(this.expiresAt)
    },

    startDateTime() {
      return this.formatDateTime(this.startsAt)
    },

    startExpiresText() {
      return `${this.startText} ${this.startDateTime} and ${this.expiresText} ${this.expiresDateTime}.`
    },
  },

  methods: {
    formatDateTime(dateString) {
      return dateString ? new Date(dateString).toLocaleString('en-US') : ''
    },
  },
}
</script>
