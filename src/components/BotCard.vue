<template>
  <v-card class="mx-auto" max-width="344">
    <v-btn
      :disabled="!bot.team.includes(current_user._id)"
      small
      fab
      color="accent"
      @click="$emit('click-delete', bot)"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-img
      contain
      src="https://cdn.vivotech.com.br/vivo-tech/wp-content/uploads/2018/08/13162940/bot_para_que_serve.jpg"
      height="200px"
    ></v-img>

    <v-card-title>{{ bot.name }}</v-card-title>

    <v-card-subtitle>{{ bot.status }}</v-card-subtitle>

    <v-card-actions>
      <v-spacer />
      <v-btn color="accent" @click="$emit('click-test', bot)" outlined>
        TESTER
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["bot"],

  data() {
    return {
      current_user: this.$store.getters["user/current_user"],
    };
  },
};
</script>

<style>
</style>