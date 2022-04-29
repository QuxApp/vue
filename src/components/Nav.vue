<template>
  <nav id="nav" :class="[{ collapsed: closed }, { hidden: !loaded }]">
    <div class="logo-content">
      <div class="logo">
        <img src="../assets/quxapp light.svg" :class="{ faded: closed }">
        <span class="logo-name" :class="{ faded: closed }">Qux</span>
      </div>
      <span id="toggle" @click="closed = !closed">
        <div id="bar-top" :class="{ open: !closed }"></div>
        <div id="bar-mid" :class="{ open: !closed }"></div>
        <div id="bar-bot" :class="{ open: !closed }"></div>
      </span>
    </div>
    <ul id="menu">
      <li v-for="(item, index) in menu">
        <router-link :to="{ name: item.name }" @click="n = index; indicate()">
          <span class="material-icons-round" :i="item.icon" :class="{ active: n == index }"></span>
          <span class="label" :class="{ faded: closed }">{{ item.name }}</span>
        </router-link>
      </li>
      <span id="spot" :style="style"></span>
    </ul>
    <ul id="social">
      <li v-for="(item, index) in social">
        <a :href="item.link">
          <img :src="`src/assets/${item.name}.svg`">
          <span class="label" :class="{ faded: closed }">{{ item.name }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  import { defineProps } from "vue"
  let Main = {
    name: 'nav',
    data() {
      return {
        menu: [
          {
            name: 'Home',
            icon: 'home',
          },
          {
            name: 'Dashboard',
            icon: 'dashboard',
          },
          {
            name: 'About',
            icon: 'face',
          },
          {
            name: 'Settings',
            icon: 'settings',
          },
        ],
        social: [
          {
            name: 'github',
            link: 'https://github.com/quxapp',
          },
          {
            name: 'discord',
            link: 'https://discord.com/api/oauth2/authorize?client_id=964383562155577384&redirect_uri=https%3A%2F%2Fvue.quxapp.repl.co%2Fdashboard&response_type=token&scope=identify%20guilds%20guilds.members.read',
          },
        ],
        closed: true,
        n: 0,
        loaded: false,
        style: {
          top: `0.5vw`
        }
      }
    },
    methods: {
      load() {
        const view = window.location.pathname.slice(1)
        const menu = this.$data.menu
        setTimeout(() => {
          console.log('Loaded Navigation')
          this.$data.loaded = true
        }, 1000)
        for (let i = 0; i < menu.length; i++) {
          if (view === menu[i].name.toLowerCase()) {
            this.$data.n = i
            this.indicate()
          }
        }
      },
      indicate() {
        this.$data.style.top = `${0.5 + this.$data.n * 5}vw`
      }
    },
    mounted() {
      this.load()
    }
  }
  export default Main
</script>

<style scoped>
  .hidden {
    opacity: 0;
  }
  
  nav {
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    width: 20vw;
    background: var(--darkest);
    transition: 0.25s;
    overflow: hidden;
  }

  #social {
    margin: auto auto 0 0;
  }

  #social a img {
    width: 3vw;
    margin: 0 1vw;
  }

  #spot {
    left: 0.5vw;
    position: absolute;
    width: 4vw;
    height: 4vw;
    background: var(--blue-light);
    border-radius: 50%;
    transition: top 0.25s;
  }

  a {
    color: white;
    text-decoration: none;
  }

  .logo-content {
    height: 5vw;
    position: relative;
    width: 100%;
    justify-content: space-between;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .logo {
    margin: 0 0 0 0.5vw;
    display: flex;
    align-items: center;
  }

  .logo-name {
    font-size: 2vw;
    transition: 0.25s;
  }

  .logo img {
    width: 4vw;
    transition: 0.25s;
    margin: 0 1vw 0 0;
    border-radius: 50%;
  }

  ul {
    position: relative;
    width: 15vw;
    flex-direction: column;
  }

  li {
    width: 20vw;
    height: 5vw;
    display: flex;
    align-items: center;
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
/*     background: var(--darker); */
    border-radius: 0.5vw;
    transition: 0.5s;
  }

  .collapsed {
    width: 5vw;
  }

  .label {
    margin: 0 0 0 0.5vw;
    transition: opacity 0.25s;
    text-transform: capitalize;
  }

  #toggle {
    right: 0.5vw;
    margin: 0;
    position: absolute;
    background: var(--darkest);
    width: 4vw;
    height: 4vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
  }

  #bar-top, #bar-mid, #bar-bot {
    position: absolute;
    width: 1.5vw;
    height: 0.2vw;
    background: white;
    border-radius: 0.1vw;
  }

  #bar-top {
    top: 1.5vw;
  }

  #bar-top.open {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  #bar-mid.open {
    opacity: 0;
  }

  #bar-bot {
    bottom: 1.5vw;
  }

  #bar-bot.open {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  .material-icons-round {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4vw;
    height: 4vw;
    margin: 0 0.5vw;
    position: relative;
    font-size: 2vw;
    font-weight: 200;
    z-index: 1;
    border-radius: 50%;
    transition: 0.25s;
  }

  .material-icons-round:hover, #toggle:hover, logo img:hover {
    background: var(--darker);
  }

  .material-icons-round.active:hover {
    background: transparent;
  }

  .material-icons-round:after {
    content: attr(i);
  }
</style>