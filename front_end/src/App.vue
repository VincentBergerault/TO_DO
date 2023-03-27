<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/goals">Goals</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  created() {
    // Check if user is logged in
    // and set isLoggedIn accordingly
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
  background-color: rgba(0, 127, 79, 1); /* Dark green */
  background-image: linear-gradient(
    to bottom,
    rgba(0, 127, 79, 1),
    rgb(181, 255, 203)
  ); /* Fade to light green */
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background: #007f4f;
  overflow: hidden;
}
</style>
