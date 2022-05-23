<template>
  <router-view></router-view>
  <ConnectWallte></ConnectWallte>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ConnectWallte from './components/ConnectWallteExample.vue';
export default defineComponent({
  name: 'App',
  components: {
        ConnectWallte,
  },
})
</script>

<style></style>
