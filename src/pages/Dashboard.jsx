import React from 'react'

export default function Dashboard({students, onSelect}){
  const avg = (arr)=> Math.round(arr.reduce((a,b)=>a+b,0)/arr.length)
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="bg-white shadow rounded p-6">
        <h2 className="text-xl font-semibold mb-4">Class Summary</h2>
        <p>Total students: {students.length}</p>
        <p>Average attendance: {students.length?students.reduce((a,s)=>a+s.attendance,0)/students.length:0}%</p>
      </div>

      <div className="bg-white shadow rounded p-6">
        <h2 className="text-xl font-semibold mb-4">Students</h2>
        <ul className="space-y-2">
          {students.map(s=> (
            <li key={s.id} className="p-2 border rounded flex items-center justify-between">
              <div>
                <div className="font-medium">{s.name}</div>
                <div className="text-sm text-gray-600">Attendance: {s.attendance}%</div>
              </div>
              <button className="text-sm text-blue-600" onClick={()=>onSelect(s.id)}>View</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
