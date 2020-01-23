<template>
  <v-card>
    <v-card-title class="headline">
      {{title}}
    </v-card-title>
    <v-card-subtitle class="subtitle-1 font-weight-normal white--text">
      {{subtitle}}
    </v-card-subtitle>
    <v-card-text>
      <p>{{content}}</p>

      <div class="text-left text-sm-right">
        <em><small>&mdash; John Leider,</small></em> {{date | formatDate}}
      </div>
    </v-card-text>
    <v-card-actions class="flex-column flex-sm-row">
        <v-switch @change="toggleRead" inset v-model="isArchived" color="primary" class="align-self-start mx-2 my-0" :label="readLabel()"></v-switch>
      <v-spacer />
      <v-btn dark nuxt @click="postRead" :to="`/posts/${id}`" class="align-self-end align-self-sm-start">
        View indetails
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import moment from 'moment'
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        required: false
      },
      content: {
        type: String,
        required: false
      },
      date: {
        type: Number,
        required: false
      },
      isRead: {
        type: Boolean,
        required: false
      }
    },
    data() {
      return {
        moment,
        isReadChecked: this.isArchived ? true : false
      }
    },
    methods:{
      /* formatDate(date) {
        return moment(date).format('LLL')
      } */
      readLabel() {
        return this.isArchived ? 'Read' : 'UnRead'
      },
      toggleRead() {
        this.$store.dispatch('posts/toggleRead', this.id)
      },
      postRead() {
        this.$store.dispatch('posts/postRead', this.id)
      }
    },
    computed: {
      archivedPosts() {
        // debugger
        return this.$store.state.posts.archivedItems
      },
      isArchived: {
        get() {
          return this.archivedPosts.includes(this.id)
        },
        set(val) {
          this.archivedPosts.includes(this.id)
        }
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
