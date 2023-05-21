<template>
  <div>
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div id="admin-panel" />
  </div>
</template>

<script setup>
import { renderStudio, defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import {onMounted} from "vue";

const config = defineConfig({
  plugins: [
    deskTool({
      name: 'admin',
      title: 'Admin',
      structure: S => S.documentTypeList('skills'),
    }),
  ],
  name: 'Testing',
  projectId: import.meta.env.VITE_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  schema: {
    types: [
      {
        type: 'document',
        name: 'skills',
        title: 'Skills',
        fields: [
          {
            type: 'string',
            name: 'name',
            title: 'Name',
          },
          {
            type: 'image',
            name: 'image',
            title: 'Image',
            description: 'If image is not loaded, try to hit select button.',
            options: {
              hotspot: true,
            },
          },
          {
            type: 'string',
            name: 'bgColor',
            title: 'Background Color',
          },
        ],
      }
    ]
  }
})

onMounted(() => {
  renderStudio(document.getElementById('admin-panel'), config)
})
</script>

<style lang="scss" scoped>
#admin-panel {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overscroll-behavior: none;
  -webkit-font-smoothing: antialiased;
  overflow: auto;
}
</style>
