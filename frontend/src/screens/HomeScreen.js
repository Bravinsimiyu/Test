import React from 'react'
import { Table } from 'react-bootstrap'
import HomeCarousel from '../components/HomeCarousel'
import HomeJumbutron from '../components/HomeJumbutron'
import Services from '../components/Services'

const HomeScreen = () => {
    return (
        <>  
            <HomeJumbutron />
            <Services />
        </>
    )
}

export default HomeScreen
