import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import Routes from '../isomorphic/Routes'
import 'dotenv/config'
import mainPage from './templates/mainPage'
import createStore from '../isomorphic/createStore'

const app = express()

app.use(express.static('./dist/public'))

app.get('*', (req, res) => {
    const store = createStore()

    // Attempt to call the initialisation of data, to do not have to do it in ajax on the first attempt
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.initData ? route.initData(store) : null;
    })

    Promise.all(promises).then( () => {
        res.send(mainPage(req.path, store))
    })
})
 
app.listen(process.env.PORT, () =>
  console.log('Listening %d!', process.env.PORT),
)