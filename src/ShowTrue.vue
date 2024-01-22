<script>
import { ref } from 'vue'
export default {
    name: 'show-true',
    setup() {
        const wukong = ref('monkey')
        function isTrue() {
            return wukong.value === 'monkey'
        }

        const dialogs = ref([
        {
            log: 'monkey'
        },
        {
            log: 'money'
        },
        {
            log: 'mokey'
        },
        {
            log: 'monkey'
        }
        ])

        return {
            wukong,
            isTrue,
            dialogs
        }
    }
}
</script>

<template>
    <div v-if="isTrue()">我是真的</div>

    <div v-else>我才是真的</div>
    <!-- <div v-show="..."></div> -->
    <div v-for="dialog in dialogs" v-bind:key='dialog.log'>
        <div>{{ dialog.log }}</div>
    </div>
</template>