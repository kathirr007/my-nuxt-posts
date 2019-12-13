<template>
  <div class="manage-page">
    <!-- <nav class="navbar has-shadow">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="../">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox">
          </a>
          <div class="navbar-burger burger"
               aria-label="menu"
               aria-expanded="false"
               data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item has-dropdown">
              <a class="navbar-link">
              Menu
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item">
                Dashboard
                </a>
                <a class="navbar-item">
                Profile
                </a>
                <a class="navbar-item">
                Settings
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav> -->
    <v-row>
      <aside class="col" cols="12" md="2">
        <post-create />
      </aside>
      <v-col cols="12" md="4">
        <v-hover v-for="post in posts" :key="post._id" v-slot:default="{ hover }">
          <v-card :class="{'is-active': activePost && post._id === activePost._id}" color="" dark :elevation="hover ? 12 : 2" @click="activatePost(post)">
            <v-card-title class="headline">{{post.title}}</v-card-title>
            <v-card-subtitle class="font-italic">
              {{post.subtitle}}
            </v-card-subtitle>
            <v-card-text>
              <p>{{post.content}}</p>
              <div class="text-right">
                <em><small>From John Leider</small></em>
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
        <!-- <v-hover v-slot:default="{ hover }">
          <v-card color="" dark :elevation="hover ? 12 : 2">
            <v-card-title class="headline">Unlimited music now</v-card-title>
            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.
            </v-card-subtitle>
            <v-card-text>
              <div class="text-right">
                <em><small>From John Leider</small></em>
              </div>
            </v-card-text>
          </v-card>
        </v-hover> -->
      </v-col>
      <v-col cols="12" md="6" class="" id="message-pane">
        <post-manage :postData="activePost" />
      </v-col>
    </v-row>
    <footer class="footer">
      <v-divider />
      <v-container fluid class="text-center py-0">
          <v-col cols="12">
            <strong>Blog Created </strong> by <a href="https://github.com/kathirr007">kathirr007</a>. The source
            code is available at
            <v-tooltip bottom tag="span">
              <template v-slot:activator="{ on }">
                <v-btn icon dark v-on="on" class="mr-2" href="https://github.com/kathirr007/my-nuxt-posts" target="_blank">
                  <v-icon>mdi-github-circle</v-icon>
                </v-btn>
              </template>
              <span>View on Github</span>
            </v-tooltip>
          </v-col>
      </v-container>
    </footer>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import PostCreate from '~/components/PostCreate'
  import PostManage from '~/components/PostManage'
  export default {
    components: {
      PostCreate, PostManage
    },
    data() {
      return {
        // posts: this.$store.state.posts,
        activePost: {},
      }
    },
    computed: {
      ...mapState({
        posts: (state) => state.posts.items
      }),
      isActivePost() {
        if(this.activePost && this.post._id === this.activePost._id) {
          return 'primary'
        }
      }
    },
    fetch({store}) {
      if(store.state.posts.items.length === 0) {
        console.log('Fetching data in manage page')
        return store.dispatch('posts/fetchPosts')
      }
    },
    created() {
      if (this.posts && this.posts.length > 0) {
        this.activePost = this.posts[0]
      }
    },
    methods: {
      activatePost(post) {
        this.activePost = post
      }
    },
    transition (to, from) {
      if (!from) { return 'slide-left' }
      return  'slide-right'
    },
  }
</script>

<style lang="scss" scoped>
.v-card {
  margin-bottom: 15px;
 &:last-child, &:only-child {
   margin-bottom: 0;
 }
 &:hover {
   cursor: pointer;
 }
}
.headline {
  word-break: break-word;
}
.is-active {
  border: 1px solid #1976d2;
  background-color: #212121;
}
.footer {
  margin-top: 15px;
  .v-divider {
    background-color: #fff;
  }
}
</style>
