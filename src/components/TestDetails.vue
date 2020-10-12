<template>
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
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  props: ["tests"],
};
</script>

<style>
</style>