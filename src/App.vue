<template>
  <div>
    <h2 class="title">{{ text }} 她現在{{ weight }} 斤重了！</h2>
  </div>
</template>



<script>
import { ref } from 'vue';
export default {
  name:'App',
  setup(){
    const text = ref('AYT is a pig')
    const weight = ref(1)
    setInterval(()=>{
      weight.value++
    },1500)
    return {
      text,
      weight
    }
  }
}
</script>



<style scoped></style>
