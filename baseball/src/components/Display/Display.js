import React from 'react'
import { CountContext } from '../../contexts/CountContext'

export default function Display() {
    const {
        balls,
        strikes,
        hits,
        incBalls,
        incStrikes,
        incFouls,
        incHits,
        resetCount,
        maxCount
    } = React.useContext(CountContext)

    return (
        <>
            <div>
                <h3>Balls</h3>
                <p>{balls}</p>
                <button disabled={maxCount} onClick={incBalls}>
                    Ball
                </button>
            </div>
            <div>
                <h3>Strikes</h3>
                <p>{strikes}</p>
                <button disabled={maxCount} onClick={incStrikes}>
                    Strike
                </button>
                <button disabled={maxCount} onClick={incFouls}>
                    Fouls
                </button>
            </div>
            <div>
                <h3>Hit</h3>
                <p>{hits}</p>
                <button disabled={maxCount} onClick={incHits}>
                    Hit
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
