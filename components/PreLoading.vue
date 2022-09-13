<template>
  <v-container v-if="loading" class="loading-page" fluid>
    <v-progress-circular
      :size="80"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </v-container>
</template>
<script>
  export default {
    name:'PreLoading',
    data: () => ({
      loading: false,
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      },
    },
  }
</script>
<style scoped>
  .loading-page {
    position: fixed;
    height: 100%;
    background: #fff;
    top: 0;
    right: 0;
    z-index: 1000;
    text-align: center;
    font-size: 3rem;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
