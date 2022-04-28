<template>
  <div class="page">
    <h1>Dashboard</h1>
    <p>
      Welcome to my Vue app.
    </p>
    <User :banner="user.color" v-if="user.name">
      {{ user.tag }}
      <template #id>
        {{ user.id }}
      </template>
    </User>
  </div>
</template>

<script>
  import User from "../components/User.vue"
  
  export default {
    data() {
      return {
        loaded: false,
        user: {
          name: '',
          tag: '',
          avatar: '', 
          id: '',
          banner: '',
          color: {
            backgroundColor: '',
          },
        },
      }
    },
    methods: {
      load() {
        setTimeout(() => {
          this.$data.loaded = true
        }, 1000)
      },
      receive() {
        const fragment = new URLSearchParams(window.location.hash.slice(1));
        const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

        const local = window.localStorage

        if (accessToken) {
          local.setItem('t', tokenType)
          local.setItem('a', accessToken)
        } else {
          if (!local.getItem('a')) return false
        }

        let guild = {
          id: null,
        }
    
        fetch('https://discord.com/api/users/@me', {
          headers: {
            authorization: `${local.getItem('t')} ${local.getItem('a')}`,
          },
        })
          .then(result => result.json())
          .then(response => {
            const { username, discriminator, avatar, id, banner_color } = response;
            console.log(response)
            const data = this.$data
            data.user.name = username
            data.user.tag =`${username}#${discriminator}`
            data.user.avatar = avatar
            data.user.id = id
            data.user.banner = banner_color
            data.user.color.backgroundColor = banner_color
          })
          .catch(console.error);
        fetch('https://discord.com/api/users/@me/guilds', {
          headers: {
            authorization: `${local.getItem('t')} ${local.getItem('a')}`,
          },
        })
          .then(result => result.json())
          .then(response => {
            guild.id = response[0].id
            fetch(`https://discord.com/api/users/@me/guilds/${guild.id}/member`, {
              headers: {
                authorization: `${local.getItem('t')} ${local.getItem('a')}`,
              },
            })
              .then(result => result.json())
              .then(response => {
                console.log(response)
              })
              .catch(console.error);
          })
          .catch(console.error);
      }
    },
    mounted() {
      this.receive()
      this.load()
    },
    components: {
      'User': User,
    }
  }
</script>

<style scoped>
  #username {
    font-size: 2vw;
  }
</style>