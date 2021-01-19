import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from './components/Header'
import PropTypes from 'prop-types'


const App = ({ route }) =>{
    return (
    <div>
        <Header />
        { renderRoutes(route.routes)}
    </div>)
} 

App.propTypes = {
   route: PropTypes.object.isRequired,
}

export default {
    component: App 
}