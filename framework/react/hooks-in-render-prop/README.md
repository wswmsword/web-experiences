# hooks 在 render prop 中的表现

组件中，为 有 hooks 的 render prop 添加条件的时候，会直接抛出异常，没有条件的时候，可能没有问题。

当 render props 直接放在组件中的时候，行为有点像自定义 hooks。

在这个文件夹的例子里，列举了 4 种情况，是 prop、children、组件中的 hooks 和 render prop 中的 hooks 之间的对比：
- 包含 hooks 的 render props 通过 prop 传递；
- 包含 hooks 的 render props 通过 children 传递；
- 包含 hooks 的组件通过 prop 传递；
- 包含 hooks 的组件通过 children 传递。

包含 hooks 的组件，主要用来模拟在 render prop 中，提取带有 hooks 的部分，提取成一个组件的情况。