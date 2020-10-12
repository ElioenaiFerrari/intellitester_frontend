<template>
  <v-col
    justify="center"
    align="right"
    cols="7"
    class="accent rounded-lg ml-10 pa-5"
  >
    <v-form ref="form" :valid="valid">
      <v-row>
        <v-col cols="6" v-for="field in fields" :key="field.key">
          <v-text-field
            outlined
            :label="field.label"
            v-model="field.value"
            :rules="field.rules"
            :type="field.type"
            color="white"
            required
            @keydown.enter="signup()"
            @input="validate()"
          />
        </v-col>
        <v-col cols="6">
          <v-btn
            x-large
            block
            outlined
            color="white"
            @click="signup()"
            :disabled="!valid"
          >
            CADASTRAR
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    fields: [
      {
        key: "email",
        type: "email",
        label: "E-mail",
        value: "",
        rules: [
          (v) => !!v || "E-mail é obrigatório",
          (v) => /.+@.+/.test(v) || "E-mail inválido",
        ],
      },
      {
        key: "name",
        type: "text",
        label: "Nome",
        value: "",
        rules: [(v) => !!v || "Nome é obrigatório"],
      },
      {
        key: "password",
        type: "password",
        label: "Senha",
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

    signup() {
      const mount_object = (acc, { key, value }) => {
        acc[key] = value;

        return acc;
      };

      const params = this.fields.reduce(mount_object, {});

      this.$store.dispatch("auth/signup", params);
    },
  },
};
</script>

<style></style>
