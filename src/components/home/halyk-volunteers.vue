<template>
  <div class="volunteers">
    <div class="volunteers-header">
      <h2 class="volunteers-title">Волонтеры</h2>
      <halyk-button type="border">Добавить</halyk-button>
    </div>
    <div v-if="volunteers[0]" class="volunteers-list">
      <div
        @click="$emit('change-active-volunteer')"
        v-for="volunteer in volunteers"
        :key="volunteer.id"
        class="volunteers-volunteer"
      >
        <span class="volunteers-volunteer-label">{{
          volunteer.firstName
        }}</span>
        <span class="volunteers-volunteer-label">{{ volunteer.lastName }}</span>
      </div>
    </div>
    <div v-else class="volunteers-empty">
      <img
        src="@/assets/images/list-empty.svg"
        alt="Нету волонтеров"
        class="volunteers-empty-image"
      />
      <h2 class="volunteers-empty-title">Волонтеров пока нету</h2>
    </div>
  </div>
</template>

<script>
import halykButton from "@/components/common/halyk-button.vue";

export default {
  props: {
    volunteers: {
      type: Array,
    },
  },

  components: {
    "halyk-button": halykButton,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.volunteers {
  padding: 0 10px;
  padding-top: 20px;
  width: 33%;
  height: 100%;
  min-height: calc(100vh - 100px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #b2bec350;
  overflow: auto;

  &-header {
    margin-bottom: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &-title {
    color: $main-dark;
    font-size: 25px;
  }

  &-list {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &-volunteer {
    margin-bottom: 15px;
    padding: 15px 40px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 15px;
    background-color: transparent;
    cursor: pointer;
    border: 1px solid #b2bec350;
    transition: 200ms ease-in-out;

    &:hover {
      background-color: #b2bec330;
    }

    &-label {
      margin-right: 10px;
    }
  }

  &-empty {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-image {
      margin-bottom: 20px;
      width: 80%;
    }

    &-title {
      color: $main-dark;
      font-size: 20px;
      opacity: 0.8;
    }
  }
}
</style>
