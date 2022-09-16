import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Post from '../components/Post'

export default function Community() {
  const [post, setPost] = useState([])



  const getPosts = async  ()=> {
    const res = await fetch('http://localhost:5000/posts')
    const data = await res.json();
    console.log(data)
    setPost(data.posts)
  }
  useEffect(() => {
    getPosts()
  }, [])



  return (
    <div style={{paddingLeft:150, height: 'inherit', overflow: 'auto'}}>
        <Link className="btn btn-warning" to="/makeAPost" role="button" style={{marginLeft:460}}>Make A Post</Link>
        {post.map((p, idx)=><Post key={idx} posts={p}/>)}
    </div>
  )
}
