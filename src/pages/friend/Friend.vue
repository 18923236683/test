<template>
  <div>
    <friend-header></friend-header>
    <friend-body></friend-body>
    <friend-bottom></friend-bottom>
  </div>
</template>

<script>
import FriendHeader from './components/Header'
import FriendBody from './components/Body'
import FriendBottom from './components/Bottom'
export default {
  name: 'Friend',
  components: {
    FriendHeader,
    FriendBody,
    FriendBottom
  }
}
</script>

<style lang="stylus" scoped>

</style>
