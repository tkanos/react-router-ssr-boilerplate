import React from 'react'


//props.StaticRouter comes from StaticRouter Context (do not expect that on browser)
const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return <h1>Oops, route not found.</h1>
}

export default {
    component: NotFoundPage
}