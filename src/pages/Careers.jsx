import React from 'react'
import { Link } from 'react-router-dom'
const JOBS = [
  {id: '1', title: 'Research Analyst', location: 'Remote'},
  {id: '2', title: 'Panel Manager', location: 'Delhi, India'}
]
export default function Careers(){
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Careers</h1>
      <p className="mb-6">Join our team - we hire across research, operations and data roles.</p>
      <div className="space-y-4">
        {JOBS.map(j => (
          <div key={j.id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{j.title}</h3>
              <p className="text-sm text-gray-600">{j.location}</p>
            </div>
            <Link to={`/careers/${j.id}`} className="px-4 py-2 bg-nm-700 text-white rounded">Apply</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
