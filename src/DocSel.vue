<script setup>
import { ref, onMounted } from 'vue'

// const props = defineProps(['msg'])

const b1 = ref(false)

onMounted(() => {

})
// 颜色初始化
const ccolorhere = ref('')
const ccolor = ref('')
const bcolor = ref('red')

// 块显示隐藏、c块颜色按钮控制方法
function replay() {
    b1.value = !b1.value
    ccolor.value=ccolorhere.value
}

const icol = ref(null)
function changecol(){
    bcolor.value=icol.value.value
    console.log(icol.value.value)
}


</script>

<template>
    <div :class="{box: b1}"> </div>
    <span><input type="text" v-model="ccolorhere">    <input type="color" v-model="ccolorhere"></span>
    <div @click=" replay " class="btn">replay&change content</div>

    <input type="text" ref="icol">
    <button @click="changecol">change color</button>
    <div class="btn" :style="{background: bcolor,color:ccolor}">change color</div>

</template>


<style scoped>
.box {
    height: 100px;
    width: 200px;
    background: #3a7475;
}

.btn {
    height: 50px;
    width: 120px;
    background: #3f9875;
    justify-content: center;
    cursor: pointer;
    display: flex;
    align-items: center;    
}
</style>