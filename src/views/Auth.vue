<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-col cols="4" align="right">
        <v-img
          contain
          class="mb-10"
          max-width="200"
          :src="require('../assets/images/logo.png')"
        />
        <v-form ref="form" lazy-validation :valid="false">
          <v-text-field
            outlined
            v-for="field in fields"
            :key="field.key"
            :label="field.label"
            v-model="field.value"
            :rules="field.rules"
            color="accent"
            required
          />
        </v-form>
        <v-row class="mt-5" align="center" justify="space-between">
          <v-btn @click="signin()" contained color="accent" :disabled="!valid">
            ENTRAR
          </v-btn>
          <v-btn outlined color="accent" :disabled="!valid">
            CADASTRAR
          </v-btn>
        </v-row>
      </v-col>
      <v-col cols="7" class="accent d-flex rounded-lg ml-10"></v-col>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    signin() {
      this.$refs.form.validate();
    },
  },

  data: () => ({
    valid: true,
    fields: [
      {
        key: 'email',
        label: 'E-mail',
        value: '',
        rules: [
          (v) => !!v || 'E-mail é obrigatório',
          (v) => /.+@.+/.test(v) || 'E-mail inválido',
        ],
      },
      {
        key: 'password',
        label: 'Senha',
        value: '',
        rules: [(v) => !!v || 'Senha é obrigatória'],
      },
    ],
  }),
};
</script>

<style></style>
