<template>
  <portfolio></portfolio>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Portfolio from "@/layout/Portfolio.vue";

@Options({
  components: { Portfolio },
})
export default class App extends Vue {}
</script>

<style lang="scss" scope></style>
