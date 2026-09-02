import React from 'react'

export default function Navbar({onChange}){
  return (
    <header className="bg-white shadow">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-bold">Student Dashboard</h1>
        <nav className="space-x-3">
          <button className="px-3 py-1 rounded hover:bg-gray-100" onClick={()=>onChange('dashboard')}>Dashboard</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100" onClick={()=>onChange('marks')}>Marks</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100" onClick={()=>onChange('attendance')}>Attendance</button>
        </nav>
      </div>
    </header>
  )
}
