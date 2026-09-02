import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Marks from './pages/Marks'
import Attendance from './pages/Attendance'

import studentsData from './data/students.json'

export default function App(){
  const [view, setView] = useState('dashboard')
  const [students, setStudents] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(()=>{
    const stored = localStorage.getItem('students')
    if(stored) setStudents(JSON.parse(stored))
    else {
      setStudents(studentsData)
      localStorage.setItem('students', JSON.stringify(studentsData))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('students', JSON.stringify(students))
  },[students])

  const selectStudent = (id)=>{
    const s = students.find(x=>x.id===id)
    setSelected(s)
    setView('student')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onChange={setView} />
      <main className="p-6 max-w-5xl mx-auto">
        {view==='dashboard' && <Dashboard students={students} onSelect={selectStudent} />}
        {view==='marks' && <Marks students={students} onSelect={selectStudent} />}
        {view==='attendance' && <Attendance students={students} onSelect={selectStudent} />}
        {view==='student' && selected && (
          <div className="bg-white shadow rounded p-6">
            <h2 className="text-xl font-semibold mb-2">{selected.name}</h2>
            <p className="text-sm text-gray-600">Email: {selected.email}</p>
            <div className="mt-4">
              <h3 className="font-medium">Marks</h3>
              <ul className="list-disc pl-5">
                {Object.entries(selected.marks).map(([sub, val])=> (
                  <li key={sub}>{sub}: {val}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="font-medium">Attendance</h3>
              <p>{selected.attendance}%</p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
