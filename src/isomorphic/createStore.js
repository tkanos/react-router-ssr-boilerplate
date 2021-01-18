import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import axios from 'axios'

export default (req) => {

    const apiAxios = axios.create({
        baseURL: 'http://react-ssr-api.herokuapp.com', //server call
        headers: { cookie: req.get('cookie') || '' }
    })

    const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument({
        api: apiAxios,
    })))

    return store
}