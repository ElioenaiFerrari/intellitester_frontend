<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        <v-text-field
          v-model="expected_node"
          outlined
          label="Nó esperado"
          color="accent"
        />
      </v-col>
      <v-col cols="4">
        <v-progress-circular
          indeterminate
          :size="30"
          color="accent"
          v-show="store_loading"
        />
        <v-btn
          v-show="!store_loading"
          @click="addNode()"
          color="accent"
          outlined
          x-large
        >
          ADICIONAR
        </v-btn>
      </v-col>
    </v-row>
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

  methods: {
    addNode() {
      this.store_loading = true;

      this.$store.dispatch("tests/store", {
        bot_id: this.$route.params.bot_id,
        expected_node: this.expected_node,
      });

      this.expected_node = "";
    },
  },

  data() {
    return {
      expected_node: "",
      store_loading: false,
    };
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