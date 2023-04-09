<template>
  <div class="login-container">
    <h1 class="login-title">Login</h1>
    <form class="login-form" @submit.prevent="login">
      <label for="email" class="form-label">Email:</label>
      <input
        id="email"
        v-model="email"
        type="email"
        class="form-input"
        required
      />
      <label for="password" class="form-label">Password:</label>
      <input
        id="password"
        v-model="password"
        type="password"
        class="form-input"
        required
      />
      <button type="submit" class="login-button">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "@/axios.js";
import bcrypt from "bcryptjs";

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

      const response = await axios.post("/login", {
        email: this.email,
        password: await bcrypt.hash(this.password, 10),
      });

      // If the login is successful, redirect the user to the dashboard page
      if (response.data.success) {
        const authToken = response.data.token;
        this.$store.commit("login", authToken);
      } else {
        // Display an error message to the user
        alert("Login failed. Please check your email and password.");
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #9acd32;
  border-radius: 10px;
  padding: 20px;
  width: 400px;
  margin: auto;
}

.login-title {
  color: #ffffff;
  font-size: 36px;
  margin-bottom: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-label {
  color: #ffffff;
  padding: 8px;
  font-size: 18px;
}

.form-input {
  padding: 8px;
  border-radius: 5px;
  border: none;
}

.login-button {
  background-color: #006400;
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
}
</style>
