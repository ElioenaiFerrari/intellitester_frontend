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
            v-show="$store.getters['tests/update_loading']"
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

              <v-btn
                text
                @click="go_to_node(test.bot.dialog_url, answer.node)"
                color="accent"
              >
                VER NÓ
              </v-btn>
            </v-list-item>
            <v-row align="center" justify="flex-start" class="mt-10">
              <v-btn
                :disabled="!test.bot.team.includes(current_user._id)"
                @click="destroy(test)"
                color="accent"
                contained
              >
                EXCLUIR
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <EditTestAsksModal @update="update($event)" :test="test" />
            </v-row>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <Empty :show="false" />
  </v-col>
</template>

<script>
import EditTestAsksModal from "./EditTestAsksModal";
import Empty from "./Empty";

export default {
  props: ["tests"],

  components: {
    EditTestAsksModal,
    Empty,
  },

  data() {
    return {
      bot_id: this.$route.params.bot_id,
      current_user: this.$store.getters["user/current_user"],
    };
  },

  methods: {
    go_to_node(dialog_url, node) {
      window.open(`${dialog_url}#node=${node}`, "_blank");
    },

    update({ test, asks }) {
      this.$store.dispatch("tests/update", {
        bot_id: this.bot_id,
        test_id: test._id,
        asks: asks.length ? asks.trim().split("\n") : [],
      });
    },

    destroy(test) {
      this.$store.dispatch("tests/destroy", {
        bot_id: this.bot_id,
        test_id: test._id,
      });
    },
  },
};
</script>

<style>
</style>