<template>
  <div class="skills">
      <div class="container">
          <b-container class="content-container">
              <div class="content-container__content">
                  <p class="emma-statement">Can I suggest you some skills?</p>
                  <b-input class="emma-question" v-model="enteredSkill" placeholder="Add a skill"></b-input>
                  <SkillCloud />
              </div>
          </b-container>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import SkillCloud from "@/components/SkillCloud.vue"

@Component({
    name: "Skills",
    components: {
        SkillCloud
    }
})
export default class Skills extends Vue {
    // Data
    public enteredSkill: string = ""

}
</script>

<style>

</style>