import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function Bets({matches}) {
    


    return (
        <div>
            <div>
                <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Premier League 
                    </a>

                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/week7">Week 7</Link></li>
                        <li><Link className="dropdown-item" to="/week8">Week 8</Link></li>
                        <li><Link className="dropdown-item" to="/week9">Week 9</Link></li>
                        <li><Link className="dropdown-item" to="/week10">Week 10</Link></li>
                        <li><Link className="dropdown-item" to="/week11">Week 11</Link></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}
