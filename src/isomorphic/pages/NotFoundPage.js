import React from 'react'
import PropTypes from 'prop-types'

//props.StaticRouter comes from StaticRouter Context (do not expect that on browser)
const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return <h1>Oops, route not found.</h1>
}

NotFoundPage.propTypes = {
    staticContext: PropTypes.object.isRequired,
 }

export default {
    component: NotFoundPage
}