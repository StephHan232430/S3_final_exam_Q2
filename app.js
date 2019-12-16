const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  const MS_PER_SEC = 1e6
  let start = process.hrtime()
  let date = new Date()
  let formatedDate = `${date.getFullYear()}-${('0' + (Number(date.getMonth()) + 1)).substr(-2)}-${('0' + date.getDate()).substr(-2)} ${('0' + date.getHours()).substr(-2)}:${('0' + date.getMinutes()).substr(-2)}:${('0' + date.getSeconds()).substr(-2)}`

  res.on('finish', () => {
    let elapsedTime = process.hrtime(start)[1]
    console.log(`${formatedDate} | ${req.method} from ${req.url} | total time: ${Math.ceil(elapsedTime / MS_PER_SEC)}ms`)
  })

  next()
})

// 列出全部 Todo
app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})