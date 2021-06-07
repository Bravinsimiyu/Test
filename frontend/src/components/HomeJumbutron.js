import React from 'react'
import { Button, Jumbotron, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomeJumbutron = () => {
    return (
        <>
        
            <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Link to='/today' className='btn btn-dark'>Get Started</Link>
            </p>
            </Jumbotron>
    

        </>
    )
}

export default HomeJumbutron
