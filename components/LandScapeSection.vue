<template>
  <v-sheet class="land-scape-section">
    <slot name="content"></slot>
  </v-sheet>
</template>
<script>
export default {
  name:'LandScapeSection'
}
</script>
<style scoped>
.land-scape-section{
  background-color:#1b98f5;
  background-image: url('./../assets/images/coinKadeTextBg.svg');
  background-position: left;
  background-size: contain;
  background-attachment: fixed;
}
</style>
