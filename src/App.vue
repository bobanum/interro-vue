<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/nouveau">Nouveau</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap");
html {
  font-family: "Montserrat", sans-serif;
  --hue: 30;
  --sat: 100%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  display: flex;
  gap: 1em;
  justify-content: center;
  padding: 30px;
  background-color: hsl(var(--hue), var(--sat), 50%);

  a {
    font-weight: bold;
    color: inherit;
    text-decoration: none;

    &.router-link-exact-active {
      color: #fff;

    }
  }
}
</style>
