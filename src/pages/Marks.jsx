import React from 'react'

export default function Marks({students, onSelect}){
  return (
    <div className="bg-white shadow rounded p-6">
      <h2 className="text-xl font-semibold mb-4">Marks</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2">Student</th>
            <th className="py-2">Average</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s=>{
            const vals = Object.values(s.marks)
            const avg = Math.round(vals.reduce((a,b)=>a+b,0)/vals.length)
            return (
              <tr key={s.id} className="border-b">
                <td className="py-2">{s.name}</td>
                <td className="py-2">{avg}</td>
                <td className="py-2"><button className="text-blue-600" onClick={()=>onSelect(s.id)}>View</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
