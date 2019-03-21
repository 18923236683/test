<template>
  <div class="hot">
    <div class="text clearfix">
      <div class="big-text">热门活动</div>
      <div class="small-text">查看更多<span class="iconfont">&#xe62d;</span></div>
    </div>
    <div class="hot-list" v-for="item in list" :key="item.id">
      <div class="list-item clearfix">
        <div class="img-box">
          <img class="hot-img" :src="item.imgUrl">
        </div>
        <div class="item-desc">
          <div class="desc-inner">
            <div class="desc-title clearfix">
              <span class="title-left">{{item.title}}</span>
              <span class="title-right iconfont">&#xe688;</span>
            </div>
            <div class="desc-text">{{item.desc}}</div>
            <div class="desc-place"><span class="iconfont">&#xe637;</span>{{item.place}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHot',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .hot{
    margin-top: .2rem;
    margin-bottom: 1.4rem;
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
  .hot-list{
    margin: .4rem .3rem .2rem;
  }
  .list-item{
    width:100%;
    height:2rem;
    border-radius: .4rem;
    overflow: hidden;
    box-shadow: 2px 2px 10px #ccc;
    margin-top: .4rem;
  }
  .img-box{
    float: left;
    width: 2rem;
    height: 2rem
  }
  .hot-img{
    width: 100%;
    height: 100%;
  }
  .item-desc{
    float: left;
    height: 2rem;
    width: calc(100% - 2rem);
  }
  .desc-inner{
    padding: .2rem .2rem .2rem .3rem;
  }
  .title-left{
    float: left;
  }
  .title-right{
    font-size: .4rem;
    float: right;
  }
  .desc-text{
    width: 80%;
    margin-top: .1rem;
    font-size: .28rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #aaa;
  }
  .desc-place{
    font-size: .28rem;
    margin-top: .5rem;
    color: #aaa;
  }
</style>
