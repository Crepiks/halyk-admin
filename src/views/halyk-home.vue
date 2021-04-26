<template>
  <div class="home-page">
    <halyk-volunteers :volunteers="volunteers" />
    <halyk-forms />
  </div>
</template>

<script>
import halykVolunteers from "@/components/home/halyk-volunteers.vue";
import halykForms from "@/components/home/halyk-forms.vue";
import volunteers from "@/data/volunteers.js";

export default {
  components: {
    "halyk-volunteers": halykVolunteers,
    "halyk-forms": halykForms,
  },

  data() {
    return {
      volunteers: volunteers,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.home {
  &-page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
}
</style>
