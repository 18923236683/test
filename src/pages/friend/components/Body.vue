<template>
  <div>
    <div class="body">
      <div class="friend-item" v-for="(item, index) in friendArray" :key="item.id">
        <div class="item-header">
          <div class="header-left">
            <img class="profile" :src="item.profileImg">
            <div class="name-ago">
              <div class="name">{{item.author}}</div>
              <div class="ago">{{item.ago}}</div>
            </div>
          </div>
          <div class="header-right">
            <div class="focus"  :class="{'focused' : item.focused}" @click="focusClick(index)">{{item.focus}}</div>
          </div>
        </div>
        <div class="item-desc">{{item.desc}}</div>
        <img class="item-imgs" :src="item.img">
        <div class="item-footer">
          <ul class="list">
            <li class="list-item-left">
              <span class="iconfont item-icon">&#xec7f;</span>
              <span class="number">{{item.likeNumber}}</span>
            </li>
            <li class="list-item-left">
              <span class="iconfont item-icon icon-coment">&#xe69f;</span>
              <span class="number">{{item.comentNumber}}</span>
            </li>
            <li class="list-item-right">
              <span class="iconfont item-icon icon-more" @click.stop="showLikeBtn(index)">&#xe688;</span>
            </li>
            <transition name="slide-fade">
              <li class="list-item-right like-coment-wrapper" v-show="item.showLike">
                <div class="like-coment">
                  <div class="like-coment-float-left" @click="giveLike(index)">
                    <span class="iconfont item-icon like-coment-icon">&#xec7f;</span>
                    <span class="like-coment-text">点赞</span>
                  </div>
                  <div class="like-coment-float-left" @click.stop="giveComent(index)">
                    <span class="iconfont item-icon like-coment-icon">&#xe69f;</span>
                    <span class="like-coment-text">评论</span>
                  </div>
                </div>
              </li>
            </transition>
          </ul>
        </div>
        <div class="coment-wrapper" v-if="item.comentArray.length">
          <div class="coment-item" v-for="itemChild in item.comentArray" :key="itemChild.id" @click.stop="getTargetReply($event, index)">
            <span class="coment-item-name" v-if="itemChild.oneName">{{itemChild.oneName}}</span>
            <span class="coment-item-reply" v-if="itemChild.oneName">回复</span>
            <span class="coment-item-name">{{itemChild.twoName}}</span>
            <span class="coment-item-colon">:</span>
            <span class="coment-item-content">{{itemChild.textContent}}</span>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="inputBox" v-show="inputBoxShow" @click.stop>
        <input class="input-area" v-model="inputValue">
        <button class="input-btn" @click="commit">提交</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'FriendBody',
  data  () {
    return {
      friendArray: [{
        id: '0001',
        profileImg: 'http://img1.qunarzz.com/sight/p0/1509/49/364e58131c66e458efedd4859abfaa67.water.jpg_r_800x800_52a1e8e4.jpg',
        author: '晴天',
        ago: '一天前',
        focused: false,
        focus: '关注',
        desc: '从出生的时候就开始飘着，童年的荡秋千，随记忆一直飘到现在，刮风这天，我试着握着你的手。',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553598252465&di=652e7f6d63b5fc76268fc6be9dcc0d38&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20160328%2FImg442527963.jpg',
        likeNumber: 5,
        comentNumber: 2,
        showLike: false,
        comentArray: [{
          id: '0001',
          oneName: '',
          twoName: '你的名字',
          textContent: '这里的风景好美啊'
        }, {
          id: '0002',
          oneName: '晴天',
          twoName: '你的名字',
          textContent: '欢迎你也过来看看啊'
        }]
      }, {
        id: '0002',
        profileImg: 'http://img1.qunarzz.com/sight/p0/1509/49/364e58131c66e458efedd4859abfaa67.water.jpg_r_800x800_52a1e8e4.jpg',
        author: '晴天',
        ago: '一天前',
        focused: false,
        focus: '关注',
        desc: '从出生的时候就开始飘着，童年的荡秋千，随记忆一直飘到现在，刮风这天，我试着握着你的手。',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553598252465&di=652e7f6d63b5fc76268fc6be9dcc0d38&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20160328%2FImg442527963.jpg',
        likeNumber: 5,
        comentNumber: 2,
        showLike: false,
        comentArray: [{
          id: '0001',
          oneName: '',
          twoName: '你的名字',
          textContent: '这里的风景好美啊'
        }, {
          id: '0002',
          oneName: '晴天',
          twoName: '你的名字',
          textContent: '欢迎你也过来看看啊'
        }]
      }],
      inputBoxShow: false,
      inputValue: '',
      currentComentIndex: '',
      beReplyName: ''
    }
  },
  methods: {
    focusClick (index) {
      this.friendArray[index].focused = !this.friendArray[index].focused
      if (this.friendArray[index].focus === '关注') {
        this.friendArray[index].focus = '取关'
      } else {
        this.friendArray[index].focus = '关注'
      }
    },
    showLikeBtn (index) {
      for (let i = 0; i < this.friendArray.length; i++) {
        if (i === index) {
          this.friendArray[i].showLike = !this.friendArray[i].showLike
        } else {
          this.friendArray[i].showLike = false
        }
      }
      this.inputBoxShow = false
    },
    giveLike (index) {
      this.friendArray[index].likeNumber += 1
    },
    giveComent (index) {
      this.inputBoxShow = true
      this.handleLikeClick()
      this.currentComentIndex = index
    },
    handleLikeClick () {
      for (let i = 0; i < this.friendArray.length; i++) {
        this.friendArray[i].showLike = false
      }
    },
    handleBtnBoxClick () {
      this.inputBoxShow = false
    },
    getTargetReply (e, index) {
      this.beReplyName = e.currentTarget.firstElementChild.innerText
      if (this.beReplyName === '你的名字') {
        this.inputBoxShow = false
      } else {
        this.inputBoxShow = true
        this.currentComentIndex = index
      }
    },
    commit () {
      let newComentObj = {}
      if (this.beReplyName === '') {
        newComentObj.id = (this.friendArray[this.currentComentIndex].comentArray.length) + 1
        newComentObj.oneName = ''
        newComentObj.twoName = '你的名字'
        newComentObj.textContent = this.inputValue
      } else {
        newComentObj.id = (this.friendArray[this.currentComentIndex].comentArray.length) + 1
        newComentObj.oneName = '你的名字'
        newComentObj.twoName = this.beReplyName
        newComentObj.textContent = this.inputValue
      }
      this.friendArray[this.currentComentIndex].comentArray.push(newComentObj)
      this.beReplyName = ''
      this.inputValue = ''
      this.inputBoxShow = false
    }
  },
  activated () {
    window.addEventListener('click', this.handleLikeClick)
    window.addEventListener('click', this.handleBtnBoxClick)
  },
  deactivated () {
    window.removeEventListener('click', this.handleLikeClick)
    window.removeEventListener('click', this.handleBtnBoxClick)
  }
}
</script>

<style scoped>
  .body{
    padding: 0 .3rem;
    margin-bottom: 1.4rem
  }
  .friend-item{
    padding: .3rem;
    box-shadow: 0 0 2px #ccc;
    border-radius: .2rem;
    margin-top: .4rem;
  }
  .friend-item:first-child{
    margin-top: 0;
  }
  .item-header{
    overflow: hidden;
    height: .7rem;
  }
  .header-left{
    float: left;
  }
  .profile{
    width:.7rem;
    height: .7rem;
    border-radius: 50%;
    float: left;
  }
  .name-ago{
    float: left;
    margin-left: .2rem;
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
  .header-right{
    float: right;
    margin-top: .08rem;
  }
  .focus{
    font-size: .28rem;
    color: #ffe300;
    padding: .1rem .2rem;
    border: 1px solid #ffe300;
    border-radius: .2rem;
  }
  .focused{
    color: #aaa;
    border: 1px solid #aaa;
  }
  .item-desc{
    margin: .3rem 0;
    color: #666;
    line-height: 0.4rem;
    font-size: 0.28rem;
  }
  .item-imgs{
    width: 100%;
    border-radius: .2rem;
  }
  /*点赞部分*/
  .list{
    overflow: hidden;
    position: relative;
    height: .6rem;
    line-height: .6rem;
    margin-top: .2rem;
  }
  .list-item-left{
    float: left;
  }
  .list-item-left:first-child{
    float: left;
    margin-right: .5rem;
  }
  .list-item-right{
    float: right;
    margin-right: .2rem;
  }
  .item-icon{
    font-size: .4rem;
    display: inline-block;
    color: #ffe300;
  }
  .icon-coment{
    position: relative;
    top: .02rem;
  }
  .icon-more{
    color: #000;
  }
  .number{
    font-size: .2rem;
    display: inline-block;
    position: relative;
    top: -.06rem;
  }
  .like-coment-wrapper{
    position: absolute;
    right: .6rem;
  }
  .like-coment{
    overflow: hidden;
    background-color: #eeeeee;
    border-radius: .2rem;
  }
  .like-coment-float-left{
    float: left;
    margin: 0 .2rem;
  }
  .like-coment-text{
    font-size: .2rem;
    display: inline-block;
    position: relative;
    top: -.06rem;
  }
  .like-coment-icon{
    color: #000000;
  }
  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  /*评论部分*/
  .coment-wrapper{
    margin-top: .2rem;
    padding: 0.2rem;
    background-color: #eee;
    font-size: 0.28rem;
    border-radius: 0.2rem;
  }
  .coment-item{
    padding-top: 0.2rem;
    line-height: 0.4rem;
  }
  .coment-item:first-child{
    padding-top: 0;
  }
  .coment-item-name{
    color: #6a9eef;
  }
  /*输入框*/
  .inputBox{
    background-color: #fff;
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 1rem;
    z-index: 2;
    display: flex;
  }
  .input-area{
    flex: 1;
    height: .6rem;
    background-color: #eee;
    margin: .2rem .3rem;
    border-radius: .4rem;
    padding-left: .2rem;
  }
  .input-area:focus{
    outline: none;
  }
  .input-btn{
    width: 1.2rem;
    height: .6rem;
    margin: .2rem .3rem .2rem 0;
    background-color: #ffe300;
    color: #fff;
    box-shadow: none;
    border: 0;
    outline: none;
    border-radius: .4rem;
  }
  .fade-enter-active {
    transition: all .2s ease;
  }
  .fade-leave-active {
    transition: all .2s ease;
  }
  .fade-enter, .fade-leave-to
    /* .fade-leave-active for below version 2.1.8 */ {
    transform: translateY(.4rem);
    opacity: 0;
  }
</style>
