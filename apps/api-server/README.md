# 简介

## 部分截图
<img src="https://gitee.com/ceartmy/koa-typescript-starter/raw/master/docs/images/run.png" width="100%" />
<img src="https://gitee.com/ceartmy/koa-typescript-starter/raw/master/docs/images/api.png" width="100%" />
<img src="https://gitee.com/ceartmy/koa-typescript-starter/raw/master/docs/images/mysql.png" width="100%" />

基于 Typescript + Node 搭建的后端项目模板，并主要使用了以下插件：

- koa
- mysql
- chalk
- log4js
- fs-readdir-recursive
- moment

# 运行

在src/config目录下修改相关的config.xxx.ts文件

安装依赖：

```bash
yarn install
```

启动本地服务，默认运行在 `localhost:3100` 端口

```bash
yarn run watch-server
```

# 注意

- 本项目将限制`Node`版本为`14.18.1`以上，但主版本锁定为`14`