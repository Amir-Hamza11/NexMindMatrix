import React from 'react'
const SERVICES = [
  {id:'panel', title:'Online Panel', desc:'Recruit and manage panels for surveys and research.'},
  {id:'field', title:'Field Research', desc:'On-ground qualitative and quantitative fieldwork.'},
  {id:'analytics', title:'Analytics', desc:'Data processing, dashboards and modelling.'}
]
export default function ServicesList(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {SERVICES.map(s=> (
        <div key={s.id} className="p-6 border rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
          <p className="text-sm text-gray-600">{s.desc}</p>
        </div>
      ))}
    </div>
  )
}
