import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {

    sendLoginInfo = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:5000/login'


        const body = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }

        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)

        if (data.status === 'ok') {
            this.props.logMeIn(data.data)
        }
    }


    render() {
        return (
            <div>
                <form className='col-4' onSubmit={(e) => { this.sendLoginInfo(e) }} style={{marginLeft:250, paddingTop:60}}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Username</label>
                        <input type="text" className="form-control" name='username' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
                        <input type="password" className="form-control" name='password' />
                    </div>
                    <button type="submit" className="btn btn-warning fw-semibold" style={{marginBottom:50}}>Submit</button>
                </form>
                <Link to='/Signup' className='link-warning text-decoration-none fst-italic'>Create Account</Link>
            </div>
        )
    }
}