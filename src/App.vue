<template lang="pug">
  #app
    .header
    Index
    .main
      router-view
</template>

<script>
import Index from './components/index.vue'

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  line-height: 1;
}

#app {
  margin: 0 auto;
  width: 1024px;
  background: #FFFFFF;
  font-family: 'Roboto', sans-serif;
}

.header {
  margin: 0 auto;
  width: 456px;
  border: 3px solid #0275D8;
}

.main {
  margin: 0 auto;
  width: 456px;
}
</style>
