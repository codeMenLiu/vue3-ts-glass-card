<!--
 * @Author: LiuMeiYu
 * @Date: 2022-05-24 15:24:08
 * @LastEditors: LiuMeiYu
 * @LastEditTime: 2022-06-01 16:28:07
 * @FilePath: \vue3-ts-glass-card\src\views\HomeView.vue
 * @Description: *
 * *
 * Copyright (c) 2022 by yihua, All Rights Reserved.
-->
<template>
  <div class="home">
    <div class="card">
      <div class="content">
        <h1>01</h1>
        <h3>card01</h3>
        <p>
          Author: LiuMeiYu<br />
          @Date: 2022-05-24 15:24:08<br />
          @LastEditors: LiuMeiYu
        </p>
        <a href="#">Share</a>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h1>02</h1>
        <h3>card02</h3>
        <p>
          Author: LiuMeiYu<br />
          @Date: 2022-05-24 15:24:08<br />
          @LastEditors: LiuMeiYu
        </p>
        <a href="#">Share</a>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h1>03</h1>
        <h3>card03</h3>
        <p>
          Author: LiuMeiYu<br />
          @Date: 2022-05-24 15:24:08<br />
          @LastEditors: LiuMeiYu
        </p>
        <a href="#">Share</a>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h1>04</h1>
        <h3>card04</h3>
        <p>
          Author: LiuMeiYu<br />
          @Date: 2022-05-24 15:24:08<br />
          @LastEditors: LiuMeiYu
        </p>
        <a href="#">Share</a>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h1>05</h1>
        <h3>card05</h3>
        <p>
          Author: LiuMeiYu<br />
          @Date: 2022-05-24 15:24:08<br />
          @LastEditors: LiuMeiYu
        </p>
        <a href="#">Share</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
});
</script>
<style lang="less" scoped>
.home {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1;
  .card {
    position: relative;
    width: 280px;
    height: 400px;
    margin: 30px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    color: #fff;
    text-shadow: 5px 5px 5px #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    // 虚化
    backdrop-filter: blur(5px);
    cursor: pointer;
    .content {
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: translateY(100px);
      opacity: 0;
      transition: 0.5s;
      h1 {
        font-size: 80px;
        //边框色
        -webkit-text-stroke: 1px rgba(168, 159, 159, 0.39);
      }
      a {
        margin-top: 20px;
        padding: 10px 20px;
        text-decoration: none;
        background-color: #fff;
        color: #000;
        border-radius: 30px;
        box-shadow: 5px 5px 5px rgba(255, 255, 255, 0.5);
      }
    }
    &:hover {
      .content {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}
</style>
