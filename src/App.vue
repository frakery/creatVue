<template>
  <div>
    <h2 class="title">{{ text }}</h2>
  </div>
</template>



<script>
import { ref } from 'vue';
export default {
  name:'App',
  setup(){
    const text = ref('AYT is a pig')
    return {
      text
    }
  }
}
</script>



<style scoped></style>
