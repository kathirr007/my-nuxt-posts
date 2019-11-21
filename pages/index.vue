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
      <post-item />
      <post-item />
     </v-col>
    </v-row>
</template>

<script>
import PostItem from '~/components/PostItem'

export default {
  components: {
    PostItem,
  }
}
</script>
<style lang="scss" scoped>
.posts-list {

}
</style>
