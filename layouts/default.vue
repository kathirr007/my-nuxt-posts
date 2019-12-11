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
      <v-toolbar-title>
        <nuxt-link to="/" tag="span" style="cursor: pointer">{{title}}</nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <!-- <v-btn color="primary" dark v-on="on">Button</v-btn> -->
          <v-btn icon dark v-on="on" class="mr-2" href="https://github.com/kathirr007/my-nuxt-posts" target="_blank">
            <v-icon>mdi-github-circle</v-icon>
          </v-btn>
        </template>
        <span>View on Github</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon dark class="mr-2" v-on="on" href="https://github.com/kathirr007/nuxt-posts" target="_blank">
            <v-icon>mdi-github-circle</v-icon>
          </v-btn>
        </template>
        <span>View on Github of original reference</span>
      </v-tooltip>

      <!-- <a href="https://github.com/kathirr007/nuxt-posts" target="_blank">
      </a> -->
      <v-menu
      bottom
      origin="center center"
      transition="slide-y-transition"
      class="d-none d-sm-block"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          dark
          v-on="on"
          class="d-none d-sm-block"
        >
          Menu
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
        <transition name="fade" mode="out-in">
          <nuxt />
        </transition>
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
  },
  transition: 'slide-right',
  /* transition (to, from) {
    if (!from) { return 'slide-left' }
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  } */
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
