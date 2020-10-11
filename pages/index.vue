<template>
  <div class="container">
    <b-container class="content-container">
      <div class="content-container__content">
        <p class="emma-statement">
          Hey! I'm Emma and I'm here to help you with your professional growth.
          <br />
          Are you ready?
        </p>

        <div class="content__button-row">
          <b-button class="secondary">Back</b-button>
          <b-button class="primary" @click="navigateNext">Let's go!</b-button>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({
  name: "WelcomeScreen"
})
export default class WelcomeScreen extends Vue {
  // Methods
  public navigateNext() {
    this.$router.push({ path: "/zde" })
  }
}
</script>

<style></style>
