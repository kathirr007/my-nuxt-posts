<template>
  <div>
    <v-row
      column
      justify-center
      align-center
    >
     <v-col cols="12" sm="10" class="posts-list" offset-sm="1">
      <div class="text-center mb-3">
        <h1>
          Welcome to My Blog
        </h1>
      </div>
      <post-item
        v-for="post in posts"
        :title="post.title"
        :subtitle="post.subtitle"
        :key="post._id"
        :date="post.createdAt"
        :isRead="post.isRead"
        :content="post.content"
      />
     </v-col>
    </v-row>
    <!-- <v-form v-model="form.valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="form.firstname"
              :rules="form.nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="form.lastname"
              :rules="form.nameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form> -->
    <!-- {{isFormValid}} -->
  </div>
</template>

<script>
import PostItem from '~/components/PostItem'

export default {
  data() {
    return {
      title: "My Title from Parent Component",
      // posts: this.$store.state.posts,
      form: {
        valid: false,
        firstname: '',
        lastname: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => v.length <= 10 || 'Name must be less than 10 characters',
        ]
      }
    }
  },
  components: {
    PostItem,
  },
  fetch({store}) {
    if(store.getters['posts/hasEmptyItems']) {
      console.log('Fetching data in index page')
      return store.dispatch('posts/fetchPosts')
    }
  },
  /* mounted() {
    this.$store.dispatch('posts/fetchPosts')
      .then((posts) => {
        console.log(posts)
      })
  }, */
  computed: {
    posts() {
      return this.$store.state.posts.items
    },
    /* isFormValid() {
      console.log('isFormValid has been called')
      if(this.form.firstname) {
        return true
      }
      return false
    } */
  },
  methods: {
    isFormValid() {
      console.log('isFormValid has been called')
      if(this.form.firstname) {
        return true
      }
      return false
    }
  }
}
</script>
<style lang="scss">
.posts-list {

}
</style>
