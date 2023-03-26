<template>
  <div class="hello">
    <h1>Goals</h1>
    <v-btn click="AddGoal()"> Add Goal</v-btn>
    <GoalCard />
  </div>
</template>

<script>
import axios from "@/axios.js";

import GoalCard from "../components/GoalCard.vue";
export default {
  name: "GoalsComponant",
  components: { GoalCard },
  data() {
    return {};
  },
  created() {
    // Check if user is logged in
    // and set isLoggedIn accordingly
  },
  methods: {
    async login() {
      // Use Axios or another HTTP library to send a POST request to the login API endpoint
      const response = await axios.post("/goal", {
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
    async AddGoal() {
      // Perform logout logic here
      const response = await axios.post("/login", {
        email: this.email,
        password: this.password,
      });
      console.log(response);
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
