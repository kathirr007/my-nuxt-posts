<template>
    <v-card class="pa-4 no-hover">
      <v-form v-model="valid" ref="updatePostForm">
        <v-row>
          <v-col cols="12">
            <v-btn small class="float-right" dark color="error" @click="deletePost" type="button">
              Delete
              <template v-slot:loader>
                <span class="custom-loader">
                  <v-icon light>mdi-cached</v-icon>
                </span>
              </template>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="form-group">
            <v-text-field label="Title *" outlined v-model="post.title" :rules="rules.titleRules" required></v-text-field>
          </v-col>
          <v-col cols="12" class="form-group">
            <v-text-field label="Sub Title *" outlined v-model="post.subtitle" :rules="rules.subtitleRules" required></v-text-field>
          </v-col>
          <v-col cols="12" class="form-group">
            <v-textarea
              class=""
              label="Content *"
              rows="1"
              auto-grow
              outlined
              :rules="rules.contentRules"
              v-model="post.content"
            ></v-textarea>
          </v-col>
          <v-col cols="12" class="form-group mb-2 content-preview">
            <h2 class="title mb-2">Content Preview</h2>
            <div v-html="compiledMarkdown"></div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn color="" class="float-right" dark :loading="loading" :disabled="!valid" @click="updatePost" type="button">
                    Update
              <template v-slot:loader>
                <span class="custom-loader">
                  <v-icon light>mdi-cached</v-icon>
                </span>
              </template>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  <!-- <simplebar class="post-manage">
  </simplebar> -->
</template>

<script>
  import DOMPurify from 'dompurify'
  import simplebar from 'simplebar-vue';
  import 'simplebar/dist/simplebar.min.css';
  export default {
    /* props: {
      postData: {
        type: Object,
        required: true
      }
    }, */
    props: ['postData'],
    data() {
      return {
        loading: false,
        post: {
          ...this.postData,
        },
        valid: false,
        /* title: '',
        subtitle: '',
        content: '', */
      }
    },
    components: {
      simplebar
    },
    watch: {
      postData(data, oldValue) {
        // debugger
        this.post = {...data}
      },
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
    created() {
      console.log(this.postData)
    },
    computed: {
      rules() {
        return {
          titleRules : [
            v => !!v || 'Title is required',
            v => v.length <= 100 || 'Name must be less than 100 characters',
          ],
          subtitleRules: [
            v => !!v || 'Sub Title is required',
            v => v.length <= 100 || 'Subtitle must be less than 100 characters',
          ],
          contentRules: [
            v => !!v || 'Content is required',
            v => v.length >= 100 || 'Content more be less than 100 characters',
          ],
          valid: false,
        }
      },
      compiledMarkdown() {
        if (process.client) {
          // return marked(this.post.content, {sanitize: true})
          return DOMPurify.sanitize(marked(this.post.content))
        }
        return ''
      },
    },
    methods: {
      updatePost() {
        this.$store.dispatch('posts/updatePost', {...this.post})
        this.loading = true
        setTimeout(() => {
          this.loading = false
        },500)
      },
      deletePost() {
        /* this.$store.dispatch('posts/deletePost', this.post._id)
        this.loading = true
        setTimeout(() => {
          this.loading = false
        },500) */
        this.$emit('deletePostSubmitted')
      }
    },
  }
</script>

<style lang="scss" scoped>
.post-manage {
  // height: calc(100vh - (56px + 60px + 100px + 24px));
  @media screen and(min-width: 960px){
    overflow: hidden;
    overflow-y: auto;
    height: calc(100vh - (64px + 60px + 76px + 24px));
  }
}
.form-group {
    padding-top: 0;
    &:last-child {
      padding-bottom: 0;
    }
  }
  .v-card {
    &.no-hover{
      &:hover {
        cursor: default;
      }
    }
  }
</style>
