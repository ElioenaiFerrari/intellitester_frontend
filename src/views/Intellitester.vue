<template>
  <v-container fluid>
    <v-list>
      <v-col cols="4" v-for="bot in bots" :key="bot._id">
        <v-card class="mx-auto" max-width="344">
          <v-img
            contain
            src="https://cdn.vivotech.com.br/vivo-tech/wp-content/uploads/2018/08/13162940/bot_para_que_serve.jpg"
            height="200px"
          ></v-img>

          <v-card-title>{{ bot.name }}</v-card-title>

          <v-card-subtitle>{{ bot.status }}</v-card-subtitle>

          <v-card-actions>
            <v-spacer />
            <v-btn color="accent" @click="go_to_tests(bot)" outlined text
              >DETALHES</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false,
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
  },
};
</script>

<style></style>
