<template>
  <div>
    <detail-banner :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-information
      :activeName="activeName"
      :activeDesc="activeDesc"
      :activePlace="activePlace"
      :activeTime="activeTime"
      :likeNumber="likeNumber"
      :comentNumber="comentNumber"
      :collectNumber="collectNumber"
    ></detail-information>
    <detail-coment
      :comentNumber="comentNumber"
      :comentList="comentList"
    ></detail-coment>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailInformation from './components/Information'
import DetailComent from './components/Coment'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailComent,
    DetailBanner,
    DetailHeader,
    DetailInformation
  },
  data () {
    return {
      bannerImg: '',
      gallaryImgs: [],
      activeName: '',
      activeDesc: '',
      activePlace: '',
      activeTime: '',
      likeNumber: '',
      comentNumber: '',
      collectNumber: '',
      comentList: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.activeName = data.activeName
        this.activeDesc = data.activeDesc
        this.activePlace = data.activePlace
        this.activeTime = data.activeTime
        this.likeNumber = data.likeNumber
        this.comentNumber = data.comentNumber
        this.collectNumber = data.collectNumber
        this.comentList = data.comentList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  activated () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
