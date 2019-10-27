<template>
  <div class="section">
    <div class="columns">
      <div class="column is-6">
        <div class="box">
          <div class="field">
            <label for="email" class="label">Email</label>
            <div class="control">
              <input type="email" class="input is-info" v-model="email" placeholder="Email">
            </div>
          </div>

          <div class="field">
            <label for="password" class="label">Password</label>
            <div class="control">
              <input type="password" class="input is-info" v-model="password" placeholder="Password">
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link" @click="signUp">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: "",
        password: "",
      }
    },
    methods: {
      signUp() {
        const user = {
          email: this.email,
          password: this.password,
        }

        this.$store.dispatch('login/signUp', user)
      }
    }
  }
</script>
