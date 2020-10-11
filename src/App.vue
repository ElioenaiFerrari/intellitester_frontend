<template>
  <v-app>
    <v-navigation-drawer
      color="accent"
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
      v-if="is_signed()"
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img :src="require('./assets/images/avatar.jpg')" />
        </v-list-item-avatar>

        <v-list-item-title class="white--text">
          {{ current_user.name }}
        </v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="route in routes"
          :key="route.name"
          :to="route.path"
          v-show="route.props.visible"
          link
        >
          <v-list-item-icon>
            <v-icon color="black">{{ route.props.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="black--text">
              {{ route.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="fill-height">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AuthUtil from "./utils/auth";
import * as R from "ramda";

export default {
  name: "App",

  computed: {
    routes() {
      return this.$router.options.routes;
    },

    current_user() {
      return this.$store.getters["user/current_user"];
    },
  },

  methods: {
    is_signed: R.pipe(
      AuthUtil.get_token,
      R.ifElse(
        R.isNil,
        () => false,
        () => true
      )
    ),
  },

  data: () => ({
    drawer: true,
    mini: true,
  }),
};
</script>
