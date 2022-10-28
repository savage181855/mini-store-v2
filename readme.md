# mini-component-dev

> 基于 `gulp4`+ `typescript`开发的微信小程序组件库打包脚手架

## 安装

```
git clone https://github.com/savage181855/mini-component-dev.git
```

## 支持功能

- ts 编译
- sass 编译
- less 编译
- js 压缩
- wxss 压缩
- wxml 压缩
- json 压缩
- png | jpg 压缩


## 目录结构

```
├─config // 打包配置
├─docs // 文档
├─gulpfile.ts // gulp任务
├─miniprogram_dev // 开发环境构建目录，可以自行替换
│  ├─miniprogram
│  │  ├─components
│  │  └─pages
│  │      └─index
│  └─typings
├─miniprogram_dist // 生产环境构建目录，自动压缩，可以自行替换
├─src // 组件存放的源目录
└─types // ts类型声明文件

```
## 主要说明config.ts配置文件

`gulp`打包任务会读取`config.ts`的配置内容，这里可以自行修改配置和相关文件目录

**类型说明**
```
export type Config = {
  /** 组件源代码存放的目录 */
  srcPath: string;

  /** 打包后存放代码的目标目录 */
  distPath: string;

  /** 开发中的组件存放example目录，用于实时查看开发效果 */
  devComponentPath: string;

  /** css开发使用语言 */
  css: "wxss" | "scss" | "less";

  /** 压缩 */
  minify: {
    /** js 和 ts是否压缩 */
    jsAndTs: boolean;
    /** css 是否压缩 */
    css: boolean;
    /** 图片 是否压缩 */
    img: boolean;
  };
};

```

**当前配置**
```
import path from "path";

import type { Config } from "./types";

export const joinPath = path.resolve;

const config: Config = {
  srcPath: joinPath(__dirname, "../src"),
  distPath: joinPath(__dirname, "../miniprogram_dist"),
  devComponentPath: joinPath(
    __dirname,
    "../miniprogram_dev/miniprogram/components"
  ),

  css: "wxss",
  minify: {
    css: true,
    jsAndTs: true,
    img: true,
  },
};

export default config;

```
## 使用

1.安装依赖
```
npm install
```

2.开发环境自动检测文件改变自动编译
```
npm run dev
```

`gulp`会自动监测`config.srcPath`目录并打包至`config.devComponentPath`，文件修改会自动重写进行打包。

3.生产环境打包自动压缩
```
npm run build
```
`gulp`会打包`config.srcPath`目录并压缩至`config.distPath`。


## 发布

**注意**：必须使用官网的镜像！！！

1.去[npmjs官网](https://www.npmjs.com/)注册一个账号。

2.在当前目录执行`npm login`命令进行登录。

3.在当前目录执行`npm publish`进行`npm`包的发布。


## 设计哲学

为什么 gulp 和 rollup 混用？