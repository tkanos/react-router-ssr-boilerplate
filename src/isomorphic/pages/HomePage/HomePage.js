import React from 'react'

const HomePage = () => {
    return (
    <div>
        <div> I'm the Home component</div>
       <button onClick={ () => console.log('Hello') }>Press Me</button>
    </div>)
}

export default {
    component: HomePage
}