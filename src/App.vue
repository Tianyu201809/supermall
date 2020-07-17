<template>
  <div id="app">
    <!-- <div id="tab-bar">
      <div class="tab-bar-item">首页</div>
      <div class="tab-bar-item">分类</div>
      <div class="tab-bar-item">购物车</div>
      <div class="tab-bar-item">我的</div>
    </div>-->
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red"> 
        <img src="./assets/images/tabbar/shouye.svg" alt slot="item-icon" class=""/>
        <img src="./assets/images/tabbar/shouye_active.svg" alt slot="item-icon-active" class=""/>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="red">
        <img src="./assets/images/tabbar/fenlei.svg" alt slot="item-icon" />
        <img src="./assets/images/tabbar/fenlei_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img src="./assets/images/tabbar/gouwuche.svg" alt slot="item-icon" />
        <img src="./assets/images/tabbar/gouwuche_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" >
        <img src="./assets/images/tabbar/wode2.svg" alt slot="item-icon" />
        <img src="./assets/images/tabbar/wode2_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
<style>
/* 引用css */
@import "assets/css/base.css";
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.2);
}
</style>
