<template>
  <v-row justify="center">
    <v-dialog
      v-model="show_dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined color="accent" v-bind="attrs" v-on="on">
          EDITAR
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="accent">
          <v-btn icon dark @click="show_dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>EDITAR PERGUNTAS</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="save()"> SALVAR </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-col cols="12" class="pa-10">
          <v-textarea
            color="accent"
            label="Perguntas"
            outlined
            height="300"
            :value="mount_asks()"
            v-model="asks"
          />
        </v-col>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["test"],

  data() {
    return {
      show_dialog: false,
      asks: this.mount_asks(),
    };
  },

  methods: {
    mount_asks() {
      const get_ask = (answer) => answer.ask;

      return this.test.answers.map(get_ask).join(", ");
    },

    save() {
      this.show_dialog = false;

      this.$emit("update", {
        asks: this.asks,
        test: this.test,
      });
    },
  },
};
</script>

<style>
</style>