<template>
    <button class="btn btn-primary me-2 mb-2 mb-md-0 text-white">
        <slot></slot>
    </button>

    <div v-if="lodding">
        <img src="https://cdn-media-1.freecodecamp.org/images/1*F_5AEXIfr1AXuShXhYT4zg.gif" width="50" height="50">
    </div>
</template>

<script>
export default {
    props: {
        lodding: {
            type: Boolean,
            default: false,
        },
    }
}
</script>

<style scoped>

</style>