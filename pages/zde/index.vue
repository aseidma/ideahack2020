<template>
  <div class="zde">
    <div class="container">
      <b-container class="content-container">
        <div class="content-container__content">
          <p class="emma-statement">What brings you here today?</p>

          <div class="content-container__button-row">
            <b-button v-for="option in options" :key="option" @click="pickOptionAndNavigateNext" class="secondary">
              {{ option }}
            </b-button>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'ZDE',
})
export default class ZDE extends Vue {
  // Data
  public options = ['I want to learn new skills', 'Find new job openings']

  // Methods
  public pickOptionAndNavigateNext() {
      // Do absolutely nothing with the selected option and proceed
      this.$router.push({ path: "/zde/job-title" })
  }
}
</script>

<style></style>
