<template>
  <div class="kind" ref="wrapper">
    <div>
      <ul class="kind-list">
        <li class="list-item" v-for="(item,index) in kindArr" :key="item.id" @click="handleKindItemClick(index, item.id)" :class="{'active' : index==current}">
          <div class="list-item-title">{{item.kindName}}</div>
          <div class="list-item-number">{{item.contentList.length}}项</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'ClassifyKind',
  props: {
    kindArr: Array
  },
  data () {
    return {
      current: 0
    }
  },
  methods: {
    handleKindItemClick (index, KindId) {
      this.current = index
      this.$emit('change', KindId)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  .kind{
    overflow: hidden;
    width: 1.6rem;
    position: absolute;
    top: .86rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f4f4f4;
  }
  .list-item{
    padding: .4rem 0 .4rem .2rem;
    background: #f4f4f4;
  }
  .active{
    background: #fff;
    border-left: 2px solid #ffe300;
    padding-left: .16rem;
  }
  .list-item-title{
    font-size: .28rem;
    color: #333;
  }
  .list-item-number{
    padding-top: .08rem;
    font-size: .24rem;
    color: #666;
  }
</style>
