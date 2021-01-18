import 'babel-polyfill'
import express from 'express'
import proxy from 'express-http-proxy'
import { matchRoutes } from 'react-router-config'
import Routes from '../isomorphic/Routes'
import 'dotenv/config'
import mainPage from './templates/mainPage'
import createStore from '../isomorphic/createStore'
import { opts } from 'commander'

const app = express()

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000'

        return opts
    }
}))

app.use(express.static('./dist/public'))

app.get('*', (req, res) => {
    const store = createStore(req)

    // Attempt to call the initialisation of data, to do not have to do it in ajax on the first attempt
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.initData ? route.initData(store) : null;
    }).map( promise => {
        if (promise) {
            return new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve)
            })
        }
    })

    Promise.all(promises).then( () => {
        const context = {}
        const content = mainPage(req.path, store, context)

        if (context.notFound) {
            res.status(404)
        }

        res.send(content)
    })
})
 
app.listen(process.env.PORT, () =>
  console.log('Listening %d!', process.env.PORT),
)