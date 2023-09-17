<template>
  <div class="alert-box">
    <TransitionGroup name="toast-transition" tag="div">
      <TheToast 
        v-for="(toast, i) in toasts"
        :key="i"
        :toastType="toast.type"
        :toastMessage="toast.message">
      </TheToast>
    </TransitionGroup>
  </div>

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
      }, 3000)
    }
  }
}
</script>

<style scoped>
.alert-box {
    position: absolute;
    right: 25px;
    top: 25px;
    z-index: 99999999999999999;
}
.toast-transition-move,
.toast-transition-enter-active,
.toast-transition-leave-active {
  transition: all 0.5s ease;
}

.toast-transition-enter-from,
.toast-transition-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>