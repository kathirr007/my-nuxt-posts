<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-menu
      bottom
      origin="center center"
      transition="scale-transition"
      class="d-none d-sm-block"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          dark
          v-on="on"
          class="d-none d-sm-block"
        >
          Scale Transition
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          :to="item.to"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
          <!-- <v-list-item-title>{{ item.title }}</v-list-item-title> -->
        </v-list-item>
      </v-list>
    </v-menu>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      menuItems: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        }, {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Blog App using Nuxt.js And Vuetify'
    }
  }
}
</script>


                          {
                            icon: 'mdi-apps',
                            title: 'Welcome',
                            to: '/'
                          },
                          {
                            icon: 'mdi-chart-bubble',
                            title: 'Inspire',
                            to: '/inspire'
                          }
