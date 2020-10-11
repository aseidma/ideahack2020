<template>
  <div class="skills">
    <div class="container">
      <b-container class="content-container">
        <div class="content-container__content">
          <p class="emma-statement">Can I suggest you some skills?</p>
          <b-input
            @keyup="search"
            class="emma-question"
            v-model="searchTerm"
            placeholder="Look for a skill..."
          ></b-input>
          <SkillCloud v-model="pickedSkills" style="margin-bottom: 3rem" :skills="skills" />
          <SkillProgress style="margin-bottom: 3rem" :skills="pickedSkills" />
          <b-button :class="[{ 'primary': pickedSkills.length === 15, 'secondary': pickedSkills.length < 15 }]" :disabled="pickedSkills.length === 15">Got it!</b-button>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SkillCloud from '@/components/SkillCloud.vue'
import SkillProgress from '@/components/SkillProgress.vue'
import algoliasearch from 'algoliasearch'
import debounce from 'lodash.debounce'

interface SkillPill {
  preferredLabel: string
  picked: boolean
  objectID: string
  conceptUri: string
}

@Component({
  name: 'Skills',
  components: {
    SkillCloud,
    SkillProgress,
  },
})
export default class Skills extends Vue {
  // Data
  private index: any
  public searchTerm: string = ''
  public skills: SkillPill[] = []

  public pickedSkills: SkillPill[] = []

  // Methods
  public search() {
    if (!this.searchTerm) return

    debounce(this.getSearchResults, 350)(this.searchTerm)
  }

  private async getSearchResults(searchTerm: string) {
    const { hits: skills } = await this.index.search(this.searchTerm, {
      hitsPerPage: 15,
    })

    for (let skill of skills) {
      skill = { ...skill, picked: false }
    }

    this.skills = skills
  }

  private navigateNext() {
    // TODO: Trigger Algorithm with picked skills
    this.$store.dispatch("findMatchingOccupations", this.pickedSkills)

    // Navigate to the next page
  }

  // Hooks
  mounted() {
    const ALGOLIA_APP_ID = 'JZYHS0Z7PP'
    const ALGOLIA_API_KEY = 'd1666df9371eb1a1d01aab76e56e86dc'

    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY, {})

    this.index = client.initIndex('prod_skills')

    this.getSearchResults('sprinklers')
  }
}
</script>

<style></style>
