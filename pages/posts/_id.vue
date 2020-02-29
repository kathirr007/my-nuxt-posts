<template>
  <div>
    <div class="blogs-page">
      <div class="main-content">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-8 is-offset-2">
              <div class="section">
                <div class="title mb-3">
                  <h1 class="headline mb-1">Detail View</h1>
                  <hr>
                </div>
                <div class="post-content">
                  <h1 class="title">{{post.title}}</h1>
                  <h2 class="subtitle-1">{{post.subtitle}}</h2>
                  <div class="markdown">
                    <!-- Post Markdown content -->
                    <div></div>
                  </div>
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
export default {
  computed: {
    // return this.$store.state.posts.archivedItems
    post() {
      return this.$store.state.posts.item
      debugger
    }
  },
  fetch({params, store}) {
    const id = params.id
    return store.dispatch('posts/fetchPostById', id)
  },
  transition (to, from) {
      if (!from) { return 'slide-left' }
      return  'slide-right'
    },
}
</script>
