import React from 'react'
import { Link } from 'react-router-dom'

export default function Home({ user, logMeOut, money }) {
    return (
        <div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" className=" text-dark btn btn-warning fw-semibold">Balance: ${money}</button>
                <Link to='/'><button className="btn btn-danger" type="button" onClick={logMeOut}>Logout</button></Link>
            </div>
            <div>
                
            </div>

        </div>
    )
}
