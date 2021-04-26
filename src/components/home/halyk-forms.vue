<template>
  <div class="forms">
    <h2 class="forms-title">Отсчеты волонтера</h2>
    <div v-if="forms" class="forms-list">
      <div v-for="form in forms" :key="form.id" class="forms-form">
        {{ form.title }}
      </div>
    </div>
    <div class="forms-empty">
      <img
        src="@/assets/images/list-empty.svg"
        alt="Нету волонтеров"
        class="forms-empty-image"
      />
      <h2 class="forms-empty-title">Выберите волонтера</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    forms: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.forms {
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

  &-title {
    margin-bottom: 30px;
    color: $main-dark;
    font-size: 25px;
  }

  &-list {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &-form {
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
