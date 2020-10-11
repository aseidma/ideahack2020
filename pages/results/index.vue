<template>
  <div class="results">
    <div class="container">
      <b-container class="content-container">
        <div class="content-container__content">
          <div v-if="results.length">
            <div
              v-for="result of results"
              :key="result"
              class="content__ranking"
            >
              <h1>{{ `#${results.indexOf(result) + 1} Match` }}</h1>
              <h3 v-for="entry of result" :key="entry">{{ entry }}</h3>
              <hr style="margin: 3rem 0" />
            </div>
          </div>
          <div v-else style="text-align: center;">
              <h2>Just a moment...</h2>
              <img src="@/assets/graphics/circles-menu-1.gif" alt="loading">
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'Results',
})
export default class Results extends Vue {
  // Computed
  get results() {
    const { data } = this.$store.state.matchingOccupations

    // It works!!!
    if (data) {
      return data
    } else {
      return []
    }
  }
}
</script>

<style></style>
