# useContext 和组件渲染之间的关系

会由于 context 变化渲染的：
- `<Context.Provider>` 内部没有使用 `memo` 包裹的组件，无论是否调用 `useContext`；
- 在 `<Context.Provider>` 外部，向内部传入的 renderProps。

不会因 context 变化渲染的：
- `<Context.Provider>` 内部使用 `memo` 包裹的组件；
- 在 `<Context.Provider>` 外部，作为 prop 传入的组件。