import React from 'react'

export default function Attendance({students, onSelect}){
  return (
    <div className="bg-white shadow rounded p-6">
      <h2 className="text-xl font-semibold mb-4">Attendance</h2>
      <ul className="space-y-2">
        {students.map(s=> (
          <li key={s.id} className="flex items-center justify-between p-2 border rounded">
            <div>
              <div className="font-medium">{s.name}</div>
              <div className="text-sm text-gray-600">{s.email}</div>
            </div>
            <div className="text-sm">{s.attendance}%</div>
            <button className="ml-4 text-blue-600" onClick={()=>onSelect(s.id)}>View</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
