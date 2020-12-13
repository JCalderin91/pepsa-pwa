<template>
  <div v-html="iconSvg" :class="{ small: small, large: large }"></div>
</template>

<script>
import feather from "feather-icons";

export default {
  name: "c-icon",
  props: {
    icon: {
      type: String,
      default: "flag",
    },
    small: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    iconSvg: function () {
      return feather.icons[this.icon].toSvg();
    },
  },
};
</script>
<style lang="scss" >
.small svg {
  height: 1rem;
}
.large svg {
  height: 2rem;
}
</style>