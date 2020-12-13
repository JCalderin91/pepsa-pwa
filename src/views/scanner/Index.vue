<template>
  <div class="scanner container">
    <h3>Escanea el código QR</h3>
    <br />
    <div class="scaner-box">
      <div class="border-top-left"></div>
      <div class="border-top-right"></div>
      <div class="border-bottom-left"></div>
      <div class="border-bottom-right"></div>
      <qrcode-stream
        :track="dots"
        @decode="onDecode"
        @init="onInit"
      >
        <span v-if="loading">Cargando</span>
      </qrcode-stream>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      result: "",
      error: "",
      loading: false,
    };
  },

  methods: {
    dots(location, ctx) {
      const color = "#007bff";
      const {
        topLeftFinderPattern,
        topRightFinderPattern,
        bottomLeftFinderPattern,
      } = location;

      const pointArray = [
        topLeftFinderPattern,
        topRightFinderPattern,
        bottomLeftFinderPattern,
      ];

      ctx.fillStyle = color;

      pointArray.forEach(({ x, y }) => {
        ctx.fillRect(x - 5, y - 5, 10, 10);
      });
    },

    onDecode(result) {
      this.result = result;
      this.$router.push({name:'dashboard'})
    },  
    async onInit(promise) {
      this.loading = true;
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permisson";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        }
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.scanner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}
.scaner-box {
  height: 300px;
  max-height: 100%;
  width: 300px;
  max-width: 100%;
  background-color: #033319;
  position: relative;
  margin: 0 auto;
  div[class^="border-"] {
    position: absolute;
    height: 40px;
    width: 40px;
    border-color: #fff;
    z-index: 10;
  }
  .border-top-left {
    top: 0;
    left: 0;
    border-top: 2px solid;
    border-left: 2px solid;
  }
  .border-top-right {
    top: 0;
    right: 0;
    border-top: 2px solid;
    border-right: 2px solid;
  }
  .border-bottom-left {
    bottom: 0;
    left: 0;
    border-bottom: 2px solid;
    border-left: 2px solid;
  }
  .border-bottom-right {
    bottom: 0;
    right: 0;
    border-bottom: 2px solid;
    border-right: 2px solid;
  }
  &::before {
    content: "";
    position: absolute;
    height: 5px;
    background-color: #0ed46b;
    left: -0.75rem;
    width: calc(100% + 1.5rem);
    box-shadow: 0 0 10px 5px #03c85f77, 0 0 25px 10px #03c85f38,
      0 0 35px 15px #03c85f09;
    animation: scan 1.8s infinite alternate ease-in-out;
  }
  @keyframes scan {
    0% {
      top: 0rem;
    }
    100% {
      top: 100%;
    }
  }
}
</style>