<template>
  <div id="app">
    <header-with-searcher></header-with-searcher>
    <body-content></body-content>
  </div>
</template>

<script>
import HeaderWithSearcher from './components/HeaderWithSearcher';
import BodyContent from './components/BodyContent';

export default {
  name: 'App',
  components: {
    HeaderWithSearcher,
    BodyContent,
  },
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  body {
    margin: 0;
    padding: 0;
  }
</style>
