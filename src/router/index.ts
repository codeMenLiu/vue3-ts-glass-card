/*
 * @Author: LiuMeiYu
 * @Date: 2022-05-24 15:24:08
 * @LastEditors: LiuMeiYu
 * @LastEditTime: 2022-05-24 15:30:59
 * @FilePath: \vue3-ts-glass-card\src\router\index.ts
 * @Description: *
 * *
 * Copyright (c) 2022 by yihua, All Rights Reserved.
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
