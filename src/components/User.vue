<template>
  <div class="card">
    <div class="top" :style="banner">
      <span id="user">
        <slot></slot>
      </span>
      <span id="id">
        <slot name="id"></slot>
      </span>
    </div>
    <div class="bottom">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      banner: Object,
    }
  }
</script>

<style scoped>
  .card {
    box-sizing: border-box;
    padding: 0;
    width: 20vw;
    height: 30vw;
    background: var(--darker);
    border-radius: 0.5vw;
    flex-direction: column;
    overflow: hidden;
  }

  .top {
    flex-direction: column;
    padding: 2vw;
  }

  .bottom {
    
  }

  #user {
    font-size: 1.5vw;
  }

  #id {
    color: #ffffffbf;
  }
</style>