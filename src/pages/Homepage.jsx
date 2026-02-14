import React from 'react';
import Hero from '../components/Homepage/Hero';
import DashboardPreview from '../components/Homepage/DashboardPreview';
import FeatureBoxes from '../components/Homepage/FeatureBoxes';
import OrbitSection from '../components/Homepage/OrbitSection';
import CompaniesSection from '../components/Homepage/CompaniesSection';
import ContactSection from '../components/Homepage/ContactSection';
function Homepage() {
    return ( <>
 <Hero />
 <DashboardPreview />
     <FeatureBoxes />
     <OrbitSection/>
     <CompaniesSection/>
        <ContactSection/>
    </> );
}

export default Homepage;