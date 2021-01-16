import express from 'express'
import 'dotenv/config'
import mainPage from './templates/mainPage'

const app = express()

app.use(express.static('./dist/public'))

app.get('*', (req, res) => {
    res.send(mainPage(req.path))
})
 
app.listen(process.env.PORT, () =>
  console.log('Listening %d!', process.env.PORT),
)