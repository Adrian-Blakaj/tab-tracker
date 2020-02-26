<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <span class="home" @click="navigateTo({ name: 'songs' })"
        >TabTracker</span
      >
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat dark router @click="navigateTo({ name: 'songs' })"
        >Browse</v-btn
      >
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark router to="login"
        >Login</v-btn
      >

      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark router to="register"
        >Sign Up</v-btn
      >

      <v-btn v-if="$store.state.isUserLoggedIn" flat dark router @click="logout"
        >Log Out</v-btn
      >
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "songs"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  cursor: pointer;
}
</style>
