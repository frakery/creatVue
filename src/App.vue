<template>
  <div>
    <h2 class="title">{{ text }} 她現在{{ weight }} 斤重了！</h2>
    <button v-on:click="controller">{{ swit }}</button>
  </div>
</template>



<script>
import { ref } from 'vue';
export default {
  name: 'App',
  setup() {
    const text = ref('AYT is a pig')
    const weight = ref(200)
    const swit = ref('豬豬公主不想被噶，不吃了!')
    let timer = setInterval(() => {
      weight.value++
    }, 1500)

    // 按钮点击事件
    function controller() {
      if (swit.value == '豬豬管不了那麼多了，繼續吃!') {
        swit.value = '豬豬公主不想被噶，不吃了!'
        timer = setInterval(() => {
          weight.value++
        }, 1500)
      }
      else {
        swit.value = '豬豬管不了那麼多了，繼續吃!'
        clearInterval(timer)
      }
    }

    return {
      text,
      weight,
      swit,
      controller
    }
  }
}
</script>



<style scoped>
button {
  background-color: #4CAF50;
  /* Green */
  border: none;
  color: white;
  margin-top: 30px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 50px;
}

button:hover {
  cursor: pointer;
}
</style>
