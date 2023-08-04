# FLIP-Animation
使用flip原则去完成你的动画

## 什么是FLIP原则？
FLIP是First、Last、Invert、Play的缩写：
- First: 元素的初始状态。
- Last: 元素的最终状态。
- Invert: 反转更改，使元素看起来还在初始位置。
- Play: 播放更改的属性过渡，然后删除Invert更改。

## 什么时候用FLIP？
当元素的开始和结束位置以及尺寸都是未知的情况下，可以考虑使用FLIP原则去处理动画效果。

## 为什么使用FLIP？
使用flip原则可以轻松实现60fps动画。

## 相关的库
1. [gsap](https://github.com/greensock/GSAP)-构建可在所有主流浏览器中运行的高性能动画。
