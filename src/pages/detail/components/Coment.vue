<template>
  <div class="coment">
    <div class="coment-header">
      <span>评论</span>
      <span>({{comentNumber}})</span>
    </div>
    <div class="coment-body" v-for="item in comentList" :key="item.id">
      <div class="coment-body-left">
        <img class="profile" :src="item.comentImg">
      </div>
      <div class="coment-body-right">
        <div class="right-header">
          <div class="name-ago">
            <div class="name">{{item.comentName}}</div>
            <div class="ago">{{item.comentAgo}}</div>
          </div>
          <div class="give-like">
            <span class="iconfont icon-like">&#xec7f;</span>{{item.comentLike}}
          </div>
        </div>
        <div class="right-my-say">{{item.commentSay}}</div>
        <div class="right-reply-box">
          <div class="right-reply-item" v-for="childItem in item.comentReplyArr" :key="childItem.id">
            <span class="others-reply-name">{{childItem.comentReplyName}}:</span>
            <span class="others-reply-content">{{childItem.comentReplyContent}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailComent',
  props: {
    comentNumber: String,
    comentList: Array
  }
}
</script>

<style lang="stylus" scoped>
  .coment{
    padding-left: .3rem;
    padding-right: .3rem;
  }
  .coment-header{
    color: #333;
  }
  .coment-body{
    padding-top: .4rem;
    overflow: hidden;
    display: flex;
    padding-right: .2rem;
    padding-bottom: .4rem;
    border-bottom: 1px solid #ddd;
  }
  .coment-body-left{
    float: left;
    padding-right: .2rem;
  }
  .coment-body-right{
    padding-top: .04rem;
    float: right;
    flex: 1;
  }
  .profile{
    width:.7rem;
    height: .7rem;
    border-radius: 50%;
  }
  .right-header{
    overflow: hidden;
    padding-bottom: .3rem;
  }
  .name-ago{
    float: left;
  }
  .give-like{
    float: right;
    color: #333;
    font-size: .26rem;
  }
  .name{
    color: #333;
    font-size: .28rem;
  }
  .ago{
    color: #666;
    font-size: .24rem;
    padding-top: .1rem;
  }
  .icon-like{
    padding-right: .08rem;
    font-size: .32rem;
  }
  .right-my-say{
    color: #666;
    line-height: .4rem;
    font-size: 0.28rem;
    padding-bottom: .2rem;
  }
  .right-reply-box{
    padding: .2rem;
    background-color: #eee;
    font-size: .28rem;
    border-radius: .2rem;
  }
  .right-reply-item{
    padding-top: .2rem;
    line-height: .4rem;
  }
  .right-reply-item:first-child{
    padding-top: 0;
  }
  .others-reply-name{
    color: #6a9eef;
  }
  .others-reply-content{
    color: #666;
  }
</style>
