# 过渡动画、元素卸载和 `display: none`

元素装载时过渡动画：

```
已卸载 > click > 已装载 > tick > 进行动画 > click > 动画结束 > 已卸载
```

`display: block` 时过渡动画：

```
none > click > block > tick 进行动画 > click 动画结束 > none
```

元素装载后，或 `display: block` 后，都需要等待一个事件循环，等待浏览器渲染一次动画初始状态，再开始动画样式的设置。

`/src/app.jsx` 中的组件 `<LoadTransition>` 和 `<BlockTransition>` 的实现分别对应了上面两个动画过程。
