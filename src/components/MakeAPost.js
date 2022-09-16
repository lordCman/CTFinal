import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CreatePost extends Component {

    sendCreateInfo = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/posts/create',{
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.props.user.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                caption: e.target.caption.value
            })
        });
        const data = await res.json();
        console.log(data)
    }


    render() {
        return (
            <form className='col-4' onSubmit={(e) => { this.sendCreateInfo(e) }} style={{marginLeft:250, marginTop:100}}>
                <div className="mb-3">
                    <label className="form-label fw-bold">Caption</label>
                    <input type="text" className="form-control" name='caption' />
                </div>
                <button type="submit" className="btn btn-warning">Submit</button>
            </form>
        )
    }
}
