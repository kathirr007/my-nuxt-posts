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
      <aside class="col col-2">
        <v-btn dark nuxt @click.stop to="/inspire">
          Create
        </v-btn>
      </aside>
      <v-col cols="4">
        <v-hover v-for="post in posts" :key="post._id" v-slot:default="{ hover }">
          <v-card color="" dark :elevation="hover ? 12 : 2">
            <v-card-title class="headline">{{post.title}}</v-card-title>
            <v-card-subtitle>
              {{post.subtitle}}
            </v-card-subtitle>
            <v-card-text>
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
      <v-col cols="6" class="d-none" id="message-pane">
        <div class="box message-preview">
          <div class="top">
            <div class="avatar">
              <img src="https://placehold.it/128x128">
            </div>
            <div class="address">
              <div class="name">John Smith</div>
              <div class="email">someone@gmail.com</div>
            </div>
            <hr>
            <div class="content">
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <footer class="footer">
      <v-divider />
      <v-container fluid class="text-center">
          <p>
            <strong>Blog Created </strong> by <a href="https://github.com/kathirr007">kathirr007</a>. The source
            code is available at
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <!-- <v-btn color="primary" dark v-on="on">Button</v-btn> -->
                <v-btn icon dark v-on="on" class="mr-2" href="https://github.com/kathirr007/my-nuxt-posts" target="_blank">
                  <v-icon>mdi-github-circle</v-icon>
                </v-btn>
              </template>
              <span>View on Github</span>
            </v-tooltip>
          </p>
      </v-container>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        posts: this.$store.state.posts,
      }
    }
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
.footer {
  margin-top: 15px;
  .v-divider {
    background-color: #fff;
  }
}
</style>
