<template>
  <div class="home">
    <img src="../assets/Capture.png" />
    <!--
    <h1>Home</h1>
    <Hero></Hero>
    <v-divider />
    <AboutMe></AboutMe>
    <v-divider />
    <Skills></Skills>
    <v-divider />
    <Experience></Experience>
    <v-divider />
    <School></School>
    <v-divider />
    <Contact></Contact>
    -->
  </div>
</template>

<script>
/*
import Hero from "@/components/Hero.vue";
import AboutMe from "@/components/AboutMe.vue";
import Skills from "@/components/Skills.vue";
import Experience from "@/components/Experience.vue";
import School from "@/components/School.vue";
import Contact from "@/components/Contact.vue";
*/

export default {
  name: "HelloWorld",
  components: {
    /*Hero, AboutMe, Skills, Experience, School, Contact */
  },
  data() {
    return {
      tab: null,
    };
  },
  methods() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
}
</style>
