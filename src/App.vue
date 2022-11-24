<template>
    <ToolbarBanner />
    <router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ToolbarBanner from './components/ToolbarBanner.vue';

@Options({
    components: {
        ToolbarBanner,
    },
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
