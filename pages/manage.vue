<template>
  <div class="manage-page">
    <v-row>
      <v-col class="col" cols="12">
        <post-create />
      </v-col>

      <simplebar class="posts-list py-md-0  float-sm-left order-2 order-md-1" :class="[activePost ? 'col-md-4' : 'col-md-10']" v-if="posts && posts.length > 0">
        <v-col cols="12" class="py-0" transition="scale-transition">
          <v-slide-y-transition group>
            <v-hover v-for="post in posts" :key="post._id" v-slot:default="{ hover }">
              <v-card :class="{'is-active': activePost && post._id === activePost._id}" color="" dark :elevation="hover ? 12 : 2" @click.native="activatePost(post)">
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
          </v-slide-y-transition>
        </v-col>
      </simplebar>
      <simplebar v-if="activePost && posts.length > 0" cols="12" md="8" class="col col-12 col-md-8 py-md-0 order-1 order-md-2 post-manage pa-5" id="message-preview" transition="scale-transition">
        <transition name="fade" mode="out-in">
          <post-manage @deletePostSubmitted='deletePost' :postData="activePost" />
        </transition>
      </simplebar>
      <simplebar v-else cols="10" transition="scale-transition" class="post-manage col col-10">
        <v-card dark class="no-hover pa-4">
          <h2 class="headline">There are no posts :(</h2>
        </v-card>
      </simplebar>
      <!-- <simplebar class="post-manage">
      </simplebar> -->

    </v-row>
    <footer class="footer">
      <v-divider />
      <v-container fluid class="text-center py-0">
          <v-col cols="12">
            <strong>Blog Created </strong> by <a href="https://github.com/kathirr007">kathirr007</a>. The source
            code is available at
            <v-tooltip top tag="span">
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
  import simplebar from 'simplebar-vue';
  import 'simplebar/dist/simplebar.min.css';
  import goTo from 'vuetify/es5/services/goto'
  import axios from 'axios'
  export default {
    components: {
      PostCreate, PostManage, simplebar
    },
    data() {
      return {
        // posts: this.$store.state.posts,
        activePost: null,
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
      this.setInitialActivePost()
    },
    methods: {
      /* async testAxios () {
        const data = await axios.get('/missions', {})
        .then((response) =>{
          console.log(response)
        })
      }, */
      activatePost(post) {
        this.activePost = post
        goTo('.v-content', {
          duration: 300,
          offset: 0,
          easing: 'easeInOutCubic'
        })
      },
      setInitialActivePost() {
        if (this.posts && this.posts.length > 0) {
          this.activePost = this.posts[0]
        } else {
          this.activePost = null
        }
      },
      deletePost(){
        if(this.activePost) {
          const index = this.posts.findIndex((post) => {
            return post._id === this.activePost._id
          })
          this.$store.dispatch('posts/deletePost', this.activePost._id)
            .then(() => {
              // this.setInitialActivePost()
              this.activePost = this.posts[index - 1]
            })
        }
      }
    },
    transition (to, from) {
      if (!from) { return 'slide-left' }
      return  'slide-right'
    },
  }
</script>

<style lang="scss" scoped>
.posts-list, .post-manage {
  // height: calc(100vh - (56px + 60px + 100px + 24px));
  @media screen and(min-width: 960px){
    overflow: hidden;
    overflow-y: auto;
    height: calc(100vh - (64px + 60px + 76px + 24px));
  }
}
.v-card {
  margin-bottom: 15px;
 &:last-child, &:only-child {
   margin-bottom: 0;
 }
 &:hover {
   cursor: pointer;
 }
 &.no-hover {
   &:hover {
     cursor: default;
   }
 }
}
.headline {
  word-break: break-word;
}

.footer {
  margin-top: 15px;
  .v-divider {
    background-color: #fff;
  }
}
</style>
<style lang="scss">
.theme--dark {
  &.v-card {
    &.is-active {
      border: 1px solid #1976d2;
      background-color: #212121;
    }
  }
}
</style>
