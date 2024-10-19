# 引入 signal 之后的状态改变和渲染情况

引入 signal 之后，如果直接在 jsx 里展示 signal，不会引起任一组件的重渲染。

实验里有 6 个组件逐层嵌套，A、B、C、D、E、F、E，其中在 A 中使用 button 触发更新，在 F 中展示更新的 signal，从浏览器控制台可以看到结果，触发 button 的时候没有组件重新渲染。

相关链接：
- [@preact/signal-react](https://github.com/preactjs/signals/tree/main/packages/react)，GitHub 仓库
- [信号](https://preactjs.com/guide/v10/signals)，preact 官网 signal 使用教程
- [介绍 Signals](https://preactjs.com/blog/introducing-signals/)，preact 对于 signal 的科普博客
