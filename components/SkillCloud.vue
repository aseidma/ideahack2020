<template>
  <div class="skill-cloud">
    <div
      class="skill-pill"
      :style="`margin: 18px ${10 + Math.random() * 30}px`"
      v-for="skillPill in skills"
      :key="skillPill.id"
      @click="pickSkill(skillPill)"
      :class="{ picked: pickedSkills.includes(skillPill) }"
    >
      {{ skillPill.preferredLabel }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator'


interface SkillPill {
  preferredLabel: string
  picked: boolean
  objectID: string
  conceptUri: string
}

@Component({
  name: 'SkillCloud',
})
export default class SkillCloud extends Vue {
  @Prop() readonly skills!: SkillPill[]

  // Data
  public pickedSkills: SkillPill[] = []


  @Emit("input")
  public pickSkill(skill: SkillPill) {
    if (this.pickedSkills.includes(skill)) {
      const index = this.pickedSkills.indexOf(skill);

      this.pickedSkills.splice(index, 1);

      return this.pickedSkills;
    }

    if (this.pickedSkills.length === 15)
      return this.pickedSkills

    this.pickedSkills.push(skill)

    return this.pickedSkills
  }
}
</script>

<style>
.skill-cloud {
  display: flex;
  flex-wrap: wrap;
  min-width: 160%;
  margin: 0 -30%;
  overflow: hidden;
  justify-content: center;
  height: 30rem;
}

.skill-cloud .skill-pill {
  font-family: 'Montserrat', 'sans-serif';
  font-size: 20px;
  line-height: 110%;
  background-color: #e8f1de;
  padding: 10px 30px 10px 30px;
  border: 2px solid #a8cc7b;
  border-radius: 2rem;
  max-height: 44px;
  transition: background-color .4s ease-in-out;
}

.skill-cloud .skill-pill.picked {
  background-color: #a8cc7b;
}
</style>
