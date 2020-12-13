<template>
  <div class="icon" :class="[icon]" :style="customClass"></div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#000000",
      validator: (val) => {
        const patt = /#(?:[a-f\d]{3}){1,2}\b|rgb\((?:(?:\s*0*(?:25[0-5]|2[0-4]\d|1?\d?\d)\s*,){2}\s*0*(?:25[0-5]|2[0-4]\d|1?\d?\d)|\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%(?:\s*,\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%){2})\s*\)|hsl\(\s*0*(?:360|3[0-5]\d|[12]?\d?\d)\s*(?:,\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%\s*){2}\)|(?:rgba\((?:(?:\s*0*(?:25[0-5]|2[0-4]\d|1?\d?\d)\s*,){3}|(?:\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%\s*,){3})|hsla\(\s*0*(?:360|3[0-5]\d|[12]?\d?\d)\s*(?:,\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%\s*){2},)\s*0*(?:1|0(?:\.\d+)?)\s*\)/;
        return patt.test(val);
      },
    },
    size: {
      type: [String, Number],
      default: 18,
      validator: (val) => Number(val) > 1,
    },
  },
  computed: {
    customClass() {
      return `
        background-color: ${this.color};
        width: ${this.size}px;
        height: ${this.size}px;
      `;
    },
  },
};
</script>

<style lang="scss" scoped>
$icons: "alert-circle", "drill", "log-out", "arrow", "portfolio", "search";
.icon {
  mask-size: 100% 100%;
  mask-position: center;
  @each $icon in $icons {
    &.#{$icon} {
      mask-image: url("~@/assets/images/#{$icon}.svg");
    }
  } 
}
</style>
