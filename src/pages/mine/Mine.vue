<template>
  <div>
    <mine-header
      :imgBg="imgBg"
      :imgProfile="imgProfile"
      :informationName="informationName"
      :informationDesc="informationDesc"
      :focusNumber="focusNumber"
      :fansNumber="fansNumber"
      :friendsNumber="friendsNumber"
    ></mine-header>
    <mine-list></mine-list>
    <mine-bottom></mine-bottom>
  </div>
</template>

<script>
import MineHeader from './components/Header'
import MineList from './components/List'
import MineBottom from './components/Bottom'
import axios from 'axios'
export default {
  name: 'Mine',
  data () {
    return {
      imgBg: '',
      imgProfile: '',
      informationName: '',
      informationDesc: '',
      focusNumber: '',
      fansNumber: '',
      friendsNumber: ''
    }
  },
  components: {
    MineHeader,
    MineList,
    MineBottom
  },
  methods: {
    getMineInfo () {
      axios.get('/api/mine.json')
        .then(this.handleGetMineInfoSucc)
    },
    handleGetMineInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.imgBg = data.imgBg
        this.imgProfile = data.imgProfile
        this.informationName = data.informationName
        this.informationDesc = data.informationDesc
        this.focusNumber = data.focusNumber
        this.fansNumber = data.fansNumber
        this.friendsNumber = data.friendsNumber
      }
    }
  },
  mounted () {
    this.getMineInfo()
  }
}
</script>

<style scoped>

</style>
