<template lang="pug">
  .home
    h2 Create Account
    h3 Glad to see you here!
    p.home__subtitle Account
    input.home__inputArea(placeholder="example@email.com" type="email" required v-model="mail")
    p.home__subtitle Password
    input.home__inputArea(placeholder="••••••••" type="password" required v-model="password")
    p.home__subtitle Comfirm Password
    input.home__inputArea(placeholder="••••••••" type="password" required v-model="comfirm")
    button.home__submit(v-if="!ableClick") SUBMIT & NEXT
    button.home__submit.able(v-else @click="goNextPage") SUBMIT & NEXT
</template>

<script>
export default {
  data () {
    return {
      mail: '',
      password: '',
      comfirm: ''
    }
  },
  computed: {
    ableClick () {
      if (this.mailCorrect && this.password !== '' && this.password === this.comfirm) {
        return true
      } else {
        return false
      }
    },
    mailCorrect () {
      console.log('test')
      const re = /\S+@\S+\.\S+/
      return re.test(this.mail)
    }
  },
  methods: {
    goNextPage () {
      this.$store.commit('goNextPage')
      this.$router.push('/infomation')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
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
  &__subtitle {
    margin-top: 20px;
    font-size: 20px;
  }
  &__inputArea {
    margin-top: 8px;
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
  }
  &__submit {
    margin-top: 40px;
    padding: 14px 0;
    width: 100%;
    background: #BEE1FF;
    color: #ffffff;
    outline: none;
    border: 2px solid #BEE1FF;
    border-radius: 8px;
    font-size: 20px;
  }
  &__submit.able {
    background: #0275D8;
    border: 2px solid #4A90E2;
  }
}
</style>
