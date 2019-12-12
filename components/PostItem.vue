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

      <div class="text-left text-sm-right">
        <em><small>&mdash; John Leider,</small></em> {{date | formatDate}}
      </div>
    </v-card-text>
    <v-card-actions class="flex-column flex-sm-row">
        <v-switch dense v-model="isReadChecked" color="primary" class="align-self-start mx-2 my-0" :label="readLabel()"></v-switch>
      <v-spacer />
      <v-btn dark nuxt to="/inspire" class="align-self-end align-self-sm-start">
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
/*     .v-input--selection-controls {
      &.v-input--switch {
        .v-input__control {
          .v-input__slot {
            margin: 0;
          }
          .v-messages {
            display: none;
          }
        }
      }
    } */
  }

</style>
