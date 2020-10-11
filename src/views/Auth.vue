<template>
  <v-container fluid>
    <v-layout row wrap>
      <Signin />
      <Signup />
    </v-layout>
  </v-container>
</template>

<script>
import Signin from '../components/Signin';
import Signup from '../components/Signup';

export default {
  components: {
    Signin,
    Signup,
  },
};
</script>

<style></style>
