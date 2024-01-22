<script>
import PartVue from './components/Part.vue'
import { ref } from 'vue'
import FormSlot from './components/FormSlot.vue';
export default {
    name: 'FatherComp',
    components: {
        PartVue,
        FormSlot
    },
    setup(props) {
        console.log(props);
        const hi = ref('nihao')
        let n = 1;
        const a = setInterval(() => {
            hi.value = `nihao x${n}`
            n++
        }, 1000);

        function add(a1, a2) {
            return a1 + a2;
        }
        function stop() {
            clearInterval(a)
        }

        const form = ref({
            pwd: ''
        })



        return {
            hi,
            add,
            stop,
            form,

        }
    }
}
</script>

<template>
    <ChildComp :add="add"></ChildComp>
    <PartVue :msg="hi"></PartVue>
    <!-- <child-comp result="right?"></child-comp> -->
    <part-vue msg="yoshi"></part-vue>
    <el-form :model="form" label-width="120px" >
        <el-form-item>
            <template v-slot:label>password:</template>
            <el-input v-model="form.pwd" type="password" show-password placeholder="123456" />
        </el-form-item>
        <el-form-item>
            <el-button @click="stop" class="well">pointme</el-button>
        </el-form-item>
    </el-form>
    <div>
        <br><br>
    </div>
    <FormSlot>
        <template v-slot:header>123</template>
        <div>456</div>
        <template v-slot:footer>
            <div>789</div>
        </template>
    </FormSlot>
</template>

<style scoped>
.well {
    color: rgb(187, 133, 68);
}

</style>
