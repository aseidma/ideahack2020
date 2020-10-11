<template>
  <div class="skill-progress">
    <div class="progress-bar">
      <div
        v-for="position in 15"
        :key="position"
        @mouseover="toggleSkillHover(position, true)"
        @mouseleave="toggleSkillHover(position, false)"
        :class="[
          'skill',
          {
            picked: skillList[position - 1],
            hovered: skillList[position - 1]
              ? skillList[position - 1].hovered
              : false,
          },
        ]"
      >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'nuxt-property-decorator'

interface SkillPill {
  preferredLabel: string
  picked: boolean
  objectID: string
  conceptUri: string
  hovered?: boolean
}

@Component({
  name: 'SkillProgress',
})
export default class SkillProgress extends Vue {
  // Props
  @Prop() readonly skills!: SkillPill[]

  // Data
  public skillList: SkillPill[] = []

  // Watchers
  @Watch('skills')
  private parseSkills(nv: SkillPill[]) {
    this.skillList = nv.map((skill) => ({ ...skill, hovered: false }))
  }

  // Methods
  public toggleSkillHover(position: number, value: boolean) {
    const index = position - 1

    if (this.skillList[index]) {
      this.skillList[index].hovered = value
    }
  }
}
</script>

<style>
.skill-progress .progress-bar {
  display: flex;
  width: 140%;
  margin: 0 -20%;
  justify-content: space-between;
}

.skill-progress .skill {
  min-width: 1.7rem;
  min-height: 1.7rem;
  width: auto;
  white-space: nowrap;
  border-radius: 1rem;
  background-color: #e8f1de;
  border: 2px solid #a8cc7b;
  transition: all 0.4s;
}

.skill-progress .skill.picked {
  background-color: #a8cc7b;
}

.skill-progress .skill.hovered {
  /* background-color: red; */
}

.skill-progress .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.skill-progress .fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
