// 开启mock服务
const {exec} = require('child_process')
const express = require('express')
const bodyParser = require('body-parser')

const base = 'http://localhost'
const port = 3001

const app = express()
const router = express.Router()

app.use(bodyParser.json());  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({ //此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}))

app.get('/', function (res, req) {
  req.send('hello')
})

router.use('/test', require('./test'))

app.use('/api', router)

app.listen(port)

exec(`open ${base}:${port}/`)
