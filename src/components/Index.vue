<template lang="pug">
  .index
    .index__radio.current
      .index__radio--solid(v-if="currentPage === 0")
      .index__radio--check(v-else-if="currentPage > 0")
        <i class="fas fa-check-circle"></i>
    .index__dash(:class="{current:currentPage > 0}")
    .index__radio(:class="{current:currentPage > 0}")
      .index__radio--solid(v-if="currentPage === 1")
      .index__radio--check(v-else-if="currentPage > 1")
        <i class="fas fa-check-circle"></i>
    .index__dash(:class="{current:currentPage > 1}")
    .index__radio(:class="{current:currentPage > 1}")
      .index__radio--solid(v-if="currentPage === 2")
      .index__radio--check(v-else-if="currentPage > 2")
        <i class="fas fa-check-circle"></i>
    .index__dash(:class="{current:currentPage > 2}")
    .index__radio(:class="{current:currentPage > 2}")
      .index__radio--solid(v-if="currentPage === 3")
      .index__radio--check(v-else-if="currentPage > 3")
        <i class="fas fa-check-circle"></i>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    currentPage () {
      return this.$store.getters.getCurrentPage
    }
  }
}
</script>

<style lang="scss" scoped>
  .index {
    margin: 0 auto;
    margin-top: 25px;
    margin-bottom: 20px;
    width: 256px;
    height: 16px;
    display: flex;
    align-items: center;
    &__radio {
      width: 16px;
      height: 16px;
      border: 2px solid #BEE1FF;
      box-sizing: border-box;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      &.current {
        border: 2px solid #0275D8;
      }
      &--solid {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #0275D8;
      }
      &--check {
        color: #0275D8;
      }
    }
    &__dash {
      width: calc(100% / 3 - 64px / 3);
      border: 1px solid #BEE1FF;
      &.current {
        border: 1px solid #0275D8;
      }
    }
  }
</style>
