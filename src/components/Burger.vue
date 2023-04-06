<template>
  <div class="burger" @click="onToggleMenuChanged()">
    <input class="burger__cheeckbox" type="checkbox" />
    <div>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Emit } from "vue-property-decorator";

export default class Burger extends Vue {
  @Emit("toggleMenu")
  onToggleMenuChanged(): boolean {
    return true;
  }
}
</script>

<style lang="scss" scoped>
.burger {
  position: relative;
  width: 50px;
  height: 50px;
  cursor: pointer;

  .burger__cheeckbox {
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 2;
    -webkit-touch-callout: none;
    position: absolute;
    opacity: 0;
  }

  div {
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 30px;
    height: 12px;
  }

  span {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background-color: $app-white;
    border-radius: 1px;
    transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

    &:first-of-type {
      top: 0;
    }

    &:last-of-type {
      bottom: 0;
    }
  }

  &:hover {
    .burger__cheeckbox + div {
      span {
        &:first-of-type {
          background-color: $app-primary;
        }

        &:last-of-type {
          background-color: $app-primary;
        }
      }
    }
  }

  &.active,
  .burger__cheeckbox:checked + div {
    span {
      &:first-of-type {
        transform: rotate(45deg);
        top: 5px;
      }

      &:last-of-type {
        transform: rotate(-45deg);
        bottom: 5px;
      }
    }
  }

  &.active:hover span:first-of-type,
  &.active:hover span:last-of-type,
  &:hover .burger__cheeckbox:checked + div span:first-of-type,
  &:hover .burger__cheeckbox:checked + div span:last-of-type {
    //TODO CLEAR CODE
    width: 30px;
  }

  &:hover {
    @media (min-width: 1024px) {
      span:first-of-type {
        width: 26px;
      }

      span:last-of-type {
        width: 20px;
      }
    }
  }
}
</style>
