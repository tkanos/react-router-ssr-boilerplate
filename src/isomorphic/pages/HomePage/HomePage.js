import React from 'react'
import  Button  from 'react-bootstrap/Button';

const HomePage = () => {
    return (
    <div>
        <div> I'm the Home component</div>
       <Button onClick={ () => console.log('Hello') }>Press Me</Button>
    </div>)
}

export default {
    component: HomePage
}