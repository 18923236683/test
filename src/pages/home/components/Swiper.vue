<template>
  <div class="interval">
    <div class="wrapper">
      <swiper :options="swiperOption" v-if="showSwiper">
        <!-- slides -->
        <swiper-slide v-for="item in list" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 5000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active{
    background: #fff !important;
  }
  .interval{
    margin: .2rem .3rem;
  }
  .wrapper{
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 26.66%;
    background: #eee;
    border-radius: .2rem;
  }
  .swiper-img{
    width: 100%;
  }

</style>
