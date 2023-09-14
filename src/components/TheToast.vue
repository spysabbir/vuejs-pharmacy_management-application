<template>
<div :class="['alert', 'alert-'+toastType, 'alert-dismissible fade show']" role="alert">
  <strong>{{ toastMessage }}</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
</template>

<script>
export default {
    props: {
        toastType: {
            type: String,
            default: "success"
        },
        toastMessage: {
            type: String,
            default: "Toster Message."
        }
    }
}
</script>

<style scoped>

</style>