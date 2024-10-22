# Redux 状态更新和组件渲染的关系

Redux 中，通过使用 `useSelector` 来获取需要的 redux 状态，只有用 selector 查找的状态发生了变化，组件才会重新渲染。

实验中，组件 `<App>` 内有 `<Counter>`，`<Counter>` 中消费了 redux 状态，也出发了 redux action，而最终重新渲染的只有 `<Counter>`，`<App>` 这一层没有重新渲染。

相关链接：

- [React 狀態管理套件比較與原理實現 feat. Redux, Zustand, Jotai, Recoil, MobX, Valtio](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/a-comparison-of-react-state-management-libraries-ba61db07332b)


