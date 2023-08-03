import React from 'react'
import AboutMain from '../components/AboutMain'
import Banner from '../components/Banner'
import InternsCall from '../components/InternsCall'
import LabSetup from '../components/LabSetup'
import MissionVision from '../components/MissionVision'

export default function Home() {
    return (
        <>
            <Banner />
            <AboutMain />
            <InternsCall />
            <MissionVision />
            <LabSetup />
        </>
    )
}
