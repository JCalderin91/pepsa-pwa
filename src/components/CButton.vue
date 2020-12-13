<template>
  <router-link
    :to="to"
    tag="button"
    class="c-btn"
    :disabled="disabled"
    :class="[color, shadownText, roundedText]"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
    },
    shadown: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    to: {
      required: false,
    },
  },
  computed: {
    shadownText() {
      return this.shadown ? "shadown" : "";
    },
    roundedText() {
      return this.rounded ? "rounded" : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.c-btn {
  cursor: pointer;
  background-color: #fff;
  border: 1px solid rgba(192, 192, 192, 0.603);
  padding: 0.9rem 3rem;
  display: inline-block;
  border-radius: 0.3rem;
  color: #268ff8;
  font-weight: 600;
  margin: calc(var(--universal-margin) / 2);
  &.rounded {
    border-radius: 4rem !important;
  }
  &.primary {
    background-color: var(--primary);
    transition: all 0.2s ease-in-out;
    color: white;
    &:enabled:hover {
      background-color: rgb(6, 182, 0);
      border-color: #23a127;
      color: white;
    }
    &.shadown {
      background-color: transparent;
      border: 1px solid var(--primary);
      color: var(--primary);
      transition: all 0.2s ease-in-out;
      &:enabled:hover {
        background-color: #23a127;
        border-color: #23a127;
        color: white;
      }
    }
  }
  &.success {
    background-color: #28b62c;
    transition: all 0.2s ease-in-out;
    color: white;
    &:enabled:hover {
      background-color: rgb(6, 182, 0);
      border-color: #23a127;
      color: white;
    }
    &.shadown {
      background-color: transparent;
      border: 1px solid #28b62c;
      color: #28b62c;
      transition: all 0.2s ease-in-out;
      &:enabled:hover {
        background-color: #23a127;
        border-color: #23a127;
        color: white;
      }
    }
  }
  &.error {
    background-color: #ff4136;
    transition: all 0.2s ease-in-out;
    color: white;
    &:enabled:hover {
      background-color: #ff291d;
      border-color: #ff291d;
      color: white;
    }
    &.shadown {
      background-color: transparent;
      border: 1px solid #ff4136;
      color: #ff4136;
      transition: all 0.2s ease-in-out;
      &:enabled:hover {
        background-color: #ff291d;
        border-color: #ff291d;
        color: white;
      }
    }
  }
  &.warning {
    background-color: #ff851b;
    transition: all 0.2s ease-in-out;
    color: white;
    &:enabled:hover {
      background-color: #ff7702;
      border-color: #ff7702;
      color: white;
    }
    &.shadown {
      background-color: transparent;
      border: 1px solid #ff851b;
      color: #ff851b;
      transition: all 0.2s ease-in-out;
      &:enabled:hover {
        background-color: #ff7702;
        border-color: #ff7702;
        color: white;
      }
    }
  }
  &.info {
    background-color: #75caeb;
    transition: all 0.2s ease-in-out;
    color: white;
    &:enabled:hover {
      background-color: #5fc1e8;
      border-color: #5fc1e8;
      color: white;
    }
    &.shadown {
      background-color: transparent;
      border: 1px solid #75caeb;
      color: #75caeb;
      transition: all 0.2s ease-in-out;
      &:enabled:hover {
        background-color: #5fc1e8;
        border-color: #5fc1e8;
        color: white;
      }
    }
  }
}
</style>