<template>
  <div class="list">
    <ul class="item-list">
      <li class="item">
        <div class="item-float-left">
          <span class="iconfont icon-logo">&#xeb88;</span>
          <span class="item-text">我的动态</span>
        </div>
        <div class="item-float-right">
          <span class="iconfont">&#xe62d;</span>
        </div>
      </li>
      <li class="item">
        <div class="item-float-left">
          <span class="iconfont icon-logo">&#xeca6;</span>
          <span class="item-text">我的收藏</span>
        </div>
        <div class="item-float-right">
          <span class="iconfont">&#xe62d;</span>
        </div>
      </li>
      <li class="item">
        <div class="item-float-left">
          <span class="iconfont icon-logo">&#xec80;</span>
          <span class="item-text">我的好友</span>
        </div>
        <div class="item-float-right">
          <span class="iconfont">&#xe62d;</span>
        </div>
      </li>
      <li class="item">
        <div class="item-float-left">
          <span class="iconfont icon-logo">&#xec32;</span>
          <span class="item-text">我的关注</span>
        </div>
        <div class="item-float-right">
          <span class="iconfont">&#xe62d;</span>
        </div>
      </li>
      <li class="item">
        <div class="item-float-left">
          <span class="iconfont icon-logo">&#xec86;</span>
          <span class="item-text">我的粉丝</span>
        </div>
        <div class="item-float-right">
          <span class="iconfont">&#xe62d;</span>
        </div>
      </li>
      <li class="item">
        <div class="item-float-left">
          <span class="iconfont icon-logo">&#xeb68;</span>
          <span class="item-text">我的标签</span>
        </div>
        <div class="item-float-right">
          <span class="iconfont">&#xe62d;</span>
        </div>
      </li>
      <li class="item">
        <div class="item-float-left">
          <span class="iconfont icon-logo">&#xeb8d;</span>
          <span class="item-text">我的设置</span>
        </div>
        <div class="item-float-right">
          <span class="iconfont">&#xe62d;</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MineList'
}
</script>

<style scoped>
  .item-list{
    padding: .3rem .4rem 0;
    margin-bottom: 1.4rem;
  }
  .item{
    overflow: hidden;
    height: .8rem;
    line-height: .8rem;
  }
  .item-float-left{
    float: left;
  }
  .item-text{
    margin-left: .1rem;
  }
  .item-float-right{
    float: right;
  }
  .iconfont{
    color: #666;
  }
  .item-text{
    color: #666;
  }
</style>
