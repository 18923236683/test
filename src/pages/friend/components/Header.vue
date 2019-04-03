<template>
  <div class="header">
    <div class="list-wrapper">
      <ul class="list">
        <li class="list-item">推荐</li>
        <li class="list-item have-new">关注</li>
        <li class="list-item current">好友</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FriendHeader'
}
</script>

<style lang="stylus" scoped>
  .header{
    height: 1.4rem;
  }
  .list-wrapper{
    padding: 0 .3rem;
  }
  .list{
    overflow: hidden;
    line-height: 1.4rem;
    margin: 0 -.3rem;
  }
  .list-item{
    float : left;
    padding-left: .3rem;
    padding-right: .3rem;
    color: #666;
  }
  .current{
    font-size: .5rem;
    line-height: 1.25rem;
    color: #333;
  }
  .have-new::after{
    content: "";
    display: inline-block;
    width: .16rem;
    height:.16rem;
    background-color: red;
    border-radius: 50%;
    position: relative;
    top: -.16rem;
    left: .1rem;
  }
</style>
