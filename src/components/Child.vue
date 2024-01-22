<script>
export default{
    name:'ChildComp',
    props:['result','add'],
    setup(){
        
    }
}
</script>

<template>
    <!-- <div>ChildComp</div> -->
    <!-- <div>result={{result}}</div> -->
    <div>add={{ add(1,2) }}</div>
</template>