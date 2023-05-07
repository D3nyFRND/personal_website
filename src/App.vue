<template>
  <Header />
  <router-view/>
</template>


<script>
import Header from './components/header/Header.vue'
export default{
  components: {
    Header,
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Libre+Franklin&family=Oswald:wght@500&display=swap');
  *{
    font-family: 'Libre Franklin';
  }

  h1{
    font-size: var(--header1);
    font-family: 'Oswald';
    text-transform: uppercase;
  }

  p{
    font-size: var(--commonText_size);
  }

  body{
    background-color: var(--background);
    margin: 0;
    min-height: 150vh;
  }
  :root{
    --smallStuff: #3E92CC;
    --background: #f9f9f9;
    --text: #132A3E;
    --header1: 2rem;
    --commonText_size: 1.4rem,
  }
</style>
