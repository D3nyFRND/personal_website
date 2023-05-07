<template>
    <section>
        <div>
          <h1>{{ greet }}</h1>
          <p>{{ subGreet }}</p>
        </div>
  </section>
</template>

<script>
    export default{
        data(){
            return{
                greet: 'Cześć',
                subGreet: 'Poznajmy się',
                heroPhoto: `'background: white;'`
            }
        }
    }
</script>

<style scoped>
    section{
        min-height: 100svh;
        display: flex;
    }
    div{
        flex: 1;
        background-color: brown;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        font-family: 'Oswald';
        background-image: url(../../assets/about/hero.jpg);
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
    }
    div>*{
        margin: 0;
        color: var(--background);
        text-shadow: 0px 0px 1rem var(--text);
    }
    h1{
        font-size: 15rem;
    }
    p{
        font-size: 8rem;
    }
</style>