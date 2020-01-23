<template>
  <div>
    <div class="blogs-page">
      <div class="main-content">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-8 is-offset-2">
              <div class="section">
                <div class="title">
                  <h1 class="mb-1">{{post.title}}</h1>
                  <h2 class="subtitle mb-3">{{post.subtitle}}</h2>
                </div>
                <div class="post-content">
                  <div class="markdown">
                    <!-- Post Markdown content -->
                    <div v-html="compiledMarkdown"></div>
                  </div>
                </div>
                <div class="text-left text-sm-right">
                  <em><small>&mdash; John Leider,</small></em> {{post.createdAt | formatDate}}
                </div>
              </div>
              <!-- end of post -->
            </div>
            <!-- end of side bar -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import DOMPurify from 'dompurify'
  export default {
    fetch({params, store}) {
      const id = params.id
      console.log(id)
      return store.dispatch('posts/fetchPostById', params.id)
    },
    computed: {
      post() {
        return this.$store.state.posts.item
      },
      compiledMarkdown() {
        if (process.client) {
          // return marked(this.post.content, {sanitize: true})
          return DOMPurify.sanitize(marked(this.post.content))
        }
        return ''
      },
    },
    transition (to, from) {
      if (!from) { return 'slide-left' }
      return  'slide-right'
    },
  }
</script>

<style lang="scss" scoped>

</style>
