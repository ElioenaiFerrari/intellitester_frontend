<template>
  <v-container fluid>
    <TestDetails :tests="tests" />
  </v-container>
</template>

<script>
import TestDetails from "../components/TestDetails";
export default {
  components: {
    TestDetails,
  },

  computed: {
    tests() {
      return this.$store.getters["tests/tests"];
    },
  },

  beforeCreate() {
    return this.$store.dispatch("tests/index", {
      bot_id: this.$route.params.bot_id,
    });
  },
};
</script>

<style>
</style>