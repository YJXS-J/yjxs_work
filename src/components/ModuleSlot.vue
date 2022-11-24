<template>
    <div id="module-slot">
        <div class="title">{{ pTitle }}</div>
        <div class="module-content">
            <slot name="moduleSlot"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
    name: 'ModuleSlot',
    props: {
        pTitle: { type: String, default: '' },
        pWidth: { type: String, default: '' },
    },
    setup() {
        return {};
    },
});
</script>

<style scoped lang="scss">
#module-slot {
    height: 315px;
    margin: 15px;
    border-radius: 16px;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    background-color: rgba(248, 248, 252, 0.85);
    -webkit-backdrop-filter: blur(15px) saturate(86%);
    backdrop-filter: blur(15px) saturate(86%);

    .title {
        padding-left: 20px;
        height: 45px;
        line-height: 45px;
        font-size: 21px;
        font-weight: 600;
        color: #000;
        box-sizing: border-box;
    }

    .module-content {
        height: 270px;
        box-sizing: border-box;
        padding: 20px;
        background: #fff;
    }
}
.w660 {
    width: 660px;
}

.w315 {
    width: 315px;
}
</style>
