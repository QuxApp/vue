<template>
  <div class="page">
    <h1>About</h1>
    <p class="desc">
      Qux is a programmer, chess player, and designer. He builds JavaScript packages like <a href="https://npmjs.com/package/quxapp" target="_blank">QuxApp</a> in his free time. Most of his code is written in JavaScript, Python, C# or Dart.
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