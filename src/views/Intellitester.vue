<template>
  <v-col cols="12">
    <h1>{{ bot[0].name }}</h1>
  </v-col>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("bot/index");
  },

  computed: {
    current_user() {
      return this.$store.getters["user/current_user"];
    },

    bots() {
      return this.$store.getters["bot/index"];
    },
  },
};
</script>

<style></style>
