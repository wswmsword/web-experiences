# hooks 放在函数组件的 return 之后

hooks 放在 `return` 语句之后可能会引起错误，也可能会引起 React 报错，也可能没有任何错误。

```javascript
function Test({ c }) {
  if (c < 3) return <>小于. 3</>;
  useEffect(() => {
    console.log("大于 3..");
  }, []);
  return <>大于 3.。。。</>;
  // return <TestWithEffect />
}
```

在这个例子里，`c` 从 0 递增到 3 的时候，会得到 React 的控制台报错：

```
console.js:273 Warning: Internal React error: Expected static flag was missing. Please notify the React team.
```

另一方面，`c` 从 5 递减到 0，不会报错，可以正常运行。

进一步，对上面的第一个 `return` 之后的部分进行改造，提取成另一个函数组件，则顺利运行：

```javascript
function Test({ c }) {
  if (c < 3) return <>小于. 3</>;
  return <TestWithEffect />
}

function TestWithEffect() {
  useEffect(() => {
    console.log("大于 3..");
  }, []);
  return <>大于 3.。。。</>;
}
```

上面的例子可以看到，React 对于有些情况的处理更多依赖约定，约定了 hooks 只能放在组件最外层或自定义 hooks 中，否则情况会变得复杂，从而增加概念理解的成本。