<template>
  <div class="skill-progress">
      <div class="progress-bar">
          <div v-for="index in step" :key="index" class="progress-item"></div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"


@Component({
    name: "SkillProgress"
})
export default class SkillProgress extends Vue {
    // Props
    @Prop() readonly step!: number
}
</script>

<style>

</style>