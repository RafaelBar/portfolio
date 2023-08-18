<template>
  <div class="navbar">
    <span class="lobster font-size-40 text-white clickable-text">R</span>
    <div class="flex-center">
      <span :class="{ open: isMenuOpen }" class="router-wrapper"
        ><router-link class="poppins text-white font-size-19 padding-20" to="/"
          >HOME</router-link
        >

        <router-link class="poppins text-white font-size-19 padding-20" to="/cv"
          >CV CHALLENGE</router-link
        >
      </span>
      <span class="text-white poppins font-size-30"
        >New website coming soon!
      </span>
      <!-- <burger @toggleMenu="isMenuOpen = !isMenuOpen"></burger> -->
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Burger from "@/components/Burger";

@Options({
  components: {
    Burger,
  },
})
export default class Navbar extends Vue {
  isMenuOpen = false;
}
</script>

<style lang="scss" scoped>
$nav-size: 88%;

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: $nav-size;
  height: 50px;
  position: fixed;
  top: 100px;
  z-index: 110;

  .router-wrapper {
    width: 0;
    overflow: hidden;
    transition: width 1s;

    &.open {
      width: 300px;
    }

    .router-link-active {
      color: $app-primary;
    }

    .poppins {
      white-space: nowrap;
    }
  }
}
</style>
