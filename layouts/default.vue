<template>
  <div class="container">
    <main role="main">
      <nuxt/>
    </main>
  </div>
</template>

<script>

  export default {
    components: {
    }
  }
</script>

<style>
:root {
    --main-color: #212121;
    --secondary-color: #F3F3F3;
    --third-color: #B29702;
    --font-color: var(--main-color);
    --secondary-font-color: #F3E7B0;
    --banner-background: var(--secondary-color);
    --button-background: #F3E7B0;
    --button-cta-background: var(--main-color);
    --font-serif: "lmroman-10", serif;
    --font-sans: "poppins", serif;
}

@font-face {
    font-family: 'lmroman-10';
    src: url('~assets/fonts/lmroman10-regular.otf');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'poppins';
    src: url('~assets/fonts/Poppins-Regular.ttf');
    font-weight: normal;
    font-style: normal;
}

html:focus-within {
    scroll-behavior: smooth;
}

@media screen and (prefers-reduced-motion: reduce) {
    html:focus-within {
        scroll-behavior: auto;
    }
}

*:focus {
    outline: var(--main-color) solid .5px;
}

body {
    font-family: var(--font-sans);
    color: var(--font-color);
    padding: 0;
    font-size: 18px;
    font-size: 1rem;
    line-height: 1.75;
}

a {
    text-decoration: none;
}

a:hover,
a:focus {
    text-decoration: underline;
}

.container {
    max-width: 1440px;
    margin: 0 auto;
}

.header {
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    padding: 40px 20px;
    margin-bottom: 40px;
    background: #FFFFFF;
    z-index: 1;
}

.header .logo {
    margin-right: 40px;
    min-width: 250px;
    transition: transform ease-out .25s;
}

.header .logo:hover {
    transform: scale(1.025);
    transition: transform ease-out .25s;
}

@media (max-width: 640px) {
    .header .logo {
        max-width: 225px;
    }
}

.navigation__list {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin-left: 0;
    padding: 0;
    list-style: none;
}

.navigation__listitem {
    padding: 0 20px;
}

.navigation__listlink {
    font-family: var(--font-serif);
    text-decoration: none;
    color: var(--font-color);
    letter-spacing: .5px;
    font-size: 1.15em;
}

.navigation__listlink:hover {
    text-decoration: underline;
}

@media (max-width: 992px) {
    .header {
        flex-direction: column;
        padding-bottom: 0;
        margin-bottom: 0;
    }

    .navigation__list {
        justify-content: flex-start;
        padding: 20px 0;
        margin: 0;
    }

    .navigation__listitem {
        padding: 0;
        padding-right: 40px;
    }
}
</style>
