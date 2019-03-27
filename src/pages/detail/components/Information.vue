<template>
  <div class="information">
    <div class="title">{{activeName}}</div>
    <div class="desc">{{activeDesc}}</div>
    <ul class="place-time">
      <li class="place"><span class="iconfont icon-place-time">&#xe637;</span>{{activePlace}}</li>
      <li class="time"><span class="iconfont icon-place-time">&#xe697;</span>{{activeTime}}</li>
    </ul>
    <ul class="list">
      <li class="list-item-left">
        <span class="iconfont item-icon">&#xec7f;</span>
        <span class="number">{{likeNumber}}</span>
      </li>
      <li class="list-item-left">
        <span class="iconfont item-icon icon-coment">&#xe69f;</span>
        <span class="number">{{comentNumber}}</span>
      </li>
      <li class="list-item-left">
        <span class="iconfont item-icon">&#xe62a;</span>
        <span class="number">{{collectNumber}}</span>
      </li>
      <li class="list-item-right">
        <span class="iconfont item-icon icon-more">&#xe688;</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DetailInformation',
  props: {
    activeName: String,
    activeDesc: String,
    activePlace: String,
    activeTime: String,
    likeNumber: String,
    comentNumber: String,
    collectNumber: String
  }
}
</script>

<style lang="stylus" scoped>
  .information{
    padding: .4rem .3rem;
  }
  .title{
    font-size: .4rem;
    margin-bottom: .4rem;
    color: #333;
  }
  .desc{
    font-size: .28rem;
    margin-bottom: .4rem;
    line-height: .4rem;
    color: #666;
  }
  .place-time{
    font-size: .28rem;
    margin-bottom: .4rem;
    color: #666;
    overflow: hidden;
  }
  .time{
    margin-top: .2rem;
  }
  .icon-place-time{
    margin-right: .1rem;
  }
  .list{
    overflow: hidden;
    height: .8rem;
    line-height: .6rem;
    border-bottom: 1px solid #ddd;
  }
  .list-item-left{
    float: left;
    margin-right: .5rem;
  }
  .list-item-right{
    float: right;
    margin-right: .2rem;
  }
  .item-icon{
    font-size: .4rem;
    display: inline-block;
    color: #ffe300;
  }
  .icon-coment{
    position: relative;
    top: .02rem;
  }
  .icon-more{
    color: #000;
  }
  .number{
    font-size: .2rem;
    display: inline-block;
    position: relative;
    top: -.06rem;
  }
</style>
