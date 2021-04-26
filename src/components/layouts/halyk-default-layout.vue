<template>
  <div class="page">
    <halyk-header />
    <div class="page-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import halykHeader from "@/components/common/halyk-header.vue";

export default {
  components: {
    "halyk-header": halykHeader,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.page {
  padding: 0 30px;
  margin: auto;
  width: 100%;
  max-width: 1220px;
  height: 100%;
  box-sizing: border-box;
  min-height: 100vh;

  &-content {
    padding-top: 100px;
    width: 100%;
  }
}
</style>
