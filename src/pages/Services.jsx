import React from 'react'
import ServicesList from '../components/ServicesList'
import { Link } from 'react-router-dom'
import B2Bsection from '../components/B2Bsection'
import B2Csection from '../components/B2Csection'
import HealthcareSection from '../components/HealthcareSection'
export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Services</h1>
      <p className="mb-6">We provide a wide range of research services including an Online Panel product.</p>
      <B2Bsection />
      <B2Csection />
      <HealthcareSection />
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Conduct Survey</h2>
        <div className="p-6 border rounded-lg">
          <p className="mb-4">Modern technologies are added to our internal project management system and sampling methods.
            In order to assist our industry and corporate clients, we strive to use the most cutting-edge techniques
            and best practises.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {/* <div className="p-4 bg-gray-50 rounded">Panel Dashboard (mock)</div>
            <div className="p-4 bg-gray-50 rounded">Respondent Management (mock)</div> */}
          </div>
          <div className="mt-4">
            <Link to="/contact" className="inline-block px-4 py-2 bg-nm-700 text-white rounded">Request Demo</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
