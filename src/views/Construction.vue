<template>
  <home :isUnderConstraction="true"></home>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Home from "./Home.vue";

@Options({
  components: { Home },
})
export default class Construction extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  .top {
    height: 100vh;
    position: relative;
  }

  section:not(.top) {
    padding: 0 10vw;
    height: 100vh;
  }

  .word {
    position: relative;
    margin-right: 8px;

    .cursor {
      right: 0;
      background-color: $app-white;
      position: absolute;
      top: 0;
      width: 5px;
      bottom: 10px;
    }
  }

  .animate-flicker {
    opacity: 1;
    animation: flickerAnimation 1s infinite;
  }

  .profile-picture {
    border-radius: 50%;
    overflow: hidden;
    width: 390px;
    height: 390px;

    img {
      width: 560px;
      height: 420px;
      margin-left: -164px;
    }
  }

  p {
    padding-left: 30px;
  }

  .mouse {
    width: 50px;
    height: 90px;
    border: 3px solid $app-primary;
    border-radius: 60px;
    position: absolute;
    bottom: 70px;

    &::before {
      content: "";
      width: 12px;
      height: 12px;
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      background-color: $app-primary;
      border-radius: 50%;
      opacity: 0;
      animation: wheel 2s infinite;
      -webkit-animation: wheel 2s infinite;
    }
  }

  @keyframes wheel {
    from {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    to {
      opacity: 0;
      top: 60px;
    }
  }

  @-webkit-keyframes wheel {
    to {
      opacity: 1;
      top: 60px;
    }
  }

  @keyframes flickerAnimation {
    /* flame pulses */
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
