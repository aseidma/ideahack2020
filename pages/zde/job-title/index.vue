<template>
  <div class="job-title">
    <div class="container" @keyup.enter="navigateNext">
      <b-container class="content-container">
        <div class="content-container__content">
          <p class="emma-statement">So, what is your current job title?</p>
          <b-input class="emma-question" v-model="jobTitle" placeholder="Enter your job title"></b-input>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'JobTitle',
})
export default class JobTitle extends Vue {
  // Data
  public jobTitle: string = ''

  // Methods
  public navigateNext() {
    // Do absolutely nothing with the provided Job title and continue
    this.$router.push({ path: '/loading' })
  }
}
</script>

<style></style>
