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
        :type="field.type"
        v-model="field.value"
        :rules="field.rules"
        color="accent"
        @keydown.enter="signin()"
        @input="validate()"
        required
      />
    </v-form>
    <v-btn
      x-large
      @click="signin()"
      block
      contained
      color="accent"
      :disabled="!valid"
    >
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
        key: "email",
        label: "E-mail",
        type: "email",
        value: "",
        rules: [
          (v) => !!v || "E-mail é obrigatório",
          (v) => /.+@.+/.test(v) || "E-mail inválido",
        ],
      },
      {
        key: "password",
        label: "Senha",
        type: "password",
        value: "",
        rules: [(v) => !!v || "Senha é obrigatória"],
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

      this.$store.dispatch("auth/signin", data);
    },
  },
};
</script>

<style></style>
