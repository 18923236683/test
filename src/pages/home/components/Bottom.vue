<template>
  <div class="bottom">
    <div class="bottom-wrapper">
      <ul class="item-list">
        <li class="item">
          <span class="bottom-icon iconfont active">&#xe62e;</span>
          <span class="bottom-title active">首页</span>
        </li>
        <router-link to="/classify" tag="li" class="item">
          <span class="bottom-icon iconfont">&#xe630;</span>
          <span class="bottom-title">分类</span>
        </router-link>
        <li class="item">
          <span class="bottom-icon iconfont">&#xe631;</span>
          <span class="bottom-title">校圈</span>
        </li>
        <li class="item">
          <span class="bottom-icon iconfont">&#xe62f;</span>
          <span class="bottom-title">我的</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBottom'
}
</script>

<style lang="stylus" scoped>
  .bottom{
    width: 100%
    position: fixed;
    bottom: 0;
    height: 1rem;
    background: #fff;
    border-top:1px solid #eee;
  }
  .bottom-wrapper{
    overflow: hidden;
  }
  .item-list{
    width:100%;
    height:1rem;
    display: flex;
    justify-content: center;
  }
  .item{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 25%;
  }
  .bottom-icon{
    font-size: .44rem;
    margin: .12rem 0 .08rem;
  }
  .bottom-title{
    font-size: .22rem;
  }
  .active{
    color: #ffe300;
  }
</style>
