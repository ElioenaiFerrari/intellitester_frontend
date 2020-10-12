<template>
  <v-row justify="center">
    <v-dialog
      v-model="show_dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined color="accent" s v-bind="attrs" v-on="on" class="mb-10">
          ADICIONAR BOT
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="accent">
          <v-btn icon dark @click="$emit('close')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>INFORMAÇÕES NECESSÁRIAS</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="validate()">SALVAR</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-form ref="form" :valid="valid" lazy-validation>
          <v-row class="pa-10">
            <v-col cols="4" v-for="field in fields" :key="field.key">
              <v-text-field
                v-show="field.type === 'text-field'"
                :label="field.label"
                outlined
                :rules="field.rules"
                v-model="field.value"
                color="accent"
              />
              <v-select
                v-show="field.type === 'select'"
                :label="field.label"
                :rules="field.rules"
                outlined
                :items="field.items"
                v-model="field.value"
                color="accent"
              />
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["show_dialog"],

  data() {
    return {
      valid: false,
      notifications: false,
      sound: true,
      widgets: false,

      fields: [
        {
          key: "name",
          label: "Nome do bot",
          value: "",
          type: "text-field",
          rules: [(v) => !!v || "Nome obrigatório"],
        },
        {
          key: "service_url",
          label: "URL do serviço",
          value: "",
          type: "text-field",
          rules: [(v) => !!v || "URL obrigatória"],
        },
        {
          key: "skill_id",
          label: "ID da skill",
          value: "",
          type: "text-field",
          rules: [(v) => !!v || "Skill obrigatória"],
        },
        {
          key: "status",
          label: "Status",
          value: "",
          type: "select",
          rules: [(v) => !!v || "Status obrigatório"],
          items: ["PROD", "HOM"],
        },
        {
          key: "apikey",
          label: "Chave da API",
          value: "",
          type: "text-field",
          rules: [(v) => !!v || "Chave obrigatória"],
        },
        // {
        //   apikey: "b0HRDFp-2Vrc_uwS1PRIEefXSHP2o1hZSQ_LeHvB16dU",
        //   service_url:
        //     "https://api.us-south.assistant.watson.cloud.ibm.com/instances/24728456-83bb-4a63-8492-e680ea000ebd",
        //   skill_id: "a1e1fc4b-c91a-4664-bf41-0dfd68ce151d",
        //   name: "Arcelor",
        //   status: "PROD",
        // },
      ],
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$emit("save", this.fields);
      }
    },
  },
};
</script>

<style>
</style>