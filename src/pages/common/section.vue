<template>
    <div>
        <v-header></v-header>
        <v-side></v-side>
            这是sectionggg
        <v-footer></v-footer>
    </div>

</template>

<script>
import vHeader from './header'
import vFooter from './footer'
import vSide from './sidebar'
export default {
    components: { vHeader, vFooter, vSide }
}
</script>

<style lang="css">
</style>
