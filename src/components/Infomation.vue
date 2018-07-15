<template lang="pug">
  .info
    h2 General Infomation
    h3 Tell us who you are!
    .info__halfBox
      .info__halfBox--item
        p.info__subtitle Name
          span  (optional)
        input.info__inputArea(placeholder="Example Name" type="name" required)
      .info__halfBox--item
        p.info__subtitle Phone*
        input.info__inputArea(placeholder="0912 345 678" type="phone" maxlength="10" required)
    p.info__subtitle Birth Date
      span  (optional)
    .info__oneThirdBox
      .info__oneThirdBox--item
        select.info__selectArea
          option(selected disabled) YYYY
          option(v-for="year in 2018" v-if="year > 1900") {{year}}
      .info__oneThirdBox--item
        select.info__selectArea(v-model="month")
          option(selected disabled) MM
          option(v-for="month in 12") {{month}}
      .info__oneThirdBox--item
        select.info__selectArea
          option(selected disabled) DD
          option(v-for="day in getDate") {{day}}
    .info__halfBox
      .info__halfBox--item
        p.info__subtitle Address*
        select.info__selectArea
          option(selected disabled) City
      .info__halfBox--item
        select.info__selectArea.info__selectArea--dist
          option(selected disabled) Dist
    input.info__inputArea.info__inputArea--detail(placeholder="Address Detail")
    button.info__submit(@click="goNextPage") SUBMIT & NEXT {{getDate}}
</template>
<script>
export default {
  data () {
    return {
      month: 'MM'
    }
  },
  computed: {
    getDatetest () {
      return 10
    },
    getDate () {
      let date = ''
      if (this.month === '2') {
        date = 28
      } else if (this.month === '1' || this.month === '3' || this.month === '5' || this.month === '7' || this.month === '8' || this.month === '10' || this.month === '12') {
        date = 31
      } else if (this.month === '4' || this.month === '6' || this.month === '9' || this.month === '11') {
        date = 30
      } else {
      }
      return date
    }
  },
  methods: {
    goNextPage () {
      this.$store.commit('goNextPage')
    }
  },
  mounted () {
    console.log(this.getDate)
  }
}
</script>
<style lang="scss" scoped>
.info {
  h2 {
    font-size: 48px;
    font-weight: lighter;
    padding: 5px 0;
    text-align: center;
  }
  h3 {
    font-size: 24px;
    padding: 2px 0;
    font-weight: lighter;
    text-align: center;
  }
  &__halfBox {
    display: flex;
    justify-content: space-between;
    &--item {
      width: 220px;
      position: relative;
    }
  }
  &__oneThirdBox {
    display: flex;
    justify-content: space-between;
    &--item {
      width: 140px;
    }
  }
  &__subtitle {
    line-height: 24px;
    padding-top: 10px;
    span {
      font-size: 16px;
      font-weight: lighter;
    }
  }
  &__inputArea {
    margin-top: 4px;
    padding: 0 20px;
    width: 100%;
    height: 52px;
    border: 2px solid #000000;
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 20px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #999999;
    }
    &--detail {
      margin-top: 9px;
    }
  }
  &__selectArea {
    margin-top: 4px;
    width: 100%;
    height: 52px;
    border: 2px solid #000000;
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 20px;
    text-align-last: center;
    color: #999999;
    background: #ffffff;
    &:focus {
      outline: none;
    }
    &--dist {
      position: absolute;
      bottom: 0;
    }
  }
  &__submit {
    margin-top: 9px;
    padding: 14px 0;
    width: 100%;
    background: #BEE1FF;
    color: #ffffff;
    outline: none;
    border: 2px solid #BEE1FF;
    border-radius: 8px;
    font-size: 20px;
  }
}
</style>
