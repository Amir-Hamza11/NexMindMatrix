import React from 'react'
import Hero from '../components/Hero'
import ServicesList from '../components/ServicesList'
import BusinessPitch from '../components/BusinessPitch'
import StatsSection from '../components/StatsSection'
import Expertise from '../components/Expertise'

export default function Home() {
  return (
    <div>
      <Hero />
      <BusinessPitch />
      <StatsSection />
      <Expertise />
      {/* <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Services</h2>
        <ServicesList />
      </section> */}
    </div>
  )
}
