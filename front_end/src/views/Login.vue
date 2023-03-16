<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input id="email" v-model="email" type="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" v-model="password" type="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      // Use Axios or another HTTP library to send a POST request to the login API endpoint
      const response = await axios.post("/api/login", {
        email: this.email,
        password: this.password,
      });

      // If the login is successful, redirect the user to the dashboard page
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        this.$router.push("/dashboard");
      } else {
        // Display an error message to the user
        alert("Login failed. Please check your email and password.");
      }
    },
  },
};
</script>
