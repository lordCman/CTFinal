import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import CasinoIcon from '@mui/icons-material/Casino';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PeopleIcon from '@mui/icons-material/People';

export default function Nav({user}) {
    return (
      user.username ? 
        <div className="container text-center">
        <div className="row">
          <div className="col d-grid"><Link className="btn btn-warning btn-lg" to="/home" role="button"><HomeIcon sx={{ fontSize: 40 }}/></Link></div>  

          <div className="col d-grid"><Link className="btn btn-warning btn-lg" to="/bets" role="button"><CasinoIcon sx={{ fontSize: 40 }}/></Link></div>
          <div className="col d-grid"><Link className="btn btn-warning btn-lg" to="/community" role="button"><PeopleIcon sx={{ fontSize: 40 }}/></Link></div>
          <div className="col d-grid"><Link className="btn btn-warning btn-lg" to="/leaderboard" role="button"><LeaderboardIcon sx={{ fontSize: 40 }}/></Link></div>
        </div>
        </div>
        :
        <div className="container text-center">
        <div className="row">
          <div className="col d-grid"><Link className="btn btn-warning btn-lg" to="/" role="button"><HomeIcon sx={{ fontSize: 40 }}/></Link></div>  

          <div className="col d-grid"><Link className="btn btn-warning btn-lg" to="/" role="button"><CasinoIcon sx={{ fontSize: 40 }}/></Link></div>
          <div className="col d-grid"><Link className="btn btn-warning btn-lg" to="/" role="button"><PeopleIcon sx={{ fontSize: 40 }}/></Link></div>
          <div className="col d-grid"><Link className="btn btn-warning btn-lg" to="/" role="button"><LeaderboardIcon sx={{ fontSize: 40 }}/></Link></div>
        </div>
        </div>

    )
}
