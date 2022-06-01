<!--
 * @Author: LiuMeiYu
 * @Date: 2022-05-24 15:24:08
 * @LastEditors: LiuMeiYu
 * @LastEditTime: 2022-06-01 16:26:58
 * @FilePath: \vue3-ts-glass-card\src\App.vue
 * @Description: *
 * *
 * Copyright (c) 2022 by yihua, All Rights Reserved.
-->
<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
}

body::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#2193b0, #6dd5ed);
  clip-path: circle(30% at right 70%);
}

body::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#dacd1e, #cb16d1);
  clip-path: circle(20% at 10% 10%);
}

#app {
  font-family: Poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
