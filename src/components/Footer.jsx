import React from 'react'
export default function Footer(){
  return (
    <footer className="bg-nm-500 text-white py-8 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">© {new Date().getFullYear()} NexMindMatrix — All rights reserved</p>
      </div>
    </footer>
  )
}
