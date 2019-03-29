<template>
  <div class="content" ref="wrapper">
    <div>
      <ul class="content-list">
        <li class="content-list-item" v-for="item in contentList" :key="item.id">
          <div class="item-left">
            <img class="item-left-img" :src="item.contentImg">
          </div>
          <div class="item-right">
            <div class="item-right-title">{{item.contentName}}</div>
            <div class="item-right-place">{{item.contentPlace}}</div>
            <div class="item-right-desc">{{item.contentDesc}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'ClassifyContent',
  props: {
    contentList: Array
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  .content{
    overflow: hidden;
    width: calc(100% - 1.6rem);
    position: absolute;
    top: .86rem;
    left: 1.6rem;
    right: 0;
    bottom: 0;
  }
  .content-list-item{
    padding: .3rem .3rem;
    overflow: hidden;
  }
  .item-left{
    float: left;
    width: 2rem;
    height: 2rem;
  }
  .item-left-img{
   width: 100%;
    height: 100%;
  }
  .item-right{
    float: right;
    width: calc(100% - 2.2rem);
    padding-left: .2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    height: 2rem;
  }
  .item-right-title{
    color: #333;
    font-size: .32rem;
  }
  .item-right-place{
    color: #666;
    font-size: .28rem;
  }
  .item-right-desc{
    color: #aaa;
    font-size: .24rem;
    line-height: .32rem;
  }
</style>
