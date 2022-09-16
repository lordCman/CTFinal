
import React from 'react'
import { useEffect, useState } from 'react';



export default function Matches({ matches, getOdds, user, money }) {

    const makeBet = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/createBet',{
            method: 'POST',
            headers: {
                Authorization: `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                teamToWin: matches.HomeTeamName,
                odds: getOdds(matches.HomeTeamMoneyLine)
            })
        });
        const data = await res.json();
        console.log(data)
    }

    const makeBetAway = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/createBet',{
            method: 'POST',
            headers: {
                Authorization: `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                teamToWin: matches.AwayTeamName,
                odds: getOdds(matches.AwayTeamMoneyLine)
            })
        });
        const data = await res.json();
        console.log(data)

    }



    return (
        <div className='container-fluid' >
            <h3><img src={`../../images/${matches.HomeTeamKey}.jpg`} style={{ maxWidth: 60, maxHeight: 50 }} />{matches.HomeTeamKey} VS {matches.AwayTeamKey}<img src={`../../images/${matches.AwayTeamKey}.jpg`} style={{ maxWidth: 60, maxHeight: 50 }} /></h3>
            <p className='fw-bold'>MLine</p>
                <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{marginRight:35}}>
                    {matches.HomeTeamMoneyLine}
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel" name='teamWon'>{matches.HomeTeamName}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body" name='odds'>
                                Your payout will be {getOdds(matches.HomeTeamMoneyLine)}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-warning" onClick={makeBet}>Make Bet</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-dark text-warning" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                    {matches.AwayTeamMoneyLine}
                </button>


                <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel" name = 'teamWon'>{matches.AwayTeamName}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body" name='odds'>
                                Your payout will be {getOdds(matches.AwayTeamMoneyLine)}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={makeBetAway}>Make Bet</button>
                            </div>
                        </div>
                    </div>
                </div>
            

        </div>
    )
}
