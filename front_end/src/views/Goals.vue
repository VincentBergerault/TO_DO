<template>
  <div class="hello">
    <h1>Goals</h1>
    <v-btn @click="AddGoal()">Add Goal</v-btn>
  </div>
</template>

<script>
import axios from "@/axios.js";

export default {
  name: "GoalsComponant",
  components: {},
  data() {
    return {};
  },
  created() {
    // Check if user is logged in
    // and set isLoggedIn accordingly
  },
  methods: {
    async AddGoal() {
      // Perform logout logic here
      await axios.get("/test");
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
