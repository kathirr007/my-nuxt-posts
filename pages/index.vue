<template>
    <v-row
      column
      justify-center
      align-center
    >
     <v-col cols="10" class="posts-list" offset="1">
      <div class="text-center">
        <h1>
          Welcome to My Blog
        </h1>
      </div>
      <post-item v-for="post in posts" :title="post.title" :subtitle="post.subtitle" :key="post._id" :date="post.createdAt" :isRead="post.isRead" />
     </v-col>
    </v-row>
</template>

<script>
import PostItem from '~/components/PostItem'

export default {
  data() {
    return {
      title: "My Title from Parent Component",
      posts: [
        {
          _id: 1,
          title: "First Post Title",
          subtitle: "First Post Subtitle",
          createdAt: new Date(),
          isRead: false,
        },
        {
          _id: 2,
          title: "Second Post Title",
          subtitle: "Second Post Subtitle",
          createdAt: new Date(),
          isRead: false,
        },
      ],
    }
  },
  components: {
    PostItem,
  }
}
</script>
<style lang="scss" scoped>
.posts-list {

}
</style>
