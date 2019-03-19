<template>
  <div class="classify">
    <div class="text clearfix">
      <div class="big-text">推荐圈子</div>
      <div class="small-text">查看更多<span class="iconfont">&#xe62d;</span></div>
    </div>
    <div class="icons">
      <div class="icons-wrapper">
        <div class="long clearfix" :style="'width:'+ iconAmount * 2 +'rem'">
          <div class="icon" v-for="item in list" :key="item.id">
            <div class="mask">
              <span class="mask-text">{{item.classify}}</span>
            </div>
            <img class="icon-img" :src="item.imgUrl">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  computed: {
    iconAmount () {
      const iconAmount = this.list.length
      return iconAmount
    }
  }
}
</script>

<style lang="stylus" scoped>
  .classify{
    margin-top: .4rem;
  }
  .clearfix:after{
    content: '';
    display: table;
    clear: both;
  }
  .text{
    margin-left: .3rem;
    margin-right: .3rem;
  }
  .big-text{
    float: left;
  }
  .small-text{
    float: right;
    font-size: .24rem;
    color: #aaa;
  }
  .iconfont{
    font-size: .24rem;
    position: relative;
    top: -0.02rem;
  }
  .icons{
    height: 2rem;
    width: 100%;
    overflow:hidden;
  }
  .icons-wrapper{
    height: 2.32rem;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .long{
    width: 200%;
    height: 2rem;
  }
  .icon{
    float: left;
    width: 2rem;
    position: relative;
  }
  .mask{
    position: absolute;
    width: 1.4rem;
    height: 1.4rem;
    margin: .3rem;
    border-radius: .4rem;
    background: rgba(155,155,155,0.6);
    text-align: center;
  }
  .mask-text{
    height: 1.4rem;
    line-height: 1.4rem;
    color: #fff;
  }
  .icon-img{
    width: 1.4rem;
    height: 1.4rem;
    margin: .3rem;
    border-radius: .4rem;
  }

</style>
