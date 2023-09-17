<template>
   
    <div v-if="lodding">
        <img src="/src/assets/images/preloader.gif" width="50" height="50">
    </div>

    <button :class="['btn', 'btn-'+color, 'me-2 mb-2 mb-md-0 text-white']" v-else>
        <slot></slot>
    </button>

</template>

<script>
export default {
    props: {
        lodding: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String,
            default: 'primary',
        },
    }
}
</script>

<style scoped>

</style>