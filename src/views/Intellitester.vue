<template>
  <v-container fluid>
    <AddBotModal
      @close="show_dialog = false"
      :show_dialog="show_dialog"
      @save="add_bot($event)"
      ref="form"
    />
    <v-row>
      <v-col cols="4" v-for="bot in bots" :key="bot._id">
        <BotCard :bot="bot" @click-test="go_to_tests($event)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BotCard from "../components/BotCard";
import AddBotModal from "../components/AddBotModal";

export default {
  components: {
    BotCard,
    AddBotModal,
  },

  data: () => ({
    show_dialog: false,
  }),

  beforeCreate() {
    this.$store.dispatch("bot/index");
  },

  computed: {
    current_user() {
      return this.$store.getters["user/current_user"];
    },

    bots() {
      return this.$store.getters["bot/bots"];
    },
  },

  methods: {
    go_to_tests(bot) {
      return this.$router.push(`/app/intellitester/${bot._id}`);
    },

    add_bot(fields) {
      this.show_dialog = false;

      const mount_object = (acc, { key, value }) => {
        acc[key] = value;

        return acc;
      };

      const params = [...fields].reduce(mount_object, {});

      this.$store.dispatch("bot/store", params);
    },
  },
};
</script>

<style></style>
