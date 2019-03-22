<template>
  <div>
    <search-header :cities="cities"></search-header>
    <search-list :cities="cities" :hot="hotCities" :letter="letter"></search-list>
  </div>
</template>

<script>
import axios from 'axios'
import SearchHeader from './components/Header'
import SearchList from './components/List'
export default {
  name: 'Search',
  components: {
    SearchHeader,
    SearchList
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
