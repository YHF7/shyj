<template>
    <div class="title">
        <img v-if="back=='true'"  class="back" src="../assets/back.png" alt="">
        {{name}}

        <slot name="left"></slot>
        <slot name="right"></slot>
    </div>
</template>

<script>
export default {
    props:["name","back"]
}
</script>

<style>
.title{
    background: #f29004;
    color: white;
    font-size: .18rem;
    line-height: .4rem;
    text-align: center;
}
.back{
    position: absolute;
    top: .1rem;
    left: .1rem;
    height: .2rem;
}
</style>

