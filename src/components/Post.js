import React from 'react'

export default function Post({posts}) {
  return (
    <div className="card bg-secondary" style={{width: '30rem'}}>
                <div className="card-body">
                    <h3 className="card-text">{posts.caption}</h3>
                    <p className="card-text">{posts.author}</p>
                    <p>{posts.date_created}</p>
                </div>
            </div>
  )
}
