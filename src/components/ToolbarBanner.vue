<template>
    <div id="toolbar-banner">
        <header class="application-tool">
            <div class="left">
                <img class="logo" src="@/assets/logo.svg" alt="" />
                <span class="logo-txt">YJXS-Work</span>
            </div>

            <div class="right">
                <svg
                    viewBox="0 0 92.0899658203125 19.5810546875"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    class="glyph-box"
                    height="19"
                    width="19"
                >
                    <g transform="matrix(1 0 0 1 -8.740048828125055 45.0205078125)">
                        <path
                            d="M28.418-35.2051C28.418-40.625 24.0234-44.9707 18.5059-44.9707C13.1348-44.9707 8.74023-40.625 8.74023-35.2051C8.74023-29.7852 13.1348-25.4395 18.5059-25.4395C24.0234-25.4395 28.418-29.7852 28.418-35.2051ZM64.5508-35.2051C64.5508-40.625 60.2051-44.9707 54.7852-44.9707C49.4141-44.9707 45.0684-40.625 45.0684-35.2051C45.0684-29.7852 49.4141-25.4395 54.7852-25.4395C60.2051-25.4395 64.5508-29.7852 64.5508-35.2051ZM100.83-35.2051C100.83-40.625 96.4844-44.9707 91.0645-44.9707C85.5469-44.9707 81.2012-40.625 81.2012-35.2051C81.2012-29.7852 85.5469-25.4395 91.0645-25.4395C96.4844-25.4395 100.83-29.7852 100.83-35.2051Z"
                            fill="#a6cbe3"
                        ></path>
                    </g>
                </svg>
            </div>
        </header>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'ModuleSlot',
    setup() {
        return {};
    },
});
</script>

<style scoped lang="scss">
#toolbar-banner {
    background-color: rgba(37, 38, 40, 0.21);
    background-image: radial-gradient(circle at 25%, hsla(0, 0%, 100%, 0.2), rgba(50, 50, 50, 0.2) 80%);
    -webkit-backdrop-filter: blur(14px);
    backdrop-filter: blur(14px);
    position: sticky;
    top: 0;
    z-index: 999;

    header {
        padding: 0 16px;
        box-sizing: border-box;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
            display: flex;
            align-items: center;
            cursor: pointer;

            .logo {
                width: 16px;
                height: 16px;
                display: block;
            }

            .logo-txt {
                font-size: 15px;
                font-weight: bold;
                color: #f5f5f7;
                margin-left: 8px;
            }
        }

        .right {
            cursor: pointer;
        }
    }
}
</style>
