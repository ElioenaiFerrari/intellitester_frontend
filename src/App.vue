<template>
  <v-app>
    <v-navigation-drawer app color="accent" permanent expand-on-hover>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img :src="require('./assets/images/avatar.jpg')" />
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              Sandra Adams
            </v-list-item-title>
            <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item
          v-for="route in routes"
          :key="route.name"
          :to="route.path"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ route.props.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ route.name }}</v-list-item-title>
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
export default {
  name: 'App',

  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },

  data: () => ({
    //
  }),
};
</script>
