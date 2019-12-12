import { INITIAL_DATA } from './index'

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
    }
  }
/* Actions ends */

/* Mutations */
// Mutations are used to assign values to a state
export const mutations = {
  setPosts(state, posts) {
    state.items = posts
  }
}
/* Mutations ends */
