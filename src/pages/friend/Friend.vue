<template>
  <div>
    <friend-header :kindArr="kindArr" @change="handleKindChange"></friend-header>
    <friend-body :friendArray="friendArray"></friend-body>
    <friend-bottom></friend-bottom>
  </div>
</template>

<script>
import axios from 'axios'
import FriendHeader from './components/Header'
import FriendBody from './components/Body'
import FriendBottom from './components/Bottom'
export default {
  name: 'Friend',
  components: {
    FriendHeader,
    FriendBody,
    FriendBottom
  },
  data () {
    return {
      currentKindId: '0001',
      kindArr: [],
      friendArray: []
    }
  },
  methods: {
    getClassifyInfo () {
      axios.get('/api/friend.json')
        .then(this.handleGetClassifyInfoSucc)
    },
    handleGetClassifyInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.kindArr = data.kindArr
        this.friendArray = data.kindArr[0].friendArray
      }
    },
    handleKindChange (kindId) {
      this.currentKindId = kindId
      for (var i = 0; i < this.kindArr.length; i++) {
        if (this.kindArr[i].id === this.currentKindId) {
          this.friendArray = this.kindArr[i].friendArray
        }
      }
    }
  },
  mounted () {
    this.getClassifyInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
