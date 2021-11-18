import React from 'react'
import HeroSection from '../../HeroSetion'
import Pricing from '../Pricing/Pricing'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'

function Home() {
    return (
        <>
        <Pricing />
        <HeroSection {...homeObjOne} />
        
        </>
    )
}

export default Home;
