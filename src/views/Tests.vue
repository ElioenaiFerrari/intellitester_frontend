<template>
  <v-container fluid>
    <v-expansion-panels>
      <v-expansion-panel v-for="test in tests" :key="test._id">
        <v-expansion-panel-header>
          <h2 class="text-body-1">
            Nó esperado: <b>{{ test.expected_node }}</b>
          </h2>
          <v-spacer />
          <h2
            v-show="!test.right"
            class="text-body-1 accent--text font-weight-bold"
          >
            QUEBRADO
          </h2>
          <h2
            v-show="test.right"
            class="text-body-1 success--text font-weight-bold"
          >
            OK
          </h2>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list>
            <v-list-item v-for="answer in test.answers" :key="answer">
              <h2 class="text-body-1">
                {{ answer.ask }}: <b class="ml-10">{{ answer.node }}</b>
              </h2>

              <v-divider :color="answer.ok ? 'success' : 'red'" />

              <v-icon size="30" v-show="!answer.ok" color="accent">
                mdi-close
              </v-icon>

              <v-icon size="30" v-show="answer.ok" color="success">
                mdi-check
              </v-icon>
            </v-list-item>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
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