# 兼容新版浏览器的新语法和旧版浏览器的过时语法

对于目前的项目，很多是经过 babel 进行转译，开发者在编写代码时会使用最新的 JS 语法，然后通过 babel 转译为兼容旧版浏览器的旧语法。新特性的代码量小，转译之后的兼容代码代码量大，目前很多用户已经不再使用旧设备和旧浏览器了，所以需要一个方法，能让使用新设备的用户节省流量，下载新浏览器支持的新语法代码，而同时让旧浏览器只下载旧特性代码。

在 `<script>` 标签中加入 `type="module"` 来表示这是新浏览器下载的资源，在标签中加入 `nomodule` 来表示这是旧浏览器下载的资源（是不支持 `type="module" 的浏览器下载的资源`）：

```html
<script type="module" src="index.js"></script>
<script nomodule src="index.mjs"></script>
```

本范例还有问题，问题是生成的 `index.js` 和 `index.mjs` 不能同时注入单个 html 文件中。webpack 配置有两个，一个用来生成 `type="module"` 的，第二个用来生成 `nomodule` 的，当我希望通过 `html-webpack-plugin` 将已生成第一个 html 作为模版时，产生报错，警告模版不存在。

其它资源：
- Webpack 构建策略 module 和 nomodule，*https://juejin.cn/post/6844903636565229576*
- 前端性能优化（三）：构建优化，https://segmentfault.com/a/1190000040096758
- webpack-nomodule-plugin，https://github.com/swimmadude66/webpack-nomodule-plugin
- 【译】如何在生产环境中部署ES2015+，https://juejin.cn/post/6844903509112930317