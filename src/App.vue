<template>
  <TransitionGroup name="slide-transition" tag="div">
    <TheToast 
      v-for="(toast, i) in toasts"
      :key="i"
      :toastType="toast.type"
      :toastMessage="toast.message">
    </TheToast>
  </TransitionGroup>


  <router-view></router-view>

</template>

<script>
import TheToast from "./components/TheToast.vue";
export default {
  data: () => ({
    toasts: [],
  }),
  components: {
    TheToast,
  },
  mounted() {
    this.$eventBus.on("toast", data => {
      this.toasts.push(data);
      this.removeToast();
    });
  },
  methods: {
    removeToast() {
      setTimeout(() => {
        this.toasts.shift();
      }, 2222)
    }
  }
}
</script>

<style scoped>
.slide-transition-enter-active,
.slide-transition-leave-active {
  transition: all 0.5s ease;
}
.slide-transition-enter-from,
.slide-transition-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>