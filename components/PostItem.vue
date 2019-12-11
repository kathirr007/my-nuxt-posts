<template>
  <v-card>
    <v-card-title class="headline">
      {{title}}
    </v-card-title>
    <v-card-subtitle class="subtitle-1 font-weight-normal white--text">
      {{subtitle}}
    </v-card-subtitle>
    <v-card-text>
      <p>Blog contents goes here...</p>

      <div class="text-xs-right">
        <em><small>&mdash; John Leider,</small></em> {{date | formatDate}}
      </div>
    </v-card-text>
    <v-card-actions>
        <v-switch dense v-model="isReadChecked" color="primary" class="ma-2" :label="readLabel()"></v-switch>
      <v-spacer />
      <v-btn dark nuxt to="/inspire">
        View indetails
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import moment from 'moment'
  export default {
    data() {
      return {
        moment,
        isReadChecked: this.isRead ? true : false
      }
    },
    methods:{
      /* formatDate(date) {
        return moment(date).format('LLL')
      } */
      readLabel() {
        return this.isReadChecked ? 'Read' : 'UnRead'
      }
    },
    props: {
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        required: false
      },
      date: {
        type: Date,
        required: false
      },
      isRead: {
        type: Boolean,
        required: false
      }
    }
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
