<template>
  <div class="page">
    <h1>Settings</h1>
    <p>
      Welcome to my Vue app.
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loaded: false,
      }
    },
    methods: {
      load() {
        setTimeout(() => {
          this.$data.loaded = true
        }, 1000)
      }
    },
    mounted() {
      this.load()
    }
  }
</script>

<style>
  
</style>