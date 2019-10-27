<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item subtitle is-4">
        Youtube Player
      </nuxt-link>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <div class="field has-addons">
            <form action="/search" method="get">
              <input name="q" class="input" type="text" placeholder="検索">
              <button type="submit" class="button">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons" v-if="isLoggedIn">
            <a href="#" class="button is-light" @click="logout">Logout</a>
          </div>
          <div class="buttons" v-else>
            <nuxt-link class="button is-primary" to="/signup">
              <strong>Sign up</strong>
            </nuxt-link>
            <nuxt-link class="button is-light" to="/login">
              Login
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    computed: {
      isLoggedIn() {
        return !!this.$store.getters['login/isLoggedIn']
      }
    },

    methods: {
      logout() {
        this.$store.dispatch('login/logout')
      }
    }
  }
</script>
