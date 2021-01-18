import React from 'react'
import { renderToString } from "react-dom/server"
import { StaticRouter } from 'react-router-dom'
import Routes from '../../isomorphic/Routes'
import {Provider}  from 'react-redux'
import { renderRoutes } from 'react-router-config'
import serialize from 'serialize-javascript'
import { Helmet } from 'react-helmet'

export default (path, store, context) => {
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={path} context={context}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>
    )

    const helmet =  Helmet.renderStatic();

    return `
    <!doctype html>
    <html>
    <head>
     ${helmet.title.toString()}
     ${helmet.meta.toString()}
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
        window.INITIAL_STATE = ${serialize(store.getState())}
      </script>
      <script src="index.js"></script>
    </body>
    </html>
    `
}