<template>
  <v-col cols="4" align="right">
    <v-img
      contain
      class="mb-10"
      max-width="200"
      :src="require('../assets/images/logo.png')"
    />
    <v-form ref="form" :valid="valid">
      <v-text-field
        outlined
        v-for="field in fields"
        :key="field.key"
        :label="field.label"
        v-model="field.value"
        :rules="field.rules"
        color="accent"
        @input="validate()"
        required
      />
    </v-form>
    <v-btn @click="signin()" block contained color="accent" :disabled="!valid">
      ENTRAR
    </v-btn>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    valid: false,
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

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.valid = true;
      }
    },

    signin() {
      const mount_object = (acc, { key, value }) => {
        acc[key] = value;

        return acc;
      };

      const data = this.fields.reduce(mount_object, {});

      this.$store.dispatch('auth/signin', data);

      console.log(data);
    },
  },
};
</script>

<style></style>
