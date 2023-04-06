<template>
  <div>
    <div class="strip top"></div>
    <div class="strip bottom"></div>
    <div class="strip right"></div>
    <div class="strip left"></div>
    <div class="board">
      <navbar></navbar>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "Portfolio",
  components: { Navbar },
};
</script>

<style lang="scss">
$container-size: 1460px;
$strip-size: 20px;

.board {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: linear-gradient(0deg, rgba($app-dark, 0.8), rgba($app-dark, 0.8)),
    url("../assets/dark.jpg");

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: $container-size;
    min-height: 100vh;
    position: relative;
    z-index: 100;

    p {
      padding-left: 30px;
    }
  }
}

.strip {
  background-color: $app-white;
  position: fixed;
  z-index: 800;

  &.top,
  &.bottom {
    height: $strip-size;
    width: 100vw;
  }

  &.left,
  &.right {
    height: 100vh;
    width: $strip-size;
  }

  &.top {
    top: 0;
  }

  &.bottom {
    bottom: 0;
  }

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
}
</style>
