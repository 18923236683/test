<template>
  <div>
    <div class="search">
      <div class="search-wrapper">
        <span class="iconfont search-icon">&#xe632;</span>
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市/学校/活动主题" autofocus>
      </div>
      <router-link to="/">
        <div class="search-right">取消</div>
      </router-link>
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleCityClick(item.name)">
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'SearchHeader',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
  .search{
    display: flex;
    line-height: 1.1rem;
    height: 1.1rem;
  }
  .search-wrapper{
    flex: 1;
    display: flex;
    margin-left: .3rem;
    height: .64rem;
    margin-top: .24rem;
    border-radius: .4rem;
    background-color: #eee;
    color: #aaa;
  }
  .search-icon{
    width: .6rem;
    line-height: .64rem;
    text-align: center;
    margin-left: .1rem;
  }
  .search-input{
    border-radius: .4rem;
    background-color: #eee;
    color: #aaa;
    flex: 1;
    padding-left: .1rem;
    padding-right: .1rem;
    font-size: .32rem;
    line-height: .64rem;
  }
  .search-input:focus {
    outline:none;
  }
  .search-right{
    width: 1.2rem;
    float: right;
    text-align: center;
  }
  .search-content{
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.1rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee
  }
  .search-item{
    line-height: .62rem;
    padding-left: .3rem;
    background: #fff;
    color: #666
  }

</style>
