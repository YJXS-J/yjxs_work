<template>
    <div id="main">
        <div class="main-background"></div>
        <div class="main-content">
            <module-slot pTitle="快捷指令" class="w2">
                <template v-slot:moduleSlot>123</template>
            </module-slot>
            <module-slot pTitle="快捷指令" class="w1">
                <template v-slot:moduleSlot>123</template>
            </module-slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
    name: 'MainPage',
    setup() {
        return {};
    },
});
</script>

<style scoped lang="scss">
#main {
    background-image: url(http://localhost:8081/img/wallpaper.2e317211.webp);
    position: absolute;
    inset-inline-start: 0;
    inset-block-start: 0;
    inline-size: 100%;
    block-size: 100%;
    background-color: #32a2f6;
    background-position: 50%;
    background-size: cover;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 900px;
    z-index: -1;
    padding-top: 75px;

    .main-content {
        margin: 0 auto;
    }
}

@media (max-width: 759px) {
    .main-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .w1 {
            width: 315px;
        }
        .w2 {
            width: 315px;
        }
    }
}
@media (min-width: 760px) and (max-width: 1164px) {
    .main-content {
        width: 690px;
        display: flex;
        justify-content: space-between;
        .w1 {
            width: 315px;
        }
        .w2 {
            width: 315px;
        }
    }
}
@media (min-width: 1165px) {
    .main-content {
        width: 1035px;
        display: flex;
        justify-content: space-between;
        .w1 {
            width: 315px;
        }
        .w2 {
            width: 660px;
        }
    }
}
@media (min-width: 1690px) {
    .main-content {
        width: 1380px;
        display: flex;
        justify-content: space-between;

        .w1 {
            width: 315px;
        }
        .w2 {
            width: 660px;
        }
    }
}
</style>
