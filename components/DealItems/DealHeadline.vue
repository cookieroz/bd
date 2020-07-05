<template>
  <a
    v-if="dealLink"
    :class="['deal__headline', extraClasses]"
    :href="dealLink"
    :title="headline"
  >
    {{ headline }}
  </a>
  <span v-else :class="['deal__headline', extraClasses]">
    {{ headline }}
  </span>
</template>

<script>
export default {
  name: 'DealHeadline',

  props: {
    dealLink: {
      type: String,
      default: '',
      required: false,
    },
    extraClasses: {
      type: String,
      default: '',
      required: false,
    },
    headline: {
      type: String,
      required: true,
    },
  },
}
</script>
