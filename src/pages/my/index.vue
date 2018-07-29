<template>
    <div class="wrap">
        <title1 name="我的" back="true">
        </title1>
        <div class="content">
            内容
        </div>
    </div>
</template>

<script>
import Title1 from '@/components/title'
export default {
    components:{
        Title1
    }
}
</script>

<style>
.left {
    position: absolute;
    left: .1rem;
}
.right {
   position: absolute;
   right: .1rem;
   top: .05rem; 
}
.right img {
    height: .25rem;
}
</style>

