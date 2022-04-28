<template>
  <div class="page">
    <h1>Lost?</h1>
    <p>
      Navigate back to the <router-link :to="{ name: 'Home' }">Home</router-link> page!
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