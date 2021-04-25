<template>
  <header class="header">
    <div class="header-content">
      <div class="header-logo">
        <span class="header-logo-secondary">Halyk</span>
        <span class="header-logo-primary">volunteers</span>
      </div>
      <halyk-button @click="$router.push('/login')" type="border"
        >Войти</halyk-button
      >
    </div>
  </header>
</template>

<script>
import halykButton from "@/components/common/halyk-button.vue";

export default {
  components: {
    "halyk-button": halykButton,
  },

  data() {
    return {
      user: { firstName: "" },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.header {
  position: absolute;
  width: 100vw;
  height: 100px;
  left: 0;
  top: 0;
  border-bottom: 2px solid #b2bec350;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

  &-content {
    margin: auto;
    height: 100%;
    padding: 0 30px;
    max-width: 1220px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &-logo {
    color: $secondary;
    font-size: 30px;
    font-weight: 700;

    &-secondary {
      margin-right: 10px;
    }

    &-primary {
      color: $primary;
      font-size: 26px;
      font-weight: 700;
    }
  }
}
</style>
