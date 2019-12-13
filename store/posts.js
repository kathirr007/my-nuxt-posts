import { INITIAL_DATA } from './index'
import Vue from 'vue'

/* Fetch posts from server of from API */
function fetchPostsAPI() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(INITIAL_DATA.posts)
    }, 400)
  })
}
/* Fetch posts from server of from API ends */

export const state = () => {
  return {
    items: [],
  }
}

/* Getters */
// Getters are like computed properties but for Vuex
export const getters = {
  hasEmptyItems(state) {
    return state.items.length === 0 ? true : false
  }
}
/* Getters ends */

/* Actions */
/* Actions are very good place to send a request to a server. Usually Actions are the function resolve into some data */
  export const actions = {
    fetchPosts({commit}) {
      console.log('Calling fetch posts')
      return fetchPostsAPI()
        .then((posts) => {
          commit('setPosts', posts)
        })
      // return INITIAL_DATA.posts
    },
    createPost({commit}, postData) {
      // create post on server, or persist data in localstorage
      postData._id = Math.random().toString(36).substr(2, 5)
      postData.createdAt = new Date()
      // debugger
      commit('addPost', postData)
      // commit('clearPost', postData)
    },
    updatePost({commit, state}, postData) {
      const index = state.items.findIndex((post) => {
        return post._id === postData._id
      })
      commit('updatePost', {post: postData, index})
    }
  }
/* Actions ends */

/* Mutations */
// Mutations are used to assign values to a state
export const mutations = {
  setPosts(state, posts) {
    state.items = posts
  },
  addPost(state, post) {
    state.items.push(post)
  },
  updatePost(state, {post, index}) {
    state.items[index] = post
    Vue.set(state.items, index, post)
  }
}
/* Mutations ends */
