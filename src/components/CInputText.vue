<template>
  <div class="input-text">
    <div class="input-container">
      <input
        :placeholder="placeholder"
        :type="type"
        :value="value"
        :class="{ 'input-error': haveError, flat: flat }"
        @input="$emit('input', $event.target.value)"
      />
      <span class="error-message" v-if="haveError">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script>
// import CIcon from "./CIcon.vue";
export default {
  name: 'c-input-text',
  // components: { CIcon },
  props: {
    value: {
      type: String,
    },
    label: {
      type: String,
    },
    icon: {
      type: String,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      required: false,
    },
    errorMessage: {
      type: String,
    },
  },
  computed: {
    haveError() {
      return this.errorMessage;
    },
  },
};
</script>

<style lang="scss" scoped>
.input-text {
  margin: 1rem 0;
  display: flex;
  .input-container {
    width: 100%;
    input {
      width: calc(100% - 2rem);
      background-color: white !important;
      margin: 0;
      padding: 1rem;
      border: 2px solid rgb(161, 161, 161);
      &:focus {
        border-color: #696969;
      }
      &:not(.input-error):hover {
        border-color: #696969;
      }
      &:not(.flat) {
        border-radius: 0.4rem;
      }
      &.flat {
        padding-left: 0;
        border: none !important;
        border-bottom: 0.0625rem solid #a2a2a2 !important;
        &:focus {
          border-bottom: 0.0625rem solid #696969 !important;
        }
        &:not(.input-error):hover {
          border-bottom: 0.0625rem solid #696969 !important;
        }
      }

      &.input-error {
        border-color: rgba(241, 47, 47, 0.801) !important;
      }
    }
    .error-message {
      color: red;
      opacity: 0.5;
      font-size: 0.7rem;
    }
  }
}
</style>