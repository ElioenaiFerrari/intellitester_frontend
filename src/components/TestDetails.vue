<template>
  <v-col cols="12">
    <v-expansion-panels v-if="tests.length">
      <v-expansion-panel v-for="test in tests" :key="test._id">
        <v-expansion-panel-header>
          <h2 class="text-body-1">
            Nó esperado: <b>{{ test.expected_node }}</b>
          </h2>
          <v-spacer />
          <h2
            v-show="!test.right && test.answers.length"
            class="text-body-1 accent--text font-weight-bold"
          >
            QUEBRADO
          </h2>
          <h2
            v-show="test.right && test.answers.length"
            class="text-body-1 success--text font-weight-bold"
          >
            OK
          </h2>
          <h2
            v-show="!test.answers.length"
            class="text-body-1 warning--text font-weight-bold"
          >
            VAZIO
          </h2>

          <v-progress-circular
            v-show="update_loading"
            indeterminate
            :size="30"
            color="accent"
          />
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list>
            <v-list-item
              v-for="answer in test.answers"
              :key="answer"
              class="my-5"
            >
              <h2 class="text-body-1">
                Pergunta:
                <b>{{ answer.ask }}</b> <br />
                Nó recebido:
                <b>{{ answer.node }}</b>
              </h2>

              <v-divider :color="answer.ok ? 'success' : 'red'" />

              <v-icon size="30" v-show="!answer.ok" color="accent">
                mdi-close
              </v-icon>

              <v-icon size="30" v-show="answer.ok" color="success">
                mdi-check
              </v-icon>
            </v-list-item>
            <EditTestAsksModal @update="update_test($event)" :test="test" />
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-col v-if="!tests.length" align="center" justify="center">
      <v-img
        contain
        max-width="400"
        :src="require('../assets/images/empty.png')"
      />
      <h2 class="text-title-2 accent--text">Nada por aqui...</h2>
    </v-col>
  </v-col>
</template>

<script>
import EditTestAsksModal from "./EditTestAsksModal";

export default {
  props: ["tests"],

  components: {
    EditTestAsksModal,
  },

  data() {
    return { update_loading: false };
  },

  methods: {
    update_test({ test, asks }) {
      this.update_loading = true;

      this.$store.dispatch("tests/update", {
        bot_id: this.$route.params.bot_id,
        test_id: test._id,
        asks: asks.length ? asks.split(", ") : [],
      });
    },
  },
};
</script>

<style>
</style>