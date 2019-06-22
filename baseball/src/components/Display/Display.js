import React from 'react'
import { CountContext } from '../../contexts/CountContext'

export default function Display() {
    const {
        balls,
        strikes,
        hits,
        incBalls,
        incStrikes,
        incHits,
        resetCount,
        maxCount
    } = React.useContext(CountContext)

    return (
        <>
            <div>
                <p>{`Ball: ${balls}`}</p>
                <button disabled={maxCount} onClick={incBalls}>
                     Add Ball
                </button>
            </div>
            <div>
                <p>Strike: {strikes}</p>
                <button disabled={maxCount} onClick={incStrikes}>
                    Add Strike
                </button>
            </div>
            <div>
                <p>Hits: {hits}</p>
                <button disabled={maxCount} onClick={incHits}>
                    Add Hit
                </button>
            </div>
            {balls === 4 && (
                <>
                    <h3>The batter has been walked.</h3>
                    <button onClick={resetCount}>New Batter</button>
                </>
            )}
            {strikes === 3 && (
                <>
                    <h3>The batter has been struck out!</h3>
                    <button onClick={resetCount}>New Batter</button>
                </>
            )}
        </>
    )
}
