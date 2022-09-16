import React, { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Nav1 from './components/Nav1'
import Week11 from './components/Week11'
import Week7 from './components/Week7'
import Week8 from './components/Week8'
import Week9 from './components/Week9'
import Week10 from './components/Week10'
import Bets from './views/Bets'
import Community from './views/Community'
import Home from './views/Home'
import Leaderboard from './views/Leaderboard'
import Login from './views/Login'
import Signup from './views/Signup'
import MakeAPost from './components/MakeAPost'


export default function App() {

  const getUserFromLS = () => {
    const foundUser = localStorage.getItem('final_user')
    if (foundUser){
      return JSON.parse(foundUser)
    }
    return []
  }


  const [user, setUser] = useState(getUserFromLS())
  const [money, setMoney] = useState([user.money])



  const logMeIn = (user) => {
    setUser(user)
    localStorage.setItem('final_user', JSON.stringify(user))
  }

  const logMeOut = ()=>{
    setUser([])
    localStorage.removeItem('final_user')
  }


  const makeHomeBet = () => { }

  const makeAwayBet = () => { }

  const [match, setMatch] = useState([])

  const getAllOdds = async () => {
    const res = fetch('https://api.sportsdata.io/v3/soccer/scores/json/CompetitionDetails/EPL?key=d55aa154705948c3a0b5174555dbb6e8')
    const data = await (await res).json()
    console.log(data)
    console.log(data.Games[60])
    setMatch(data.Games)
  }
  const newList = [...match]
  const w7matches = newList.slice(60, 70)
  const w8matches = newList.slice(71, 81)
  const w9matches = newList.slice(82, 92)
  const w10matches = newList.slice(93, 103)
  const w11matches = newList.slice(104, 114)




  useEffect(() => {
    getAllOdds()
  }, [])




  return (
    <div className="container-fluid text-center mh-100 bg-dark">
      <div className='row'>
        <div className="col"></div>
        <BrowserRouter>

          <div className="col-5 border border-success rounded bg-secondary mh-100">
            <Nav1 user={user} />
            <div className='container text-center vh-100'>
              <div style={{ height: '80%' }}>
                <Routes>
                  <Route path='/home' element={<Home user={user} logMeOut = {logMeOut} money = {money}/>} />
                  <Route path='/' element={<Login logMeIn={logMeIn} user={user} />} />
                  <Route path='/signup' element={<Signup user={user} />} />
                  <Route path='/leaderboard' element={<Leaderboard />} />
                  <Route path='/community' element={<Community />} />
                  <Route path='/bets' element={<Bets matches={match} />} />
                  <Route path='/week7' element={<Week7 matches={w7matches} user = {user} money = {money}/>} />
                  <Route path='/week8' element={<Week8 matches={w8matches} user = {user} money = {money}/>} />
                  <Route path='/week9' element={<Week9 matches={w9matches} user = {user} money = {money}/>} />
                  <Route path='/week10' element={<Week10 matches={w10matches} user = {user} money = {money}/>} />
                  <Route path='/week11' element={<Week11 matches={w11matches} user = {user} money = {money}/>} />
                  <Route path='/makeAPost' element={<MakeAPost user={user} />} />
                </Routes>
              </div>
              <div className='row h-auto'>
                <Nav user={user} />
              </div>

            </div>
          </div>
          <div className="col"></div>
        </BrowserRouter>
      </div>
    </div>
  )
}
