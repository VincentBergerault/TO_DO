<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-card>
      <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
        <v-tab :value="1">Goals</v-tab>
        <v-tab :value="2">TO DO</v-tab>
        <v-tab :value="3">TO BUY</v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item :value="1">
          <Goals />
        </v-window-item>
        <v-window-item :value="2">
          <TODO />
        </v-window-item>
        <v-window-item :value="3">
          <TOBUY />
        </v-window-item>
      </v-window>
    </v-card>
  </div>
</template>

<script>
import Goals from "./Goals.vue";
import TODO from "./TODO.vue";
import TOBUY from "./TOBUY.vue";

export default {
  name: "HelloWorld",
  components: { Goals, TODO, TOBUY },
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
