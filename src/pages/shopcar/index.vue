<template>
    <div class="wrap">
        <title1 name="购物车">
            <span slot="right" class="right">
                编辑
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
.right {line-height: .4rem;position: absolute;top: 0;}
</style>

