<template>
  <div class="page">
    <h1>Home</h1>
    <p>
      Welcome to my Vue app.
    </p>
    <a id="login" :href="auth">Discord</a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        auth: `https://discord.com/api/oauth2/authorize?client_id=964383562155577384&redirect_uri=https%3A%2F%2Fvue.quxapp.repl.co%2Fdashboard&response_type=token&scope=identify%20guilds%20guilds.members.read`,
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

<style scoped>
  #login {
    color: white;
    padding: 0.75vw 1.5vw;
    border-radius: 0.25vw;
    background: var(--darker);
  }
  
  #login:hover {
    color: white;
    background: var(--blurple);
  }
</style>