<template>
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
      <v-btn color="accent" @click="$emit('click-test', bot)" outlined text>
        TESTER
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["bot"],
};
</script>

<style>
</style>