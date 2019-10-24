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
              <p class="control">
                <button type="submit" class="button">
                  Search
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
