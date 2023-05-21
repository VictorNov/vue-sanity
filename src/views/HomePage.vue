<template>
  <div>
    <div>
      <router-link to="/admin" target="_blank">Admin</router-link>
    </div>
    <h1>Home</h1>
    <div>
      <div
          v-for="skill in skills"
          :key="skill._id"
          class="skill"
      >
        <div class="skill__image" :style="{ backgroundColor: skill.bgColor }">
          <img  :src="useImageUrl(skill.image).width(200).height(200)" alt="skill.name" />
        </div>
        <p>{{ skill.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/api'
import { useImageUrl } from '@/composables/image.js'

const skills = ref([])

onMounted(async () => {
  skills.value = await api.skills.getSkills()
})
</script>

<style lang="scss" scoped>
.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  font-size: 20px;

  &__image {
    width: 200px;
    height: 200px;
    padding: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
