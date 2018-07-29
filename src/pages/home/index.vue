<template>
    <div class="wrap">
        <title1 name="首页">
            <span slot="left" class="left">广州</span>
            <span slot="right" class="right">
                <img src="../../assets/fa.png" alt="">
            </span>
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

