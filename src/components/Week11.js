import React from 'react'
import Matches from './Matches'

export default function Week11({ matches, user }) {


    const getBetOdds = (num) => {
        let odds;

        if (num >= 0) {
            odds = num >= 0 ? (num / 100) + 1 : (100 / Math.abs(num)) + 1;

        } else {
            odds = num >= 0 ? (num / 100) + 1 : (100 / Math.abs(num)) + 1;


        } return ((odds * 10).toFixed(0));
    }


    return (
        <div className='container '  style={{height: 'inherit', overflow: 'auto'}}>
            {matches.map((m, idx) => <Matches key={idx} matches={m} getOdds={getBetOdds} user = {user}/>)}
        </div>
    )
}
