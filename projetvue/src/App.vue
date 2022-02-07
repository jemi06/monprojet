<template>
  <div id="nav">
    <button class="btn btn-primary"><router-link to="/">Home</router-link></button> |
    <button class="btn btn-warning"><router-link to="/about">About</router-link></button> |
   <button class="btn btn-secondary"> <router-link to="/contact">Contact</router-link></button>
  </div>
  <router-view />
  <div class="footer">
    pied de pied
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #502c2c;
}

#nav {
  padding: 30px;
  background-color: #000000;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #90d4ac;
}

.footer{
  height: 30px;
  color: #ffffff;
  background-color: rgb(0, 0, 0);
}
</style>
