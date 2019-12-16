# 期末考Q2

學期3 A30:實作 Middleware

## 功能列表

收到 request 和送出 response 時，將

1. request 的 time-stamp
2. request 的 HTTP method
3. request 的 URL
4. Request/Response Lifecycle歷時(毫秒)無條件進位結果

以『 **YYYY-MM-DD hh:mm:ss** | **METHOD** from **URL** | total time: **X**ms』格式呈現在 terminal 中

## 環境建置

1. Node.js

## 專案安裝流程

1. 開啟 terminal，將此專案 clone 至本機

```
git clone https://github.com/StephHan232430/S3_final_exam_Q2.git
```

2. 進入專案資料夾

```
cd S3_final_exam_Q2
```

3. 安裝專案所需套件

```
npm install
```

4. 執行專案
```
npm run dev
```

5. 開啟網頁瀏覽器，於網址列輸入
```
http://localhost:3000
```

## 使用工具

- [express v4.17.1](https://expressjs.com/zh-tw/)
- [Node.js v12.13.0](https://nodejs.org/en/)
- [Visual Studio Code v1.39.2](https://code.visualstudio.com/)