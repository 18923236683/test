<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-number"><span class="iconfont banner-icon">&#xe638;</span>{{this.gallaryImgs.length}}</div>
      </div>
    </div>
    <fade>
      <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </fade>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import Fade from 'common/fade/Fade'
export default {
  name: 'DetailBanner',
  props: {
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1509/49/364e58131c66e458efedd4859abfaa67.water.jpg_r_800x800_52a1e8e4.jpg',
        'http://img1.qunarzz.com/sight/p0/1702/9f/9faf267f81a1a024a3.img.jpg_r_800x800_b7c27ffc.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    Fade
  }
}
</script>

<style lang="stylus" scoped>
  .banner{
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
  }
  .banner-img{
    width: 100%;
  }
  .banner-info{
    position: absolute;
    left: 0;
    right: 0;
    bottom: .1rem;
    line-height: .6rem ;
    color: #fff;
  }
  .banner-number{
    padding: 0.04rem .2rem;
    height: .32rem;
    line-height: .32rem;
    border-radius: .2rem;
    background: rgba(0, 0, 0, .8);
    font-size: .24rem;
    margin-right: .2rem;
    width: .6rem;
    float: right;
  }
  .banner-icon{
    font-size: .28rem;
    margin-right: .04rem;
  }
</style>
