<template>
  <Modal @createPostSubmitted="createPost" :valid="form.valid">
    <v-form v-model="form.valid" ref="createPostForm">
      <v-row>
        <v-col cols="12" class="form-group">
          <v-text-field label="Title *" outlined v-model="form.postData.title" :rules="form.titleRules" required></v-text-field>
        </v-col>
        <v-col cols="12" class="form-group">
          <v-text-field label="Sub Title *" outlined v-model="form.postData.subtitle" :rules="form.subtitleRules" required></v-text-field>
        </v-col>
        <v-col cols="12" class="form-group">
          <v-textarea
            class=""
            label="Content *"
            rows="1"
            auto-grow
            outlined
            :rules="form.contentRules"
            v-model="form.postData.content"
          ></v-textarea>
        </v-col>
        <v-col v-if="form.postData.content" cols="12" class="form-group mb-2 content-preview">
          <h2 class="title mb-2">Content Preview</h2>
          <div v-html="compiledMarkdown"></div>
        </v-col>
      </v-row>
      <small>*indicates required field</small>
    </v-form>
  </Modal>
</template>

<script>
  import Modal from '~/components/shared/Modal'
  import DOMPurify from 'dompurify'
  export default {
    data() {
      return {
        form: {
          valid: false,
          loading: false,
          postData: {
            title: '',
            subtitle: '',
            content: '',
          },
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
    },
    computed: {
      compiledMarkdown() {
        if (process.client) {
          return DOMPurify.sanitize(marked(this.form.postData.content))
        }
        return ''
      }
    },
    methods: {
      createPost(values) {
        console.log(this.form.postData)
        // const postData = {...this.form.title}
        this.$store.dispatch('posts/createPost', {...this.form.postData})
        // debugger
        this.resetForm()
        this.$refs.createPostForm.resetValidation()
      },
      resetForm() {
        this.form.postData.title = ''
        this.form.postData.subtitle = ''
        this.form.postData.content = ''
      },
    },
    components: {
      Modal
    }
  }
</script>

<style lang="scss" scoped>
  .form-group {
    padding-top: 0;
    &:last-child {
      padding-bottom: 0;
    }
  }
  .content-preview{
    color: #fff;
  }
</style>
