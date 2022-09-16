import React from 'react'

export default function Nav1({ user }) {
  return (
    
        user.username ?
        <div className="d-flex">
          <div className="p-2 w-100 text-warning" style={{marginLeft:100}}><h1>EPLBets</h1></div>
          <div className="p-2 flex-shrink-1"><h3>{user.username}</h3></div>
        </div>
        :
        <>
        <div className="d-flex">
          <div className="p-2 w-100 text-warning"><h1>EPLBets</h1></div>
        </div>
        </>
    
  )
}
