<template>
  <v-row justify="center">
    <!-- <v-btn dark nuxt @click.stop to="/inspire">
      Create
    </v-btn> -->
    <v-dialog v-model="dialog" persistent max-width="75%">
      <template v-slot:activator="{ on }">
        <v-btn dark v-on="on">Create</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h1 class="headline">Create new post</h1>
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Title*" v-model="title" :rules="titleRules" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Sub Title*" v-model="subtitle" :rules="subtitleRules" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    class=""
                    label="Content"
                    rows="1"
                    auto-grow
                    outlined
                    :rules="contentRules"
                    v-model="content"
                    :counter="250"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="" dark @click="dialog = false">Close</v-btn>
          <v-btn color="" dark @click="dialog = false">Create</v-btn>
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
        valid: false,
        title: '',
        subtitle: '',
        content: '',
        titleRules: [
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
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
