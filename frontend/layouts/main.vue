<template>
    <div>
        <main-nav></main-nav>
        <Nuxt />
    </div>
</template>
<script>
import MainNav from "~/components/MainNav.vue"
export default {
    components: {
        MainNav

    }
}
</script>