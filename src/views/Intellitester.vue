<template>
  <v-col cols="12">
    <h1>{{ current_user.name }}</h1>
  </v-col>
</template>

<script>
export default {
  computed: {
    current_user() {
      return this.$store.getters["user/current_user"];
    },
  },
};
</script>

<style></style>
