<template>
  <v-col v-if="show" align="center" justify="center">
    <v-img
      contain
      max-width="400"
      :src="require('../assets/images/empty.png')"
    />
    <h2 class="text-title-2 accent--text">Nada por aqui...</h2>
  </v-col>
</template>

<script>
export default {
  props: ["show"],
};
</script>

<style>
</style>