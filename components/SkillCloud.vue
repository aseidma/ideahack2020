<template>
  <div class="skill-cloud">
      <div class="skill-pill" :style="`margin: 15px ${10 + Math.random() * 30}px`" v-for="skillPill in skills" :key="skillPill.id">{{ skillPill.title }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

interface SkillPill {
    title: string;
    picked: boolean;
    id: string;
}

@Component({
    name: "SkillCloud"
})
export default class SkillCloud extends Vue{
    // Data
    public skills: SkillPill[] = [
        { title: 'some skills', picked: false, id: "1" },
        { title: 'some skills', picked: false, id: "2" },
        { title: 'some skills', picked: false, id: "3" },
        { title: 'some skills', picked: false, id: "4" },
        { title: 'some skills', picked: false, id: "5" },
        { title: 'some skills', picked: false, id: "6" },
        { title: 'some skills', picked: false, id: "7" },
        { title: 'some skills', picked: false, id: "8" },
        { title: 'some skills', picked: false, id: "9" },
        { title: 'some skills', picked: false, id: "10" },
        { title: 'some skills', picked: false, id: "11" },
        { title: 'some skills', picked: false, id: "12" },
        { title: 'some skills', picked: false, id: "13" },
        { title: 'some skills', picked: false, id: "14" },
        { title: 'some skills', picked: false, id: "15" },
        { title: 'some skills', picked: false, id: "16" },
        { title: 'some skills', picked: false, id: "17" },
        { title: 'some skills', picked: false, id: "18" },
    ]

    // Hooks
    mounted() {
        // TODO: Populate skills array
    }
}
</script>

<style>
.skill-cloud {
    display: flex;
    flex-wrap: wrap;
    width: 140%;
    margin: 0 -20%;
    justify-content: center;
}

.skill-cloud .skill-pill {
    font-family: "Montserrat", "sans-serif";
    font-size: 20px;
    line-height: 110%;
    background-color: #e8f1de;
    padding: 10px 30px 10px 30px;
    border: 2px solid #A8CC7B;
    border-radius: 2rem;
    margin: 15px 10px;
}
</style>