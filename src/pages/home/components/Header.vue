<template>
  <div class="header">
    <router-link to="/city">
      <div class="header-left">
        <span>{{this.$store.state.city}}</span>
        <span class="iconfont">&#xe6aa;</span>
      </div>
    </router-link>
    <router-link to="/search" class="routerLink">
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/学校/活动主题
      </div>
    </router-link>
    <div class="header-right">
      <span class="iconfont">&#xe64d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header{
    display: flex;
    line-height: .86rem;
    margin-top: .2rem;
  }
  .header-left{
    min-width: 1rem;
    padding: 0 .1rem;
    float: left;
    text-align: center;
    margin-left: .2rem;
  }
  .header-input{
    flex: 1;
    margin-top: .12rem;
    margin-left: .2rem;
    height: .64rem;
    line-height: .64rem;
    border-radius: .5rem;
    color: #aaa;
    padding-left: .2rem;
    background-color: #eee;
  }
  .header-right{
    width: 1rem;
    float: right;
    text-align: center;
  }
  .routerLink{
    flex: 1;
  }
</style>
