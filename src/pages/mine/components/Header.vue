<template>
  <div class="header">
    <div class="top-img-box">
      <img class="img-bg" :src="imgBg">
      <img class="img-profile" :src="imgProfile">
    </div>
    <div class="information">
      <div class="name">{{informationName}}</div>
      <div class="desc">{{informationDesc}}</div>
      <ul class="item-list">
        <li class="item">
          <span class="item-number">{{focusNumber}}</span>
          <span class="item-text">关注</span>
        </li>
        <li class="item">
          <span class="item-number">{{fansNumber}}</span>
          <span class="item-text">粉丝</span>
        </li>
        <li class="item">
          <span class="item-number">{{friendsNumber}}</span>
          <span class="item-text">好友</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MineHeader',
  props: {
    imgBg: String,
    imgProfile: String,
    informationName: String,
    informationDesc: String,
    focusNumber: String,
    fansNumber: String,
    friendsNumber: String
  }
}
</script>

<style scoped>
  .header{
    border-bottom: 1px solid #eee;
  }
  .top-img-box{
    height: 3.6rem;
    position: relative;
  }
  .img-bg{
    height: 3rem;
    width: 100%;
  }
  .img-profile{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -1rem;
  }
  .name{
    text-align: center;
    font-size: .36rem;
    color: #333;
    padding-top: .2rem;
  }
  .desc{
    text-align: center;
    font-size: .28rem;
    color: #aaa;
    padding-top: .2rem;
  }
  .item-list{
    padding: .2rem .3rem;
    height:1rem;
    display: flex;
    justify-content: center;
  }
  .item{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 33.333%;
  }
  .item-number{
    font-size: .36rem;
    margin: .12rem 0 .08rem;
    color: #ffe300;
  }
  .item-text{
    font-size: .22rem;
    color: #ffe300;
  }
</style>
