import firebase from "~/plugins/firebase";

export const state = () => ({
  token: '',
})

export const actions = {
  async signUp({commit, dispatch}, payload) {
    await firebase.auth().createUserWithEmailAndPassword(
      payload.email,
      payload.password
    )
    const res = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    const token = await res.user.getIdToken()
    this.$cookies.set('jwt_token', token)
    const refreshToken = res.user.refreshToken
    this.$cookies.set('refresh_token', refreshToken)
    commit('mutateToken', token)
    this.app.router.push('/')
  },

  async login({commit, dispatch}, payload) {
    const res = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    const token = await res.user.getIdToken()
    this.$cookies.set('jwt_token', token)
    const refreshToken = res.user.refreshToken
    this.$cookies.set('refresh_token', refreshToken)
    commit('mutateToken', token)
    this.app.router.push('/')
  },

  async logout({commit}) {
    await firebase.auth().signOut()
    commit('mutateToken', null)
    this.$cookies.remove('jwt_token')
    this.app.router.push('/')
  },

  async setToken({commit}, payload) {
    commit('mutateToken', payload)
  },
}

export const mutations = {
  mutateToken(state, payload) {
    state.token = payload
  },
}

export const getters = {
  isLoggedIn(state) {
    return !!state.token
  },
}
