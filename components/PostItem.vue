<template>
  <v-card>
    <v-card-title class="headline">
      Welcome to the Vuetify + Nuxt.js template
    </v-card-title>
    <v-card-subtitle class="subtitle-1 font-weight-normal white--text">
      Here goes the subtitle
    </v-card-subtitle>
    <v-card-text>
      <p>Blog contents goes here...</p>

      <div class="text-xs-right">
        <em><small>&mdash; John Leider</small></em>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn dark nuxt to="/inspire">
        View indetails
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {

  }

</script>

<style lang="scss" scoped>
  .posts-list {
    .v-card {
      margin-bottom: 15px;

      :last-child {
        margin: 0;
      }
    }
  }

</style>
