import React from 'react'
import { useParams } from 'react-router-dom'
import ApplyForm from '../widgets/ApplyForm'
export default function JobDetail(){
  const { id } = useParams()
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">Job Opening — {id}</h1>
      <p className="mb-6">Detailed job description (mock). Submit your application below.</p>
      <ApplyForm context={`job-${id}`} />
    </div>
  )
}
