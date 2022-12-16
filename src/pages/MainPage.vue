<template>
    <div id="main">
        <div class="main-background"></div>
        <div class="main-content">
            <module-slot pTitle1="Time" class="w1">
                <template v-slot:moduleSlot>
                    <div class="df-column">
                        <div class="icon-txt-box">
                            <img src="@/assets/工作.svg" alt="" />
                            <div class="icon-txt-1">
                                <span class="icon-txt1">今天已认真工作</span>
                                <span class="icon-txt2">{{ goToWorkTime }}</span>
                            </div>
                        </div>

                        <div class="icon-txt-box">
                            <img src="@/assets/生活休闲.svg" alt="" />
                            <div class="icon-txt-1">
                                <span class="icon-txt1">距离开始午休还有</span>
                                <span class="icon-txt2">{{ lunchBreak }}</span>
                            </div>
                        </div>

                        <div class="icon-txt-box">
                            <img src="@/assets/闹钟.svg" alt="" />
                            <div class="icon-txt-1">
                                <span class="icon-txt1">距离午休结束还有</span>
                                <span class="icon-txt2">{{ lunchBreakOver }}</span>
                            </div>
                        </div>

                        <div class="icon-txt-box">
                            <img src="@/assets/咖啡.svg" alt="" />
                            <div class="icon-txt-1">
                                <span class="icon-txt1">距离下班还有</span>
                                <span class="icon-txt2">{{ afterWorkTime }}</span>
                            </div>
                        </div>
                    </div>
                </template>
            </module-slot>
            <module-slot pTitle1="Shortcut" class="w2">
                <template v-slot:moduleSlot>
                    <div class="display-grid3">
                        <a class="a-instruction" href="weixin://dl/business/?t=QDZVQEO2z9f" target="_block">粤康码</a>
                    </div>
                </template>
            </module-slot>
        </div>

        <div class="main-content">
            <module-slot pTitle1="Weather" :pTitle2="'更新时间：' + updateTime" class="w2">
                <template v-slot:moduleSlot>
                    <div class="display-grid1">
                        <div>今天已认真工作：{{ goToWorkTime }}</div>
                        <div>距离下班还有：{{ afterWorkTime }}</div>
                    </div>
                </template>
            </module-slot>
            <module-slot pTitle1="Shortcut" class="w1">
                <template v-slot:moduleSlot>
                    <div class="display-grid3">
                        <a class="a-instruction" href="weixin://dl/business/?t=QDZVQEO2z9f" target="_block">粤康码</a>
                    </div>
                </template>
            </module-slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import httpRequest from '@/api/axios';

export default defineComponent({
    name: 'MainPage',
    setup() {
        const goToWorkTime = ref('--');
        const lunchBreak = ref('--');
        const lunchBreakOver = ref('--');
        const afterWorkTime = ref('--');
        const updateTime = ref('--');
        var sitBackState = false;

        function getTime() {
            var nowDate = new Date();
            // 获取现在时间的时间戳
            var yy = nowDate.getFullYear();
            var mm = nowDate.getMonth() + 1;
            var dd = nowDate.getDate();
            // 上班时间09点
            var time1 = new Date(yy + '/' + mm + '/' + dd + ' 09:00:00').getTime();
            // 下班时间18点
            var time2 = new Date(yy + '/' + mm + '/' + dd + ' 18:00:00').getTime();
            // 当前时间戳
            var nowTime = nowDate.getTime();
            // 午休时间12点
            var time3 = new Date(yy + '/' + mm + '/' + dd + ' 12:00:00').getTime();
            // 午休结束时间14点
            var time4 = new Date(yy + '/' + mm + '/' + dd + ' 14:00:00').getTime();

            if (time3 - nowTime >= 0) {
                sitBackState = false;
                lunchBreak.value = count(nowTime, time3);
            } else {
                time1 += 1000 * 3600 * 2;
                sitBackState = true;
                lunchBreak.value = '今日午休已结束';
            }

            if (time2 - nowTime >= 0) {
                goToWorkTime.value = count(time1, nowTime);
                afterWorkTime.value = count(nowTime, time2);
            } else {
                goToWorkTime.value = '今日已经下班了';
                afterWorkTime.value = '今日已经下班了';
            }

            if (time4 - nowTime >= 0) {
                lunchBreakOver.value = count(nowTime, time4);
            } else {
                lunchBreakOver.value = '今日午休已结束';
            }
        }

        function count(time1: number, time2: number) {
            var time = (time2 - time1) / 1000 / 60 / 60;
            var h = Math.floor(time);
            var m = Math.floor((time % 1) * 60);
            var s = Math.floor((((time % 1) * 60) % 1) * 60);

            return h + '小时' + m + '分钟' + s + '秒';
        }

        getTime();

        setInterval(() => {
            getTime();
        }, 1000);

        // httpRequest({
        //     url: 'https://devapi.qweather.com/v7/weather/now?location=101010100&key=b347e2035586440fb236491d9457246c',
        //     method: 'GET',
        // }).then(
        //     (res: any) => {
        //         if (res.code == '200') {
        //             console.log(res);
        //             updateTime.value = res.updateTime;
        //         }
        //     },
        //     (error: any) => {
        //         console.log(error);
        //     }
        // );

        return { goToWorkTime, afterWorkTime, lunchBreak, lunchBreakOver };
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
        display: flex;
        flex-wrap: wrap;

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

        .display-grid1 {
            display: grid;
            grid-template-columns: repeat(1, minmax(0, 1fr));
            row-gap: 30px;
            column-gap: 12px;
        }
    }
}

@media (max-width: 759px) {
    .main-content {
        width: 100%;
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
        justify-content: space-between;
        .w1 {
            width: 315px;
        }
        .w2 {
            width: 660px;
        }
    }
}

.df-column {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
}

.icon-txt-box {
    display: flex;
    align-items: center;

    img {
        width: 40px;
        height: 40px;
        display: block;
        margin-right: 16px;
    }

    .icon-txt-1 {
        display: flex;
        align-items: flex-start;
        flex-direction: column;

        .icon-txt1 {
            font-size: 21px;
            font-weight: 600;
            line-height: 25px;
            color: #000;
        }
        .icon-txt2 {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            color: #515154;
        }
    }
}
</style>
