<template>
  <div class="docker">
    <img :src="logo" class="icon" />
    <img :src="logo" class="icon" />
    <img :src="logo" class="icon" />
    <img :src="logo" class="icon" />
  </div>
</template>

<script>
import logo from '@/assets/docker-icon/logo.png'

export default {
  name: 'Docker',
  data() {
    return {
      logo
    }
  }
}
</script>

<style scoped>
.docker {
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  width: 300px;
}

.icon {
  width: 48px;
  height: 48px;
  margin: 5px;
}
</style>
