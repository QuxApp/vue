<template>
  <Nav></Nav>
  <router-view></router-view>
</template>

<script>
  import Nav from "./components/Nav.vue"
  import SocketIO from "./services/socketio.service.js"

  export default {
    created() {
      SocketIO.connect();
    },
    beforeUnmount() {
      SocketIO.disconnect();
    },
    components: {
      'Nav': Nav,
    }
  }
</script>


<style>
  @font-face {
    font-family: 'Leon';
    src: url('./leon.otf');
  }

  :root {
    --blurple: #5865F2;
    --dark: #36393F;
    --darker: #2F3136;
    --darkest: #202225;
    --green-light: #2ECC71;
    --green-dark: #1F8B4C;
    --blue-light: #1A73E8;
    --blue-dark: #185ABC;
    --purple-light: #9B59B6;
    --purple-dark: #71368A;
    --pink-light: #E91E63;
    --pink-dark: #AD1457;
    --gold-light: #F1C40F;
    --gold-dark: #C27C0E;
    --orange: #F57C00;
    --amber: #FFA000;
    --yellow: #FFCA28;
    --red-light: #E74C3C;
    --red-dark: #992D22;
  }

  * {
    display: flex;
    color: white;
    font-family: 'Leon';
    font-size: 1vw;
    transition: 0.25s;
  }

  *::selection {
    background: var(--amber);
    color: white;
  }

  style {
    display: none;
  }

  script {
    display: none;
  }

  title {
    display: none;
  }

  meta {
    display: none;
  }
  
  body {
    width: 100%;
    margin: 0;
    padding: 0;
    height: 100vh;
    font-size: 1vw;
    background: var(--darkest);
    color: white;
  }

  #app {
    
    width: 100%;
    height: 100%;
  }

  .faded {
    opacity: 0;
    background: var(--darker);
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  li {
    margin: 0;
    padding: 0;
  }

  i {
    width: 1vw;
  }

  i svg {
    height: 100%;
  }

  a {
    font-size: inherit;
    font-weight: 400;
    text-decoration: none;
    color: var(--blue-light);
  }

  a:hover {
    color: var(--green-light);
  }

  p a {
    display: inline-block;
  }

  h1, h2, h3 {
    margin: 0;
    font-weight: 400;
    transition: 0.25s;
  }

  h1 {
    font-size: 4vw;
  }

  h2 {
    font-size: 3vw;
  }
  
  h3 {
    font-size: 2vw;
  }

  p {
    font-size: 1.25vw;
    display: block;
    margin: 0 0 1vw 0;
    transition: 0.25s;
  }

  .page {
    padding: 5vw;
    box-sizing: border-box;
    width: 100%;
    max-width: calc(100% - 5vw);
    flex-direction: column;
    background: var(--dark);
    overflow-y: scroll;
    align-items: flex-start;
  }  

  .desc {
    width: 30vw;
  }
</style>