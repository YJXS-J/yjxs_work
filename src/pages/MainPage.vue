<template>
    <div id="main">
        <div class="main-background"></div>
        <div class="main-content">
            <module-slot pTitle="快捷指令" class="w2">
                <template v-slot:moduleSlot>
                    <div class="display-grid3">
                        <a class="a-instruction" href="weixin://dl/business/?t=QDZVQEO2z9f" target="_block">粤康码</a>
                        <a
                            class="a-instruction"
                            href="weixin://dl/business/?t=QDZVQEO2z9f/operation_plus/pages/yiqing/daka/worker/inspector/fast-result/index?scene=id%3D2ZYWBH4%2Ccp%3D0"
                            target="_block"
                        >
                            粤康码2
                        </a>
                    </div>
                </template>
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
    padding: 25px 0;
    position: relative;
    .main-background {
        min-height: 100vh;
        background-image: url(@/assets/wallpaper.webp);
        position: absolute;
        background-color: #32a2f6;
        top: -50px;
        right: 0;
        bottom: 0;
        left: 0;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }

    .main-content {
        max-width: 1380px;
        margin: 0 auto;

        .display-grid3 {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            row-gap: 12px;
            column-gap: 12px;

            .a-instruction {
                display: inline-block;
                background-color: transparent;
                border: 1px solid rgb(22, 93, 255);
                text-align: center;
                color: rgb(22, 93, 255);
                height: 32px;
                line-height: 32px;
                font-size: 14px;
                border-radius: 2px;
            }
        }
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
</style>
