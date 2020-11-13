# ts-koa2
ts-koa2编写 RESTful API 手脚架🉑️
再也不用重头创建koa2的TS编写环境。让您直接进入业务开发阶段。

### 克隆
``` shell
git clone https://github.com/waterbang/ts-koa2.git
```

### 安装
``` shell
npm init
```


### 运行
``` shell
npm run serve 
```


### 项目结构
```shell
.
├── README.md
├── launch.json
├── package-lock.json
├── package.json
├── src
│   ├── app.ts
│   ├── hooks
│   ├── routes
│   │   └── index.ts
│   ├── server.ts
│   └── typings
│       └── index.ts
├── tasks.json
├── tsconfig.json
└── tslint.json
```


<!-- ### 把Hub转换为web模型

pip install tensorflowjs

```shell
tensorflowjs_converter \
    --input_format=tf_saved_model \
    --output_node_names='models/ssd_mobilenet_v2_2/Rpsate_2' \
    --saved_model_tags=serve \
    models/ssd_mobilenet_v2_2 \         # 本地模型地址   
    models/ssd_mobilenet_v2_2/web_model # 模型保存地址
``` -->