<template>
  <v-container fluid>
    <v-list>
      <v-list-item v-for="bot in bots" :key="bot._id">
        <v-list-item-content>
          <v-list-item-title>{{ bot.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.dispatch("bot/index");
  },

  computed: {
    current_user() {
      return this.$store.getters["user/current_user"];
    },

    bots() {
      return this.$store.getters["bot/bots"];
    },
  },
};
</script>

<style></style>
