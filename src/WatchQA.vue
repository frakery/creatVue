<script setup>
import { ref } from "vue";
// import { watch } from "vue";
const iqu = ref('')
const tan = ref('')
const qudis = ref('none')
const andis = ref('none')
// function clear(a) {
//     clearInterval(a)
// }
// watch(() => iqu.value, async () => {
//     if (iqu.value.indexOf('?') > -1) { 
//         sub()
//     }
// })
const allow = ref(false)
const is_show = ref(true)

let round = 0;
// 对话记录
const logs = ref([

])
//数据更新时刷新v-for中元素
// watch(tan, () => {
//     is_show.value = false;

//     setTimeout(
//         () => { is_show.value = true; }, 10
//     )
// })

//low dialogs update
function update() {
    logs.value.pop()
    logs.value.push({
        rounds: round,
        question: iqu.value,
        answer: tan.value
    })
}

// 提交按钮方法
async function sub() {
    // 判断是否有问号
    if (iqu.value.indexOf('?') > -1 || iqu.value.indexOf('？') > -1) {
        qudis.value = 'flex'
        allow.value=true
        console.log(round)
        // 设计思考动效（失败）
        // const Thinking = setInterval(() => {
        //     setTimeout(() => { tan.value = 'Thinking.' }, 500)
        //     setTimeout(() => { tan.value = 'Thinking..' }, 1000)
        //     setTimeout(() => { tan.value = 'Thinking..' }, 1500)
        // }, 1500)
        logs.value.push({
            rounds: round,
            question: iqu.value,
            answer: 'Thinking...'
        })
        // tan.value = 'Thinking...'
        setTimeout(() => {
            andis.value = 'flex'
        }, 100);
        // 访问机器人聊天网站
        try {
            const res = await fetch(`https://api.helper.beingthink.com/api/qingyunke?msg="${iqu.value}"`)
            // clear(Thinking)
            tan.value = await res.json()
            tan.value = tan.value.data.msg
            update()
            round++
            allow.value=false
            // console.log(tan.value);
            // console.log(tan.value.data.msg);
        }
        catch (error) {
            // clear(Thinking)
            tan.value = "fail to reach the API." + error;
            update()
            allow.value=false
        }
        console.log(logs)
    }
    else {
        alert('请输入"?"结束')
    }
}


</script>

<template>
    <h1>I'm a stupid robot</h1>
    <h2>Don't ask me any difficult problem</h2>
    <div class="curr_show" v-if="is_show">
        <div class="container" v-for="log in logs" :key="log.round">
            <div class="qubl" :style="{ display: qudis }">
                <div class="question">{{ log.question }}</div>
                <div class="qute">&gt;Question</div>
            </div>

            <div class="anbl" :style="{ display: andis }">
                <div class="ante">Answer&lt;</div>
                <div class="answer">{{ log.answer }}</div>
            </div>
        </div>
    </div>
    <div class="input">
        <div>輸入問題：</div><input type="text" class="inqu" v-model="iqu">
        <button @click="sub" :disabled="allow">發送↑</button>
    </div>
</template>

<style scoped>
body {
    height: 100%;
}

.container {
    background: rgb(255, 255, 255);
    width: 800px;
}

.anbl,
.qubl {
    display: flex;
}

.ante {
    margin-top: 20px;
}

.question {
    margin-left: 250px;
    border: 1px black solid;
    border-radius: 20px;
    padding: 20px;
    height: auto;
    width: 170px;
    background: rgb(85, 210, 85);
}


.answer {
    margin-top: 20px;
    padding: 20px;
    border: 1px black solid;
    border-radius: 20px;
    height: auto;
    width: 170px;
    background: rgb(85, 210, 85);
}

.input {
    display: flex;
    width: 800px;
    margin-top: 40px;
    bottom: 0px;
}

button {
    background-color: #29576e;
    cursor: pointer;
    /* Green */
    border: none;
    color: white;
    padding: 5px 6px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 50px;
    align-self: flex-end;
}
</style>