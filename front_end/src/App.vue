<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/" exact active-class="router-link-active"
            >Home</router-link
          >
        </li>
        <li>
          <router-link to="/goals" exact active-class="router-link-active"
            >Goals</router-link
          >
        </li>
        <li class="log">
          <div v-if="isLoggedIn">
            <button class="nav-button" @click="logout()">Logout</button>
          </div>
          <div v-else>
            <router-link to="/login" class="login">Login</router-link>
          </div>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "@/axios.js";
export default {
  name: "App",
  data() {
    return {
      isLoggedIn: true,
    };
  },
  created() {
    // Check if user is logged in
    // and set isLoggedIn accordingly
  },
  methods: {
    async logout() {
      await axios.get("/logout");
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background: #1f1f1f;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background-color: rgba(0, 127, 79, 1); /* Dark green */
  background-image: linear-gradient(
    to bottom,
    rgba(0, 127, 79, 1),
    rgb(181, 255, 203)
  ); /* Fade to light green */
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f1f1f;
}

nav ul {
  display: flex;
  list-style: none;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #1f1f1f;
}

nav li {
  margin: 20px;
}

nav a {
  display: block;
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  border-radius: 20px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  color: #6a994e;
}

.router-link-active {
  color: #6a994e;
}

.log {
  position: fixed;
  right: 0%;
  margin-right: 20px;
}

.login {
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  border-radius: 20px;
}

.nav-button {
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  background-color: #1f1f1f;
  border: none;
  cursor: pointer;
}

.nav-button:hover {
  color: #6a994e;
}
</style>
