<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  .header{
    position: relative;
    overflow: hidden;
    height: .86rem;
    line-height: .86rem;
    text-align: center;
    color: #333333;
    font-size: .34rem;
    font-weight: 600;
  }
  .header-back{
    position: absolute;
    top: 0;
    left: 0;
    width: .64rem;
    text-align: center;
    font-size: .4rem;
    color:#aaa;
  }
</style>
