<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-hot :list="hotList"></home-hot>
    <home-bottom></home-bottom>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeHot from './components/Hot'
import HomeBottom from './components/Bottom'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeBottom,
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeHot
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      hotList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.hotList = data.hotList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
