import React, { useState } from 'react'
export default function ContactForm(){
  const [status, setStatus] = useState(null)
  async function handleSubmit(e){
    e.preventDefault()
    const body = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    }
    setStatus('sending')
    try{
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      const json = await res.json()
      if(json.success) setStatus('sent')
      else setStatus('error')
    }catch(err){ setStatus('error') }
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-xl">
      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input name="name" required className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input name="email" type="email" required className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Message</label>
        <textarea name="message" required className="w-full p-2 border rounded h-28" />
      </div>
      <button type="submit" className="px-4 py-2 bg-nm-700 text-white rounded">Send</button>
      {status === 'sending' && <p className="mt-2">Sending...</p>}
      {status === 'sent' && <p className="mt-2 text-green-600">Message sent! Check your email after deployment.</p>}
      {status === 'error' && <p className="mt-2 text-red-600">There was an error sending. Check configuration.</p>}
    </form>
  )
}
