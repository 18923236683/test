<template>
  <div>
    <classify-header></classify-header>
    <classify-kind :kindArr="kindArr" @change="handleKindChange"></classify-kind>
    <classify-content :contentList="contentList"></classify-content>
    <classify-bottom></classify-bottom>
  </div>
</template>

<script>
import axios from 'axios'
import ClassifyHeader from './components/Header'
import ClassifyKind from './components/Kind'
import ClassifyContent from './components/Content'
import ClassifyBottom from './components/Bottom'
export default {
  name: 'Classify',
  components: {
    ClassifyBottom,
    ClassifyHeader,
    ClassifyKind,
    ClassifyContent
  },
  data () {
    return {
      currentKindId: '0001',
      kindArr: [],
      contentList: []
    }
  },
  methods: {
    getClassifyInfo () {
      axios.get('/api/classify.json')
        .then(this.handleGetClassifyInfoSucc)
    },
    handleGetClassifyInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.kindArr = data.kindArr
        this.contentList = data.kindArr[0].contentList
      }
    },
    handleKindChange (kindId) {
      this.currentKindId = kindId
      for (var i = 0; i < this.kindArr.length; i++) {
        if (this.kindArr[i].id === this.currentKindId) {
          this.contentList = this.kindArr[i].contentList
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
