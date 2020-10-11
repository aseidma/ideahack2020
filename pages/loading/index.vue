<template>
  <div class="loading">
    <div class="container">
      <b-container class="content-container">
        <div class="content-container__content">
          <p class="emma-statement">{{ randomCompliment }}</p>
          <img src="@/assets/graphics/circles-menu-1.gif" alt="loading icon" class="loading-icon">
        </div>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'Loading',
})
export default class Loading extends Vue {
  // Data
  public randomCompliment: string = ''

  // Hooks
  async mounted() {
    try {
      const res: { data: { compliment: string } } = await axios.get(
        'https://complimentr.com/api'
      )

      this.randomCompliment = res.data.compliment[0].toUpperCase() + res.data.compliment.slice(1,) + "."
    } catch (error) {
        console.log(error)
    }

    setTimeout(() => {

      console.log(this.$route.query)
      if (this.$route.query.results == "true") {
        return this.$router.push({ path: "/results" })
      }

        this.$router.push({ path: "/zde/job-title/skills" })
    }, 2000)
  }
}
</script>

<style></style>
