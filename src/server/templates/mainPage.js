import React from 'react'
import { renderToString } from "react-dom/server"
import { StaticRouter } from 'react-router-dom'
import Routes from '../../isomorphic/Routes'

export default (path) => {
    const content = renderToString(
      <StaticRouter location={path} context={{}}>
        <Routes/>
      </StaticRouter>
    )

    return `
    <!doctype html>
    <html>
    <head>
      <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="index.js"></script>
    </body>
    </html>
    `
}