<script>
// import {ref} from 'vue'
import TrySlot from './components/TrySlot.vue';
export default{
    component:{TrySlot},
    setup(){
        return{
            TrySlot
        }
    }
}
</script>

<template>
    <TrySlot> </TrySlot>
</template>