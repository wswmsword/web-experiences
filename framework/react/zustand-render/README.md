# 使用 zustand 状态和组件渲染情况

仅会在使用 zustand 状态的组件中造成重新渲染，渲染组件的父组件们的状态如果没有改变，是不会引起渲染的。

实验里有 5 个嵌套组件，A～E，其中 A 组件使用按钮触发 zustand 更新状态，D 组件消费 zustand 状态，最终控制台会展示重新渲染 D 和 E。

由于渲染的组件会导致子组件也跟随渲染，因此状态应该更多的被叶子节点使用，这样可以减少中间层组件的渲染。
