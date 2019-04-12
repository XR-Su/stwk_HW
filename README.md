# cruise
> servers management system

## Usage
Install dependencies
```
    yarn install or npm install
```

Launch the project
```
    yarn start or npm run start
```

Package the project
```
    yarn build or npm run build
```

## Catalog
```js
+-- dist/                                  
+-- node_modules/                           --- 项目依赖项
+-- public/                                 
|   --- index.html						              --- 入口 html 文件
+-- src/                                   
|   +-- components                         
|   |    +-- Input/                     
|   |    |    --- ...   
|   |    +-- Button/                      
|   |    |    --- ...   
|   |    +-- Popover/                 
|   |    |    --- ...   
|   |    --- Menu/                          
|   +-- pages/
|   |   +-- agent/
|   |   |   --- ...
|   |   +-- dashboard/
|   |   |   --- ...
|   |   +-- help/
|   |   |   --- ...
|   |   +-- myCruise/
|   |   |   --- ...
|   |   +-- login/
|   |   |   --- ...
|   |   +-- layout/
|   |   |   --- ...
|   |   +-- globalLayout.js
|   +-- routes                              --- 路由信息
|   +-- style                               --- 样式
|   --- app.js                              --- 项目入口文件
|   --- page.js                             --- 组件入口文件
--- package.json                                    
```