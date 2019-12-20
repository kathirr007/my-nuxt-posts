<template>
  <v-row justify="center">
    <!-- <v-btn dark nuxt @click.stop to="/inspire">
      Create
    </v-btn> -->
    <v-dialog v-model="dialog" persistent>
      <template v-slot:activator="{ on }">
        <v-btn dark v-on="on" @click="loading = false">Create new Post</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h1 class="headline mb-3">Create new post</h1>
        </v-card-title>
        <v-card-text>
          <slot />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="" dark @click="dialog = false">Close</v-btn>
          <v-btn color="" dark :loading="loading" :disabled="!valid" @click="createPostSubmitted">
            Create
            <template v-slot:loader>
              <span class="custom-loader">
                <v-icon light>mdi-cached</v-icon>
              </span>
            </template>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        dialog: false,
        loading: false,
      }
    },
    props:{
      valid: {
        type: Boolean,
        required: true
      },
      /* loading: {
        type: Boolean,
        required: true
      } */
    },

    /* watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    }, */
    methods: {
      createPostSubmitted(){
        console.log('Submitted Create Post Form..')
        this.$emit('createPostSubmitted')
        this.dialog = false
        this.loading = true
      }
    },
  }
</script>

<style lang="scss" scoped>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
<style lang="scss">
.v-dialog {
    &--active {
      // max-width: 95%;
      @media screen and(min-width: 960px){
        max-width: 75%;
      }
    }
  }
</style>
