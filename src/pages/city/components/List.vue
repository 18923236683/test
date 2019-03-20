<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">广州</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem in item" :key="innerItem.id">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .list{
    overflow: hidden;
    position: absolute;
    top: .9rem;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .title{
    line-height: .5rem;
    background: #f4f4f4;
    padding-left: .2rem;
    color: #666;
    font-size: .28rem
  }
  .button-list{
    padding: .1rem .6rem .1rem .1rem;
    overflow: hidden;
  }
  .button-wrapper{
    float: left;
    width: 33.33%;
  }
  .button{
    margin: .1rem;
    padding: .2rem 0;
    text-align: center;
    border-radius: .4rem;
    background: #f4f4f4;
    color: #666;
    font-size: .28rem;
  }
  .item{
    line-height: .76rem;
    padding-left: .2rem;
  }
</style>
